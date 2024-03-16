import {Args, Command} from '@oclif/core'
import { ConnectionOptions} from 'mysql2';
import mysql from 'mysql2/promise'

export default class Explore extends Command {
  static args = {
    database: Args.string({description: 'MySQL database', required: true}),
    host: Args.string({description: 'MySQL Host', required: true}),
    password: Args.string({description: 'MySQL password', required: true}),
    username: Args.string({description: 'MySQL username', required: true}),
  }

  static description = 'Connect to MySQL database and generate a json graph data.'

  static examples = [
    `$ graphmysql explore your_db 127.0.0.1 yourpassword youruser > graph.json`,
  ]

  static flags = {
  }

  async run(): Promise<void> {

    const {args} = await this.parse(Explore)
    const nodes = [];
    const links = [];

    const access: ConnectionOptions = {
      database: args.database,
      host: args.host,
      password: args.password,
      user: args.username,
    };

    // establish connection
    const conn = await mysql.createConnection(access);

    // retrieve all tables
    const [tablesRes] = await conn.query('show tables');
    const tables = JSON.parse(JSON.stringify(tablesRes))
    for (const table of tables){
      nodes.push({
        "id": table['Tables_in_' + args.database],
        "name": table['Tables_in_' + args.database],
        "referenceCount": 0
      });
    }

    // ensure nodes have only unique items
    const uniqueNodes = nodes.filter((value, index, self) => 
      self.findIndex(v => v.id === value.id && v.name === value.name) === index
    );

    // dependencies
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nodeDependencies:any = {};

    // retrieve all constraints
    const [constraintsRes] = await conn.query(`SELECT i.TABLE_NAME, k.COLUMN_NAME, k.REFERENCED_TABLE_NAME, k.REFERENCED_COLUMN_NAME 
            FROM information_schema.TABLE_CONSTRAINTS i 
            LEFT JOIN information_schema.KEY_COLUMN_USAGE k ON i.CONSTRAINT_NAME = k.CONSTRAINT_NAME 
            WHERE i.CONSTRAINT_TYPE = 'FOREIGN KEY'`);

    const constraints = JSON.parse(JSON.stringify(constraintsRes))
    for (const constraint of constraints){

      // table -> table
      if(nodes.some(el => (el.id === constraint.TABLE_NAME)) && nodes.some(el => (el.id === constraint.REFERENCED_TABLE_NAME))){
        links.push({
          "source": constraint.TABLE_NAME,
          "target": constraint.REFERENCED_TABLE_NAME,
          "type": `${constraint.TABLE_NAME + '.' + constraint.COLUMN_NAME} = ${constraint.REFERENCED_TABLE_NAME +'.'+constraint.REFERENCED_COLUMN_NAME}`
        });
      }

        // retrieve list of dependencies of each node
        if(nodeDependencies[constraint.TABLE_NAME] === undefined)
          nodeDependencies[constraint.TABLE_NAME] = [constraint.REFERENCED_TABLE_NAME];
        else if(!nodeDependencies[constraint.TABLE_NAME].includes(constraint.REFERENCED_TABLE_NAME))
          nodeDependencies[constraint.TABLE_NAME].push(constraint.REFERENCED_TABLE_NAME);

    }

     // retrieve references count
     const [referencesRes] = await conn.query(`SELECT k.REFERENCED_TABLE_NAME,  count(*) as ref_count 
                    FROM information_schema.TABLE_CONSTRAINTS i 
                    LEFT JOIN information_schema.KEY_COLUMN_USAGE k ON i.CONSTRAINT_NAME = k.CONSTRAINT_NAME 
                    WHERE i.CONSTRAINT_TYPE = 'FOREIGN KEY' GROUP BY k.REFERENCED_TABLE_NAME
                    ORDER BY ref_count DESC;`);
    const references = JSON.parse(JSON.stringify(referencesRes))
    for (const reference of references){

      const objIndex = nodes.findIndex(obj => obj.id === reference.REFERENCED_TABLE_NAME);
      if(objIndex>=0){
        nodes[objIndex].referenceCount = reference.ref_count
      }
    }

    // sort nodes by referenceCount desc
    uniqueNodes.sort((a,b) => b.referenceCount - a.referenceCount );

    this.log(JSON.stringify({
      "dependencies": nodeDependencies,
      links,
      "nodes": uniqueNodes
    }, null, 4));


   await conn.destroy();
  }
}

import {Args, Command} from '@oclif/core'
import * as fs from 'node:fs';
import http from 'node:http';

export default class Serve extends Command {
  static args = {
    graph: Args.string({description: 'Path to a JSON file that constains the graph data', required: true}),
    port: Args.string({description: 'which port to serve the http server', required: true})
  }

  static description = 'Render Graph data to a simple HTTP Server.'

  static examples = [
    `$ graphmysql serve ./graph.json 8086`,
  ]

  static flags = {
  }

  async run(): Promise<void> {

    const {args} = await this.parse(Serve)
    let filename = '';
    const appRoot = __filename.replace('dist/commands/serve/index.js' , '');

    console.log(appRoot);


        filename =  appRoot+ 'template.html';


    const data = fs.readFileSync(args.graph,'utf8');
    let template = fs.readFileSync(filename,'utf8');

    template = template.replaceAll('DATA', data);

    const contents = template;

    const {port} = args;
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(contents);
    });
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });

  }
}

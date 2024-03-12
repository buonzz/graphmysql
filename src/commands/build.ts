import {Args, Command} from '@oclif/core'
import * as fs from 'node:fs';

export default class Build extends Command {

  static args = {
    graph: Args.string({description: 'Path to a JSON file that constains the graph data', required: true})
  }

  static description = 'generate a static html file that allows you to browse graph data'

  static examples = [
    `$ graphmysql build ./graph.json 8086`,
  ]

  static flags = {
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Build)

    let filename = '';
    const appRoot = __filename.replace('dist/commands/build.js' , '');

    filename =  appRoot+ 'template.html';

    const data = fs.readFileSync(args.graph,'utf8');
    let template = fs.readFileSync(filename,'utf8');

    template = template.replaceAll('DATA', data);

    this.log(template);

  }
}

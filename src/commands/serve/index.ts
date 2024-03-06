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

    const data = fs.readFileSync(args.graph,'utf8');

    const contents = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <style type="text/css">
            .main-wrapper {
                height: 100%;  
                height: 100%;  
            }
            .node { font-family: var(--bs-font-sans-serif);}
            .link { stroke: #999; stroke-opacity: .6; stroke-width: 1px; font-family: var(--bs-font-sans-serif); }
        </style>
    </head>
    <body>      
          <main class="container-fluid">
            <div class="main-wrapper">
                <svg width="2560" height="1440"></svg>
              </div>
          </main>
    
    <script src="http://d3js.org/d3.v4.min.js" type="text/javascript"></script>
    <script src="http://d3js.org/d3-selection-multi.v1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <script type="text/javascript">
        var data  = ${data};

        var links = data.links;
        var nodes = data.nodes;

        var selected_nodes = nodes.slice(0, 10);

        // remove link.source and link.target that is not present in selected nodes
        var selected_links = links.filter(link => selected_nodes.some(node => link.source == node.id));
            selected_links = selected_links.filter(link => selected_nodes.some(node => link.target == node.id));
    
        var colors = d3.scaleOrdinal(d3.schemeCategory10);
    
        var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            node,
            link;
    
        svg.append('defs').append('marker')
            .attrs({'id':'arrowhead',
                'viewBox':'-0 -5 10 10',
                'refX':13,
                'refY':0,
                'orient':'auto',
                'markerWidth':13,
                'markerHeight':13,
                'xoverflow':'visible'})
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#999')
            .style('stroke','none');
    
        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(500).strength(1))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));
    
    
        update(selected_links, selected_nodes);
    
        function update(links, nodes) {
            link = svg.selectAll(".link")
                .data(links)
                .enter()
                .append("line")
                .attr("class", "link")
                .attr('marker-end','url(#arrowhead)')
    
            link.append("title")
                .text(function (d) {return d.type;});
    
            edgepaths = svg.selectAll(".edgepath")
                .data(links)
                .enter()
                .append('path')
                .attrs({
                    'class': 'edgepath',
                    'fill-opacity': 0,
                    'stroke-opacity': 0,
                    'id': function (d, i) {return 'edgepath' + i}
                })
                .style("pointer-events", "none");
    
            edgelabels = svg.selectAll(".edgelabel")
                .data(links)
                .enter()
                .append('text')
                .style("pointer-events", "none")
                .attrs({
                    'class': 'edgelabel',
                    'id': function (d, i) {return 'edgelabel' + i},
                    'font-size': 10,
                    'fill': '#aaa'
                });
    
            edgelabels.append('textPath')
                .attr('xlink:href', function (d, i) {return '#edgepath' + i})
                .style("text-anchor", "middle")
                .style("pointer-events", "none")
                .attr("startOffset", "50%")
                .text(function (d) {return d.type});
    
            node = svg.selectAll(".node")
                .data(nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .call(d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        //.on("end", dragended)
                );
    
            node.append("circle")
                .attr("r", 5)
                .style("fill", function (d, i) {return colors(i);})
    
            node.append("title")
                .text(function (d) {return d.id;});
    
            node.append("text")
                .attr("dy", -3)
                .text(function (d) {return d.name;});
    
            simulation
                .nodes(nodes)
                .on("tick", ticked);
    
            simulation.force("link")
                .links(links);
        }
    
        function ticked() {
            link
                .attr("x1", function (d) {return d.source.x;})
                .attr("y1", function (d) {return d.source.y;})
                .attr("x2", function (d) {return d.target.x;})
                .attr("y2", function (d) {return d.target.y;});
    
            node
                .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});
    
            edgepaths.attr('d', function (d) {
                return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
            });
    
            edgelabels.attr('transform', function (d) {
                if (d.target.x < d.source.x) {
                    var bbox = this.getBBox();
    
                    rx = bbox.x + bbox.width / 2;
                    ry = bbox.y + bbox.height / 2;
                    return 'rotate(180 ' + rx + ' ' + ry + ')';
                }
                else {
                    return 'rotate(0)';
                }
            });
        }
    
        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x;
            d.fy = d.y;
        }
    
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
    
    </script>
    
    </body>
    </html>`;

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

graphmysql
=================

Display MySQL objects and their relationship in a graph.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g graphmysql
$ graphmysql COMMAND
running command...
$ graphmysql (--version)
graphmysql/1.0.0 darwin-x64 node-v20.11.0
$ graphmysql --help [COMMAND]
USAGE
  $ graphmysql COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`graphmysql explore DATABASE HOST PASSWORD USERNAME`](#graphmysql-explore-database-host-password-username)
* [`graphmysql help [COMMANDS]`](#graphmysql-help-commands)
* [`graphmysql serve GRAPH PORT`](#graphmysql-serve-graph-port)

## `graphmysql explore DATABASE HOST PASSWORD USERNAME`

Connect to MySQL database and generate a json graph data.

```
USAGE
  $ graphmysql explore DATABASE HOST PASSWORD USERNAME

ARGUMENTS
  DATABASE  MySQL database
  HOST      MySQL Host
  PASSWORD  MySQL password
  USERNAME  MySQL username

DESCRIPTION
  Connect to MySQL database and generate a json graph data.

EXAMPLES
  $ graphmysql explore your_db 127.0.0.1 yourpassword youruser > graph.json
```

_See code: [src/commands/explore/index.ts](https://github.com/buonzz/graphmysql/blob/v1.0.0/src/commands/explore/index.ts)_

## `graphmysql help [COMMANDS]`

Display help for graphmysql.

```
USAGE
  $ graphmysql help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for graphmysql.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.14/src/commands/help.ts)_


## `graphmysql serve GRAPH PORT`

Render Graph data to a simple HTTP Server.

```
USAGE
  $ graphmysql serve GRAPH PORT

ARGUMENTS
  GRAPH  Path to a JSON file that constains the graph data
  PORT   which port to serve the http server

DESCRIPTION
  Render Graph data to a simple HTTP Server.

EXAMPLES
  $ graphmysql serve ./graph.json 8086
```

_See code: [src/commands/serve/index.ts](https://github.com/buonzz/graphmysql/blob/v1.0.0/src/commands/serve/index.ts)_
<!-- commandsstop -->

### Sample database

We use https://github.com/sakiladb/mysql for testing purposes.

```
docker run -d -p 3306:3306 --name mysql-sakila sakiladb/mysql:5.7
```

### dev

```
npm run build
./bin/run.js explore sakila 127.0.0.1 'p_ssW0rd' sakila > graph.json
./bin/run.js serve ./graph.json 8086
```

### deploy

```
npx oclif pack tarballs
```

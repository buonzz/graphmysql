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
graphmysql/1.0.2 darwin-x64 node-v20.11.0
$ graphmysql --help [COMMAND]
USAGE
  $ graphmysql COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`graphmysql build GRAPH`](#graphmysql-build-graph)
* [`graphmysql explore DATABASE HOST PASSWORD USERNAME`](#graphmysql-explore-database-host-password-username)
* [`graphmysql help [COMMANDS]`](#graphmysql-help-commands)
* [`graphmysql plugins`](#graphmysql-plugins)
* [`graphmysql plugins:install PLUGIN...`](#graphmysql-pluginsinstall-plugin)
* [`graphmysql plugins:inspect PLUGIN...`](#graphmysql-pluginsinspect-plugin)
* [`graphmysql plugins:install PLUGIN...`](#graphmysql-pluginsinstall-plugin-1)
* [`graphmysql plugins:link PLUGIN`](#graphmysql-pluginslink-plugin)
* [`graphmysql plugins:uninstall PLUGIN...`](#graphmysql-pluginsuninstall-plugin)
* [`graphmysql plugins reset`](#graphmysql-plugins-reset)
* [`graphmysql plugins:uninstall PLUGIN...`](#graphmysql-pluginsuninstall-plugin-1)
* [`graphmysql plugins:uninstall PLUGIN...`](#graphmysql-pluginsuninstall-plugin-2)
* [`graphmysql plugins update`](#graphmysql-plugins-update)
* [`graphmysql serve GRAPH PORT`](#graphmysql-serve-graph-port)

## `graphmysql build GRAPH`

generate a static html file that allows you to browse graph data

```
USAGE
  $ graphmysql build GRAPH

ARGUMENTS
  GRAPH  Path to a JSON file that constains the graph data

DESCRIPTION
  generate a static html file that allows you to browse graph data

EXAMPLES
  $ graphmysql build ./graph.json 8086
```

_See code: [src/commands/build.ts](https://github.com/buonzz/graphmysql/blob/v1.0.2/src/commands/build.ts)_

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

_See code: [src/commands/explore/index.ts](https://github.com/buonzz/graphmysql/blob/v1.0.2/src/commands/explore/index.ts)_

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

## `graphmysql plugins`

List installed plugins.

```
USAGE
  $ graphmysql plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ graphmysql plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/index.ts)_

## `graphmysql plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ graphmysql plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ graphmysql plugins add

EXAMPLES
  $ graphmysql plugins add myplugin 

  $ graphmysql plugins add https://github.com/someuser/someplugin

  $ graphmysql plugins add someuser/someplugin
```

## `graphmysql plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ graphmysql plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ graphmysql plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/inspect.ts)_

## `graphmysql plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ graphmysql plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ graphmysql plugins add

EXAMPLES
  $ graphmysql plugins install myplugin 

  $ graphmysql plugins install https://github.com/someuser/someplugin

  $ graphmysql plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/install.ts)_

## `graphmysql plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ graphmysql plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ graphmysql plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/link.ts)_

## `graphmysql plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphmysql plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphmysql plugins unlink
  $ graphmysql plugins remove

EXAMPLES
  $ graphmysql plugins remove myplugin
```

## `graphmysql plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ graphmysql plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/reset.ts)_

## `graphmysql plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphmysql plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphmysql plugins unlink
  $ graphmysql plugins remove

EXAMPLES
  $ graphmysql plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/uninstall.ts)_

## `graphmysql plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphmysql plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphmysql plugins unlink
  $ graphmysql plugins remove

EXAMPLES
  $ graphmysql plugins unlink myplugin
```

## `graphmysql plugins update`

Update installed plugins.

```
USAGE
  $ graphmysql plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/update.ts)_

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

_See code: [src/commands/serve/index.ts](https://github.com/buonzz/graphmysql/blob/v1.0.2/src/commands/serve/index.ts)_
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
./bin/run.js build ./graph.json > graph.html
```

### deploy

if non-npm
```
npx oclif pack tarballs
```

via npm
```
npm version (major|minor|patch) # bumps version, updates README, adds git tag
npm publish
```

graphmysql
=================

Display MySQL objects in a graph

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)


### dev

```
npm run build
./bin/run.js explore db 127.0.0.1 'pass' root > graph.json
./bin/run.js serve ./graph.json 8086
```

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
graphmysql/0.0.0 darwin-x64 node-v20.11.0
$ graphmysql --help [COMMAND]
USAGE
  $ graphmysql COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`graphmysql hello PERSON`](#graphmysql-hello-person)
* [`graphmysql hello world`](#graphmysql-hello-world)
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

## `graphmysql hello PERSON`

Say hello

```
USAGE
  $ graphmysql hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/buonzz/graphmysql/blob/v0.0.0/src/commands/hello/index.ts)_

## `graphmysql hello world`

Say hello world

```
USAGE
  $ graphmysql hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ graphmysql hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/buonzz/graphmysql/blob/v0.0.0/src/commands/hello/world.ts)_

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
<!-- commandsstop -->

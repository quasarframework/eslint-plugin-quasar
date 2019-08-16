# eslint-plugin-quasar [WIP]

Currently in development...

When this plugin is ready, it will be moved to the `quasarframework` repository.

## Install

Prerequisites: Node.js (>=8.10), npm (>=5.6.0), yarn (>=1.6.0)

```bash
$ yarn add --dev eslint-plugin-quasar
# or
$ npm install --dev eslint-plugin-quasar
```

## Usage

> Currently, in this phase of development, **eslint-plugin-quasar** is concentrating on helping to convert legacy Quasar v0.17+ to v1 Quasar.

The following changes need to be made to your `.eslintrc.js` configuration file.

Modification to the `plugins` section:
```js
{
  "plugins": [
    "quasar"
  ]
}
```

Modification to  the `extends` section:
```js
{
  "extends": [
    "plugin:quasar/legacy"
  ]
}
```

Modification to  the `rules` section:
```js
{
  "rules": [
    'quasar/no-legacy-components': 0,
    'quasar/no-legacy-css': 0,
    'quasar/no-legacy-directives': 0,
    'quasar/no-legacy-properties': 0
  ]
}
```

The number zero (0) above tells eslint to turn off the rule. To turn it on use the following numbers:
1. 1 - display output as a warning
2. 2 - display output as an error

Make sure you save the configuration file.

## A Note About ESLint
If you have `eslint` installed globally, then your eslint plugins **must** also be installed globally. For better control, it is best to install `eslint` locally and your plugins locally with it.

## Testing
To test your `eslint` configuration against your legacy Quasar project, run this from the command-line:
```bash
./node_modules/eslint/bin/eslint.js src/**
```

### Results
You may see results that look like this:

```bash
/home/me/my-project/src/pages/About.vue
   5:9  error  'q-card-title' has been replaced with 'q-card-section'
quasar/no-legacy-components
   8:9  error  'q-card-separator' has been replaced with 'q-separator'
quasar/no-legacy-components
   9:9  error  'q-card-main' has been replaced with 'q-card-section'
quasar/no-legacy-components

/home/me/my-project/src/pages/Archive.vue
     3:5   error  'q-window-resize-observable' has been
removed                     quasar/no-legacy-components
    12:17  error  'q-resize-observable' has been replaced with
'q-resize-observer'  quasar/no-legacy-components
    32:17  error  'q-progress' has been replaced with
'q-linear-progress'           quasar/no-legacy-components
    67:17  error  'q-progress' has been replaced with
'q-linear-progress'           quasar/no-legacy-components
    82:11  error  'q-progress' has been replaced with
'q-linear-progress'           quasar/no-legacy-components
   145:9   error  'q-resize-observable' has been replaced with
'q-resize-observer'  quasar/no-legacy-components
   261:19  error  'q-popover' has been replaced with
'q-menu'                       quasar/no-legacy-components
   265:23  error  'q-list-header' has been replaced with
'q-item-label'             quasar/no-legacy-components
   266:23  error  'q-item-separator' has been replaced with
'q-separator'           quasar/no-legacy-components
   330:19  error  'q-datetime' has been replaced with 'q-date,
q-time'              quasar/no-legacy-components

/home/me/my-project/src/pages/Console.vue
    5:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    7:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
    9:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   24:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components

/home/me/my-project/src/pages/LiveView.vue
    3:5  error  'q-window-resize-observable' has been
removed                     quasar/no-legacy-components
   20:7  error  'q-resize-observable' has been replaced with
'q-resize-observer'  quasar/no-legacy-components

/home/me/my-project/src/pages/RemoteAccessHvr.vue
    5:7   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    9:7   error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
   10:7   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   28:17  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components
   36:17  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components

/home/me/my-project/src/pages/RemoteAccessSam.vue
    4:7   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    8:7   error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
    9:7   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   26:17  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components
   34:17  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsAccessories.vue
    7:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   11:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   63:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsAnalyticControl.vue
    6:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   10:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   14:13  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
   35:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsHvrs.vue
     7:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    10:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   119:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsPtzs.vue
     7:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    10:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   122:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsSams.vue
    8:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   11:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   69:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsSites.vue
    7:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   10:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   22:11  error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsSystem.vue
     8:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    11:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
    38:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    41:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
    60:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    63:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
    92:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
    95:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   147:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   150:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   169:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   172:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   184:9   error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
   192:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   195:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   248:9   error  'q-card-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
   253:9   error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   256:9   error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   280:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   283:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components

/home/me/my-project/src/pages/SettingsUsers.vue
    7:11  error  'q-card-title' has been replaced with
'q-card-section'     quasar/no-legacy-components
   10:11  error  'q-card-main' has been replaced with
'q-card-section'      quasar/no-legacy-components
   13:13  error  'q-collapsible' has been replaced with
'q-expansion-item'  quasar/no-legacy-components
   88:11  error  'q-card-separator' has been replaced with
'q-separator'    quasar/no-legacy-components

/home/me/my-project/src/pages/SignIn.vue
   5:9  error  'q-card-main' has been replaced with 'q-card-section'
quasar/no-legacy-components

/home/me/my-project/src/pages/Themes.vue
    7:11  error  'q-card-title' has been replaced with
'q-card-section'   quasar/no-legacy-components
   10:11  error  'q-card-main' has been replaced with
'q-card-section'    quasar/no-legacy-components
   24:19  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components
   28:19  error  'q-item-main' has been replaced with
'q-item-label'      quasar/no-legacy-components
   31:19  error  'q-item-separator' has been replaced with
'q-separator'  quasar/no-legacy-components
   41:19  error  'q-item-side' has been replaced with
'q-item-section'    quasar/no-legacy-components
   44:19  error  'q-item-main' has been replaced with
'q-item-label'      quasar/no-legacy-components
   46:19  error  'q-item-separator' has been replaced with
'q-separator'  quasar/no-legacy-components

/home/me/my-project/src/pages/Weather.vue
   13:9  error  'q-card-title' has been replaced with 'q-card-section'
quasar/no-legacy-components
   16:9  error  'q-card-main' has been replaced with 'q-card-section'
quasar/no-legacy-components
   24:9  error  'q-card-title' has been replaced with 'q-card-section'
quasar/no-legacy-components
   27:9  error  'q-card-separator' has been replaced with 'q-separator'
quasar/no-legacy-components
   28:9  error  'q-card-main' has been replaced with 'q-card-section'
quasar/no-legacy-components
   36:9  error  'q-card-title' has been replaced with 'q-card-section'
quasar/no-legacy-components
   39:9  error  'q-card-separator' has been replaced with 'q-separator'
quasar/no-legacy-components
   40:9  error  'q-card-main' has been replaced with 'q-card-section'
quasar/no-legacy-components

✖ 89 problems (89 errors, 0 warnings)
```

## Fixing Issues
Currently, **eslint-plugin-quasar** can fix some issues for you, but not all. To do this, you have to use the `--fix` command-line option with `eslint`.

What will be fixed are any legacy css class usage to be converted to the new name as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#CSS). As well, it can also fix any legacy directive name changes as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#Directives).
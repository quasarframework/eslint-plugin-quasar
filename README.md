# eslint-plugin-quasar [WIP]

> **Currently, in this phase of development, eslint-plugin-quasar is concentrating on helping to convert legacy Quasar v0.17+ to v1 Quasar ONLY.**

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
...
✖ 89 problems (89 errors, 0 warnings)
```

## Fixing Issues
Currently, **eslint-plugin-quasar** can fix some issues for you, but not all. To do this, you have to use the `--fix` command-line option with `eslint`.

What will be fixed are any legacy css class usage to be converted to the new name as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#CSS). As well, it can also fix any legacy directive name changes as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#Directives).

Also, it should be noted that **eslint-plugin-quasar** currently has no support for legacy `QField` and as such, this hsould be a manual process.

# Tests
If you are interested in the output of the testing, you can view the results below:

```
$ mocha tests --recursive


  no-legacy-components
    valid
      ✓ <template><q-banner></q-banner></template> (278ms)
      ✓ <template><q-breadcrumbs></q-breadcrumbs></template>
      ✓ <template><q-breadcrumbs-el></q-breadcrumbs-el></template>
      ✓ <template><q-btn></q-btn></template>
      ✓ <template><q-btn-dropdown></q-btn-dropdown></template>
      ✓ <template><q-btn-toggle></q-btn-toggle></template>
      ✓ <template><q-card></q-card></template>
      ✓ <template><q-carousel></q-carousel></template>
      ✓ <template><q-checkbox></q-checkbox></template>
      ✓ <template><q-chip></q-chip></template>
      ✓ <template><q-dialog></q-dialog></template>
      ✓ <template><q-drawer></q-drawer></template>
      ✓ <template><q-fab></q-fab></template>
      ✓ <template><q-field></q-field></template>
      ✓ <template><q-icon></q-icon></template>
      ✓ <template><q-infinit-scroll></q-infinit-scroll></template>
      ✓ <template><q-inner-loading></q-inner-loading></template>
      ✓ <template><q-input></q-input></template>
      ✓ <template><q-item></q-item></template>
      ✓ <template><q-knob></q-knob></template>
      ✓ <template><q-layout></q-layout></template>
      ✓ <template><q-linear-progress></q-linear-progress></template>
      ✓ <template><q-list></q-list></template>
      ✓ <template><q-menu></q-menu></template>
      ✓ <template><q-option-group></q-option-group></template>
      ✓ <template><q-pagination></q-pagination></template>
      ✓ <template><q-parallax></q-parallax></template>
      ✓ <template><q-popup-edit></q-popup-edit></template>
      ✓ <template><q-pull-to-refresh></q-pull-to-refresh></template>
      ✓ <template><q-radio></q-radio></template>
      ✓ <template><q-range></q-range></template>
      ✓ <template><q-route-tab></q-route-tab></template>
      ✓ <template><q-select></q-select></template>
      ✓ <template><q-slider></q-slider></template>
      ✓ <template><q-step></q-step></template>
      ✓ <template><q-stepper></q-stepper></template>
      ✓ <template><q-tab></q-tab></template>
      ✓ <template><q-table></q-table></template>
      ✓ <template><q-tabs></q-tabs></template>
      ✓ <template><q-timeline></q-timeline></template>
      ✓ <template><q-timeline-entry></q-timeline-entry></template>
      ✓ <template><q-toggle></q-toggle></template>
      ✓ <template><q-toolbar></q-toolbar></template>
      ✓ <template><q-tooltip></q-tooltip></template>
      ✓ <template><q-tree></q-tree></template>
      ✓ <template><q-uploader></q-uploader></template>
    invalid
      ✓ <template><q-action-sheet></q-action-sheet></template>
      ✓ <template><q-alert></q-alert></template>
      ✓ <template><q-autocomplete></q-autocomplete></template>
      ✓ <template><q-card-title></q-card-title></template>
      ✓ <template><q-card-main></q-card-main></template>
      ✓ <template><q-card-media></q-card-media></template>
      ✓ <template><q-card-separator></q-card-separator></template>
      ✓ <template><q-chips-input></q-chips-input></template>
      ✓ <template><q-collapsible></q-collapsible></template>
      ✓ <template><q-color></q-color></template>
      ✓ <template><q-context-menu></q-context-menu></template>
      ✓ <template><q-date-picker></q-date-picker></template>
      ✓ <template><q-datetime></q-datetime></template>
      ✓ <template><q-item-main></q-item-main></template>
      ✓ <template><q-item-separator></q-item-separator></template>
      ✓ <template><q-item-side></q-item-side></template>
      ✓ <template><q-jumbotron></q-jumbotron></template>
      ✓ <template><q-layout-drawer></q-layout-drawer></template>
      ✓ <template><q-layout-header></q-layout-header></template>
      ✓ <template><q-layout-footer></q-layout-footer></template>
      ✓ <template><q-list-header></q-list-header></template>
      ✓ <template><q-modal></q-modal></template>
      ✓ <template><q-modal-layout></q-modal-layout></template>
      ✓ <template><q-popover></q-popover></template>
      ✓ <template><q-progress></q-progress></template>
      ✓ <template><q-resize-observable></q-resize-observable></template>
      ✓ <template><q-scroll-observable></q-scroll-observable></template>
      ✓ <template><q-search></q-search></template>
      ✓ <template><q-spinner-mat></q-spinner-mat></template>
      ✓ <template><q-table-columns></q-table-columns></template>
      ✓ <template><q-tab-pane></q-tab-pane></template>
      ✓ <template><q-time-picker></q-time-picker></template>
      ✓ <template><q-window-resize-observable></q-window-resize-observable></template>

  no-legacy-css
    valid
      ✓ <template><div class="text-red-4"></div></template>
      ✓ <template><div class="rounded-borders"></div></template>
    invalid
      ✓ <template><div class="tertiary q-display-3 q-headline quote capitalize mat-only gutter-md"></div></template>
      ✓ <template><div class="tertiary"></div></template>
      ✓ <template><div class="bg-tertiary"></div></template>
      ✓ <template><div class="text-tertiary"></div></template>
      ✓ <template><div class="q-display-4"></div></template>
      ✓ <template><div class="q-display-3"></div></template>
      ✓ <template><div class="q-display-2"></div></template>
      ✓ <template><div class="q-display-1"></div></template>
      ✓ <template><div class="q-headline"></div></template>
      ✓ <template><div class="q-title"></div></template>
      ✓ <template><div class="q-subheading"></div></template>
      ✓ <template><div class="q-body-1"></div></template>
      ✓ <template><div class="q-body-2"></div></template>
      ✓ <template><div class="q-caption"></div></template>
      ✓ <template><div class="quote"></div></template>
      ✓ <template><div class="capitalize"></div></template>
      ✓ <template><div class="lowercase"></div></template>
      ✓ <template><div class="uppercase"></div></template>
      ✓ <template><div class="highlight-and-fade"></div></template>
      ✓ <template><div class="mat-only"></div></template>
      ✓ <template><div class="ios-only"></div></template>
      ✓ <template><div class="mat-hide"></div></template>
      ✓ <template><div class="ios-hide"></div></template>
      ✓ <template><div class="round-borders"></div></template>
      ✓ <template><div class="gutter-xs"></div></template>
      ✓ <template><div class="gutter-sm"></div></template>
      ✓ <template><div class="gutter-md"></div></template>
      ✓ <template><div class="gutter-lg"></div></template>
      ✓ <template><div class="gutter-xl"></div></template>

  no-legacy-directives
    valid
      ✓ <template><div v-close-popup></div></template>
      ✓ <template><div v-go-back></div></template>
      ✓ <template><div v-ripple></div></template>
      ✓ <template><div v-scroll></div></template>
      ✓ <template><div v-scroll-fire></div></template>
      ✓ <template><div v-touch-hold></div></template>
      ✓ <template><div v-touch-pan></div></template>
      ✓ <template><div v-touch-repeat></div></template>
      ✓ <template><div v-touch-swipe></div></template>
    invalid
      ✓ <template><div v-back-to-top></div></template>
      ✓ <template><div v-close-overlay></div></template>

  no-legacy-properties
    valid
      ✓ <template><q-avatar color="red" text-color="white" icon="directions" /></template>
    invalid
      ✓ <template><q-banner actions avatar color detail icon message text-color type></q-banner></template>
      ✓ <template><q-breadcrumbs color></q-breadcrumbs></template>
      ✓ <template><q-breadcrumbs-el color event></q-breadcrumbs-el></template>
      ✓ <template><q-btn no-ripple repeat-timeout wait-for-ripple></q-btn></template>
      ✓ <template><q-btn-dropdown dark-percentage no-ripple percentage popover-anchor popover-self repeat-timeout wait-for-ripple></q-btn-dropdown></template>
      ✓ <template><q-btn-toggle no-ripple wait-for-ripple></q-btn-toggle></template>
      ✓ <template><q-card color inline text-color></q-card></template>
      ✓ <template><q-carousel animation color easing handle-arrow-keys no-swipe quick-nav quick-nav-icon quick-nav-position swipe-easing thumbnails-horizontal thumbnails-icon></q-carousel></template>
      ✓ <template><q-checkbox checked-icon indeterminate-icon no-focus readonly unchecked-icon></q-checkbox></template>
      ✓ <template><q-chip avatar closable detail floating pointing small tag></q-chip></template>
      ✓ <template><q-dialog cancel color ok message options prevent-close prompt stack-buttons title></q-dialog></template>
      ✓ <template><q-drawer no-hide-on-route-change></q-drawer></template>
      ✓ <template><q-infinit-scroll handler inline></q-infinit-scroll></template>
      ✓ <template><q-inner-loading visible></q-inner-loading></template>
      ✓ <template><q-input after align before clear-value decimals float-label hide-underline initial-show-password inverted inverted-light lower-case max-height no-parent-field no-pass-toggle numeric-keyboard-toggle step upper-case warning></q-input></template>
      ✓ <template><q-item event highlight inset-separator link multiline separator sparse></q-item></template>
      ✓ <template><q-knob decimals line-width></q-knob></template>
      ✓ <template><q-linear-progress animate height keep-on-percentage></q-linear-progress></template>
      ✓ <template><q-list highlight inset-separator link no-border sparse striped striped-odd></q-list></template>
      ✓ <template><q-menu anchor-click disabled keep-on-screen></q-menu></template>
      ✓ <template><q-option-group no-parent-group readonly></q-option-group></template>
      ✓ <template><q-popup-edit keep-on-screen validate></q-popup-edit></template>
      ✓ <template><q-pull-to-refresh handler distance inline pull-message release-message refresh-icon refresh-message></q-pull-to-refresh></template>
      ✓ <template><q-radio checked-icon no-focus readonly unchecked-icon></q-radio></template>
      ✓ <template><q-range decimals error fill-handle-always square warning></q-range></template>
      ✓ <template><q-route-tab color count hidden hide></q-route-tab></template>
      ✓ <template><q-select after before chips chip-bg-color chips-color clear-value filter filter-placeholder float-label hide-underline inverted inverted-light no-parent-field popup-cover popup-max-height radio separator toggle warning></q-select></template>
      ✓ <template><q-slider decimals error fill-handle-always square warning></q-slider></template>
      ✓ <template><q-step default order subtitle></q-step></template>
      ✓ <template><q-stepper color contractable no-header-navigation></q-stepper></template>
      ✓ <template><q-tab color count default hidden hide></q-tab></template>
      ✓ <template><q-table selected-rows-label pagination-label></q-table></template>
      ✓ <template><q-tabs animated color glossy inverted panes-container-class position swipeable text-color two-line underline-color no-pane-border></q-tabs></template>
      ✓ <template><q-timeline no-hover responsive></q-timeline></template>
      ✓ <template><q-timeline-entry subtitle title></q-timeline-entry></template>
      ✓ <template><q-toggle no-focus readonly></q-toggle></template>
      ✓ <template><q-toolbar color glossy inverted shrink text-color></q-toolbar></template>
      ✓ <template><q-tooltip disabled></q-tooltip></template>
      ✓ <template><q-uploader additional-fields after align auto-expand before clear-value clearable error expand-style extensions float-label hide-underline hide-upload-button hide-upload-progress inverted inverted-light name no-content-type no-parent-field placeholder prefix stack-label suffix upload-factory url-factory warning></q-uploader></template>


  161 passing (661ms)

Done in 2.96s.
```
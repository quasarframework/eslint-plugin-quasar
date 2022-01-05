# eslint-plugin-quasar

> **~~Currently, in this phase of development, eslint-plugin-quasar is concentrating on helping to convert legacy Quasar v0.17+ to v1 Quasar ONLY.~~**

> **Starting with 1.0.0-alpha.10, eslint-plugin-quasar now supports v1+ with the `quasar/no-invalid-props` rule.** More information below...

> ** The rule `quasar/check-valid-props` has been deprecated. Use the rule `quasar/no-invalid-props` instead.

Help us test this plugin. If you see any issues, please file an [issue](https://github.com/quasarframework/eslint-plugin-quasar/issues).

Also, expect more to come. We have plans for even more Quasar support to help streamline your development efforts.

## Install

Prerequisites: Node.js (>=8.10), npm (>=5.6.0), yarn (>=1.6.0)

```bash
$ yarn add --dev eslint-plugin-quasar

# or

$ npm install --save-dev eslint-plugin-quasar
```

## Usage


The following changes need to be made to your `.eslintrc.js` configuration file.

Modification to the `plugins` section:
```js
{
  "plugins": [
    "quasar"
  ]
}
```

### v.17

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
    'quasar/no-legacy-components': "error",
    'quasar/no-legacy-css': "error",
    'quasar/no-legacy-directives': "error",
    'quasar/no-legacy-properties': "error",
    'quasar/no-legacy-plugins': "error"
  ]
}
```

### v1+

Modification to  the `extends` section (for v1+):
```js
{
  "extends": [
    "plugin:quasar/standard"
  ]
}
```

Modification to  the `rules` section:
```js
{
  "rules": [
    'quasar/no-invalid-props': "error",
    'quasar/no-invalid-qfield-usage': "error"
  ]
}
```

### Turning on the Rules

The number zero (0) above tells eslint to turn off the rule. To turn it on use the following numbers:
1. 1 - display output as a warning
2. 2 - display output as an error

Alternatively, you can use 'off', 'warn' or 'error' instead of the number values.

Make sure you save the configuration file.

## A Note About ESLint
If you have `eslint` installed globally, then your eslint plugins **must** also be installed globally. For better control, it is best to install `eslint` locally and your plugins locally with it.

## Testing
To test your `eslint` configuration against your legacy Quasar project, run this from the command-line:
```bash
./node_modules/eslint/bin/eslint.js src/**
```

### Results
You may see results that look like this (for v.17):

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
Currently, **eslint-plugin-quasar** can fix some issues for you (for v0.17), but not all. To do this, you have to use the `--fix` command-line option with `eslint`.

What will be fixed are any legacy css class usage to be converted to the new name as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#CSS). As well, it can also fix any legacy directive name changes as per the [Quasar Docs Upgrade Guide](https://quasar.dev/start/upgrade-guide#Directives).

Also, it should be noted that **eslint-plugin-quasar** currently has no support for legacy `QField` and as such, this should be a manual process.

# Tests
If you are interested in the output of the testing, you can view the results below (for v.17 and v1.+):

```
$ yarn mocha tests --recursive
yarn run v1.22.4
$ .../eslint-plugin-quasar/node_modules/.bin/mocha tests --recursive


  check-valid-props
    valid
      ✓ <template>
  <div class="q-pa-md q-gutter-md" style="font-size: 36px">
    <q-icon name="settings_remote" class="text-brown cursor-pointer">
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
        <q-banner class="bg-brown text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>

    <q-icon name="perm_data_setting" class="text-purple cursor-pointer">
      <q-popup-proxy :offset="[10, 10]">
        <q-banner class="bg-purple text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>
  </div>
</template>
 (107ms)
      ✓ <template>
  <div class="q-pa-md">
    <q-input filled v-model="input" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy :breakpoint="600">
            <q-date v-model="input" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

      ✓ <template>
  <div class="q-pa-md">
    <q-btn push color="purple" label="Handles right-click">
      <q-popup-proxy context-menu>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>


      ✓ <template><q-btn flat color="primary" :label="Flat" @click="onClick" /></template>
      ✓ <template><q-btn class="glossy" round color="deep-orange" icon="local_activity" /></template>
      ✓ <template><q-btn dense color="primary" :size="size" :label="`Size xl`" /></template>
      ✓ <template><q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>
      ✓ <template><q-popup-proxy transition-show="scale"></q-popup-proxy></template>
      ✓ <template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list ref="list">
      <q-expansion-item popup default-opened icon="mail" label="Inbox" caption="5 unread emails">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="send" label="Outbox" caption="Empty">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="drafts" label="Draft" caption="Draft a new email">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
      ✓ <template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card
      class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</template>

    invalid
      ✓ <template><q-btn flat color="primary" label="Flat" boo-boo /></template>
      ✓ <template><q-btn class="glossy" round color="deep-orange" icon="local_activity" bad-prop="nothing" /></template>
      ✓ <template><q-btn dense color="primary" :size="size" :label="`Size xl`" :invalid-prop="invalid" /></template>
      ✓ <template><q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal" :wrong="wrong"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>

  no-invalid-props
    valid
      ✓ <template>
  <div class="q-pa-md q-gutter-md" style="font-size: 36px">
    <q-icon name="settings_remote" class="text-brown cursor-pointer">
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
        <q-banner class="bg-brown text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>

    <q-icon name="perm_data_setting" class="text-purple cursor-pointer">
      <q-popup-proxy :offset="[10, 10]">
        <q-banner class="bg-purple text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-icon>
  </div>
</template>

      ✓ <template>
  <div class="q-pa-md">
    <q-input filled v-model="input" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy :breakpoint="600">
            <q-date v-model="input" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

      ✓ <template>
  <div class="q-pa-md">
    <q-btn push color="purple" label="Handles right-click">
      <q-popup-proxy context-menu>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>


      ✓ <template><q-btn flat color="primary" :label="Flat" @click="onClick" /></template>
      ✓ <template><q-btn class="glossy" round color="deep-orange" icon="local_activity" /></template>
      ✓ <template><q-btn dense color="primary" :size="size" :label="`Size xl`" /></template>
      ✓ <template><q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>
      ✓ <template><q-popup-proxy transition-show="scale"></q-popup-proxy></template>
      ✓ <template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list ref="list">
      <q-expansion-item popup default-opened icon="mail" label="Inbox" caption="5 unread emails">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="send" label="Outbox" caption="Empty">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item popup icon="drafts" label="Draft" caption="Draft a new email">
        <q-separator />
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
      ✓ <template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card
      class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</template>

    invalid
      ✓ <template><q-btn flat color="primary" label="Flat" boo-boo /></template>
      ✓ <template><q-btn class="glossy" round color="deep-orange" icon="local_activity" bad-prop="nothing" /></template>
      ✓ <template><q-btn dense color="primary" :size="size" :label="`Size xl`" :invalid-prop="invalid" /></template>
      ✓ <template><q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal" :wrong="wrong"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>

  no-invalid-qfield-usage
    valid
      ✓ <template><q-field label="Standard" stack-label><template v-slot:control><div class="self-center full-width no-outline" tabindex="0">Field content</div></template></q-field></template>
    invalid
      ✓ <template><q-field label="Standard" stack-label><q-select></q-select></q-field></template>
      ✓ <template><q-field label="Standard" stack-label><q-input></q-input></q-field></template>

  no-legacy-components
    valid
      ✓ <template><q-ajax-bar></q-ajax-bar></template>
      ✓ <template><q-avatar></q-avatar></template>
      ✓ <template><q-badge></q-badge></template>
      ✓ <template><q-banner></q-banner></template>
      ✓ <template><q-bar></q-bar></template>
      ✓ <template><q-breadcrumbs></q-breadcrumbs></template>
      ✓ <template><q-breadcrumbs-el></q-breadcrumbs-el></template>
      ✓ <template><q-btn></q-btn></template>
      ✓ <template><q-btn-dropdown></q-btn-dropdown></template>
      ✓ <template><q-btn-group></q-btn-group></template>
      ✓ <template><q-btn-toggle></q-btn-toggle></template>
      ✓ <template><q-card></q-card></template>
      ✓ <template><q-card-actions></q-card-actions></template>
      ✓ <template><q-card-section></q-card-section></template>
      ✓ <template><q-carousel></q-carousel></template>
      ✓ <template><q-carousel-constrol></q-carousel-constrol></template>
      ✓ <template><q-carousel-slide></q-carousel-slide></template>
      ✓ <template><q-chat-message></q-chat-message></template>
      ✓ <template><q-checkbox></q-checkbox></template>
      ✓ <template><q-chip></q-chip></template>
      ✓ <template><q-circular-progress></q-circular-progress></template>
      ✓ <template><q-color></q-color></template>
      ✓ <template><q-date></q-date></template>
      ✓ <template><q-dialog></q-dialog></template>
      ✓ <template><q-drawer></q-drawer></template>
      ✓ <template><q-editor></q-editor></template>
      ✓ <template><q-expansion-item></q-expansion-item></template>
      ✓ <template><q-fab></q-fab></template>
      ✓ <template><q-field></q-field></template>
      ✓ <template><q-file></q-file></template>
      ✓ <template><q-footer></q-footer></template>
      ✓ <template><q-form></q-form></template>
      ✓ <template><q-header></q-header></template>
      ✓ <template><q-icon></q-icon></template>
      ✓ <template><q-img></q-img></template>
      ✓ <template><q-infinite-scroll></q-infinite-scroll></template>
      ✓ <template><q-inner-loading></q-inner-loading></template>
      ✓ <template><q-input></q-input></template>
      ✓ <template><q-intersection></q-intersection></template>
      ✓ <template><q-item></q-item></template>
      ✓ <template><q-item-label></q-item-label></template>
      ✓ <template><q-item-section></q-item-section></template>
      ✓ <template><q-knob></q-knob></template>
      ✓ <template><q-layout></q-layout></template>
      ✓ <template><q-linear-progress></q-linear-progress></template>
      ✓ <template><q-list></q-list></template>
      ✓ <template><q-markup-table></q-markup-table></template>
      ✓ <template><q-menu></q-menu></template>
      ✓ <template><q-no-ssr></q-no-ssr></template>
      ✓ <template><q-option-group></q-option-group></template>
      ✓ <template><q-page></q-page></template>
      ✓ <template><q-page-container></q-page-container></template>
      ✓ <template><q-page-scroller></q-page-scroller></template>
      ✓ <template><q-page-sticky></q-page-sticky></template>
      ✓ <template><q-pagination></q-pagination></template>
      ✓ <template><q-parallax></q-parallax></template>
      ✓ <template><q-popup-edit></q-popup-edit></template>
      ✓ <template><q-popup-proxy></q-popup-proxy></template>
      ✓ <template><q-pull-to-refresh></q-pull-to-refresh></template>
      ✓ <template><q-radio></q-radio></template>
      ✓ <template><q-range></q-range></template>
      ✓ <template><q-rating></q-rating></template>
      ✓ <template><q-resize-observer></q-resize-observer></template>
      ✓ <template><q-responsive></q-responsive></template>
      ✓ <template><q-route-tab></q-route-tab></template>
      ✓ <template><q-scroll-area></q-scroll-area></template>
      ✓ <template><q-scroll-observer></q-scroll-observer></template>
      ✓ <template><q-select></q-select></template>
      ✓ <template><q-separator></q-separator></template>
      ✓ <template><q-skeleton></q-skeleton></template>
      ✓ <template><q-slide-item></q-slide-item></template>
      ✓ <template><q-slider></q-slider></template>
      ✓ <template><q-slide-transition></q-slide-transition></template>
      ✓ <template><q-space></q-space></template>
      ✓ <template><q-spinner></q-spinner></template>
      ✓ <template><q-spinner-audio></q-spinner-audio></template>
      ✓ <template><q-spinner-ball></q-spinner-ball></template>
      ✓ <template><q-spinner-bars></q-spinner-bars></template>
      ✓ <template><q-spinner-comment></q-spinner-comment></template>
      ✓ <template><q-spinner-cube></q-spinner-cube></template>
      ✓ <template><q-spinner-dots></q-spinner-dots></template>
      ✓ <template><q-spinner-facebook></q-spinner-facebook></template>
      ✓ <template><q-spinner-gears></q-spinner-gears></template>
      ✓ <template><q-spinner-grid></q-spinner-grid></template>
      ✓ <template><q-spinner-hearts></q-spinner-hearts></template>
      ✓ <template><q-spinner-hourglass></q-spinner-hourglass></template>
      ✓ <template><q-spinner-infinity></q-spinner-infinity></template>
      ✓ <template><q-spinner-ios></q-spinner-ios></template>
      ✓ <template><q-spinner-oval></q-spinner-oval></template>
      ✓ <template><q-spinner-pie></q-spinner-pie></template>
      ✓ <template><q-spinner-puff></q-spinner-puff></template>
      ✓ <template><q-spinner-radio></q-spinner-radio></template>
      ✓ <template><q-spinner-rings></q-spinner-rings></template>
      ✓ <template><q-spinner-tail></q-spinner-tail></template>
      ✓ <template><q-spitter></q-spitter></template>
      ✓ <template><q-step></q-step></template>
      ✓ <template><q-stepper></q-stepper></template>
      ✓ <template><q-stepper-navigation></q-stepper-navigation></template>
      ✓ <template><q-tab></q-tab></template>
      ✓ <template><q-table></q-table></template>
      ✓ <template><q-tab-panel></q-tab-panel></template>
      ✓ <template><q-tab-panels></q-tab-panels></template>
      ✓ <template><q-tabs></q-tabs></template>
      ✓ <template><q-tabs></q-tabs></template>
      ✓ <template><q-td></q-td></template>
      ✓ <template><q-th></q-th></template>
      ✓ <template><q-timeline></q-timeline></template>
      ✓ <template><q-timeline-entry></q-timeline-entry></template>
      ✓ <template><q-toggle></q-toggle></template>
      ✓ <template><q-toolbar></q-toolbar></template>
      ✓ <template><q-toolbar-title></q-toolbar-title></template>
      ✓ <template><q-tooltip></q-tooltip></template>
      ✓ <template><q-tr></q-tr></template>
      ✓ <template><q-tree></q-tree></template>
      ✓ <template><q-uploader></q-uploader></template>
      ✓ <template><q-uploader-add-trigger></q-uploader-add-trigger></template>
      ✓ <template><q-uploader-base></q-uploader-base></template>
      ✓ <template><q-video></q-video></template>
      ✓ <template><q-virtual-scroll></q-virtual-scroll></template>
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
      ✓ <template><q-color-picker></q-color-picker></template>
      ✓ <template><q-context-menu></q-context-menu></template>
      ✓ <template><q-date-picker></q-date-picker></template>
      ✓ <template><q-datetime></q-datetime></template>
      ✓ <template><q-item-main></q-item-main></template>
      ✓ <template><q-item-separator></q-item-separator></template>
      ✓ <template><q-item-side></q-item-side></template>
      ✓ <template><q-item-tile></q-item-tile></template>
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
      ✓ <template><div v-intersection></div></template>
      ✓ <template><div v-mutation></div></template>
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

  no-legacy-plugins
    valid
      ✓ <template>
  <q-list :dense="$q.screen.lt.md">
    <q-item>
      <q-item-section>John Doe</q-item-section>
    </q-item>

    <q-item>
      <q-item-section>Jane Doe</q-item-section>
    </q-item>
  </q-list>
</template>

export default {
  computed: {
    buttonColor () {
      return this.$q.screen.lt.md
        ? 'primary'
        : 'secondary'
    }
  }
}

    invalid
      ✓ <template>
  <q-list :dense="$q.actionSheet">
    <q-item>
      <q-item-section>John Doe</q-item-section>
    </q-item>

    <q-item>
      <q-item-section>Jane Doe</q-item-section>
    </q-item>
  </q-list>
</template>

export default {
  computed: {
    buttonColor () {
      return this.$q.actionSheet
        ? 'primary'
        : 'secondary'
    }
  }
}


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
      ✓ <template><q-infinite-scroll handler inline></q-infinite-scroll></template>
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


  270 passing (678ms)

Done in 1.07s.
```

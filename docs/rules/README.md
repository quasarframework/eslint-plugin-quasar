# Available rules

> :wrench: Indicates that the rule is fixable, and using `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the reported problems.

## Legacy Rules (Upgrading <= v0.17 to v1.x)

Enforce all the rules in this category with:

```json
{
  "extends": "plugin:quasar/legacy"
}
```

| Rule ID | Description |    |
|:--------|:------------|:---|
| no-legacy-components | disallow use of legacy components that have been removed from Quasar v1.x |  |
| no-legacy-css | disallow use of legacy css classes that have been removed from Quasar v1.x |  |
| no-legacy-plugins | disallow use of legacy plugins that have been removed from Quasar v1.x |  |
| no-legacy-directives | disallow use of legacy directives that have been removed from Quasar v1.x |  |
| no-legacy-properties | disallow use of legacy properties that have changed or been removed from Quasar v1.x |  |
| no-legacy-other | disallow use of legacy other that have been removed from Quasar v1.x |  |


## Essential (Error Prevention)

Enforce all the rules in this category with:

```json
{
  "extends": "plugin:quasar/essential"
}
```

| Rule ID | Description |    |
|:--------|:------------|:---|
| check-valid-props | Checks correct usage of component properties |  |
| no-invalid-qfield-usage | QField should not be used to wrap QInput or QSelect |  |

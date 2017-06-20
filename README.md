# stylelint-config-ovh

Official OVH rules for StyleLint.

:construction: **This configuration is under active discussions, so some of our projects  do not yet use this configuration**


## Getting Started

### Installation

Just install Stylelint with the OVH config:
    `npm install --save-dev stylelint stylelint-config-ovh`

### configuration

Creates an `.stylelintrc.js` in your project, and specify the config that you want to use:

```json
{
    "extends": "stylelint-config-ovh"
}
```


## Documentation

### Default configuration

* `stylelint-config-ovh`: shortcut for `stylelint-config-ovh/configs/css` (see below)

### SCSS (Sass) configuration

These configurations depends of [stylelint-scss](https://github.com/kristerkari/stylelint-scss).

* `stylelint-config-ovh/configs/scss`: SCSS rules

### CSS configuration

* `stylelint-config-ovh/configs/css`: CSS rules


## License

See `LICENSE` file.

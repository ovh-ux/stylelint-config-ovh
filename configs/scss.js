"use strict";

// Docs: http://stylelint.io
// Style lint rule detail: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md

module.exports = {
    plugins: [
        "stylelint-scss"
    ],
    rules: {
        "at-rule-no-vendor-prefix": true,
        "declaration-colon-space-after": "always",
        "declaration-no-important": true,
        indentation: 4,
        "max-nesting-depth": 5,
        "media-feature-name-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "scss/at-extend-no-missing-placeholder": true,
        "scss/selector-no-redundant-nesting-selector": true,
        "selector-max-specificity": "0,4,4",
        "selector-no-vendor-prefix": true,
        "value-no-vendor-prefix": true
    }
};

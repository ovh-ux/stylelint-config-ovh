"use strict";

// Docs: http://stylelint.io
// Style lint rule detail: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md

module.exports = {
    rules: {
        "declaration-colon-space-after": "always",
        "declaration-no-important": true,
        indentation: 4,
        "selector-max-specificity": "0,4,4"
    }
};

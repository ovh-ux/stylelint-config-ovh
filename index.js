"use strict";

module.exports = {
    "extends": [
        "./configs/css"   // CSS is the default config
    ].map(require.resolve)
};

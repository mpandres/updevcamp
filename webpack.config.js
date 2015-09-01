var wp = require('webpack');

module.exports = {
    entry: {
        main:     "./themes/src/scripts/main.js",
        store_auth:     "./themes/src/scripts/parse/store_auth.js"
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new wp.optimize.CommonsChunkPlugin("vendor.bundle.js")
    ],
};

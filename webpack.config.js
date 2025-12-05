const path = require('path');

module.exports = {
    mode: 'production',
    entry: './webapp/polyfill.js',
    output: {
        filename: 'polyfill-bundled.js',
        path: path.resolve(__dirname, 'build'),
    },
    // Optional: adjust module rules if you need Babel or other loaders
    module: {
        rules: [
        ],
    },
};

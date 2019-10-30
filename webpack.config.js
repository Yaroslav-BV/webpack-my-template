const path = require("path");

module.exports = { 
    entry: { // точка выхода
        app: './src/index.js'
    },
    output: { // точка выхода
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devServer: { // настройка dev-server
        overlay: true
    }
}
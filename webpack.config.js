const path = require("path");

module.exports = {
    // точка входа
    entry: {
        app: './src/index.js'
    },
    // точка выхода
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    // модули
    module: {
        // правила
        rules: [
            // для Babel 7
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },

    // настройка dev-server
    devServer: {
        overlay: true
    }
}
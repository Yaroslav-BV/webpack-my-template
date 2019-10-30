const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");


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
            },
            //для CSS
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    // настройка dev-server
    devServer: {
        overlay: true
    },

    // используемые плагины
    plugins: [
        new MiniCSSExtractPlugin ({
            filename: "[name].css"
        })
    ]
}
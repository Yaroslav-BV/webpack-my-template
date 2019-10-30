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
            //для SCSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {   // postcss-loader
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            //для CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {   // postcss-loader
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    }
                ]
            }
        ]
    },
    // используемые плагины
    plugins: [
        new MiniCSSExtractPlugin ({
            filename: "[name].css"
        })
    ]
}
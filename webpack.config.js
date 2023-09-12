const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    mode: "production",
    module: {
        rules: [
        {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
            }
        }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin()  
    ]
}
/*
 * @Author: Lyun
 * @Date: 2020-07-19 18:44:10
 * @LastEditTime: 2020-07-20 15:31:50
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\config\webpack.development.js
 * @Description: ...
 */
const { join } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    output: {
        path: join(__dirname, '../dist/assets'),
        filename: 'scripts/[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: join(__dirname, '../src/web/views/layouts/layout.html'),
                    to: join(__dirname, '../dist/views/layouts')
                },
                {
                    from: join(__dirname, '../src/web/components/**/*.html'),
                    to: join(__dirname, '../dist/components'),
                    transformPath(targetPath, absolutePath) {
                        return targetPath.replace('src/web/components/', '');
                      },
                },

            ],
        }),
    ]
}
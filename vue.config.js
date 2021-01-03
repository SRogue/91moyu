const path = require('path');//引入path模块
const Version = new Date().getTime();
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// function addStyleResource(rule) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [
//                 path.resolve(__dirname, './src/assets/less/base.less'),
//             ],
//         })
// }
const ENV = process.env.NODE_ENV;
module.exports = {
    publicPath: ENV === "development" ? "./" : "./",
    outputDir: "dist",//打包后的项目目录名称
    indexPath:"index.html"
    // chainWebpack: (config) => {
    //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
        // config.resolve.alias
        //     .set('@', resolve('./src'))
        //     .set('components', resolve('./src/components'))
        //     .set('utils', resolve('./src/utils'))
        //     .set('assets', resolve('./src/assets'))
        //     .set('http', resolve('./src/http'))
        //     .set('views', resolve('./src/views'))
        //
        // config.plugin('html').tap(args => {
        //     args[0].title = '时光拼图'
        //     return args
        // })

    // },
    // configureWebpack: (config) => {
    //     // 生产环境取消console打印
    //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    //     config.output.filename = `static/js/[name].${Version}.js`
    //     config.output.chunkFilename = `static/js/[name].${Version}.js`
    // },
    // pwa: {
    //     iconPaths: {
    //         favicon32: './favicon.png',
    //         favicon16: './favicon.png',
    //         appleTouchIcon: './favicon.png',
    //         maskIcon: './favicon.png',
    //         msTileImage: './favicon.png'
    //     }
    // }
}

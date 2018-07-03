const Router = require('koa-router')
const index = new Router();
const fs = require('fs')
// const config = require('./config')
// const other = require('./other')
// const utype = require('./utype')
// const ctype = require('./ctype')
// const ttype = require('./ttype')
// const bigData = require('./bigData')
//
// router.get('/', async (ctx, next) => {
//     ctx.body = "index"
// })
//
// router.use('/config', config.routes(), config.allowedMethods())
// router.use('/other', other.routes(), other.allowedMethods())
// router.use('/utype', utype.routes(), utype.allowedMethods())
// router.use('/ctype', ctype.routes(), ctype.allowedMethods())
// router.use('/ttype', ttype.routes(), ttype.allowedMethods())
// router.use('/bigData', bigData.routes(), bigData.allowedMethods())
const getFileName = (file) => {
    let pointPos = file.indexOf('.');
    return file.substr(0, pointPos);
}
const register = (app) => {
    let files = fs.readdirSync(__dirname);
    files.forEach((file) => {
        if (!file.toLowerCase().endsWith('index.js')) {
            let currentRoute = require('./' + file), currentRouteName = getFileName(file);
            app.use('/' + currentRouteName, currentRoute.routes(), currentRoute.allowedMethods())
        }
    });
};
register(index);
module.exports = index;





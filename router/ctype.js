const Router = require('koa-router')
const ctype = new Router();

ctype.get('/', async (ctx, next) => {
    ctx.body = "ctype index"
})
module.exports = ctype;
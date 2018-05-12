const Koa = require('koa')
const body = require('koa-body')
const app = new Koa();
const router = require('./router')



app.use(body())
app.use(router.routes(), router.allowedMethods())
app.use(async ctx => {
    ctx.status = 404
    ctx.body = "没有找到接口"
})

app.listen(3000)
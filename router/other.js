const Router = require('koa-router')
const other = new Router();

other.get('/', async (ctx, next) => {
    ctx.body = "other index"
})
other.get('/getUserInfo', async (ctx, next) => {
    let result = {
        schoolId: 5,
        loginName: 'macarole'
    }
    ctx.type = 'json'
    ctx.body = result;
})
other.get('/getSchoolPower', async (ctx, next) => {
    let result = [],
        count = 10;
    for (let i = 0; i < count; i++) {
        result.push({
            id: (i + 1),
            value: (i + 1),
            label: 'school' + (i + 1)
        })
    }
    ctx.type = 'json'
    ctx.body = result;
})
other.post('/transferInterface',async (ctx,next)=>{
    let url=ctx.request.body.url;
    url=url.replace(3000,8080)
    ctx.status=301
    ctx.redirect(url)
    console.log(ctx.request.body)
    ctx.body="我是 一个中专接口"
})

module.exports = other;
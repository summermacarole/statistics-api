const Router = require('koa-router')
const other = new Router();

other.get('/', async (ctx, next) => {
    ctx.body = "other index"
})
other.get('/getUserInfo', async (ctx, next) => {
    let result = {
        "userId": "26727",
        "logonName": "admin",
        "userName": "学海教育",
        "userType": "8",
        "schoolId": "3638",
        "isStaff": false,
        "depId": [],
        "depTag": [],
        "depName": [],
        "verifyPhone": true,
        "schoolName": "舟山市普陀第二中学"
    }
    ctx.type = 'application/json; charset=utf-8'
    // ctx.set('name','macarole')
    // ctx.set('Access-Control-Allow-Origin','*')
    ctx.body = result;
})
other.get('/getSchoolPower', async (ctx, next) => {
    let result = {},
        count = 10;
    for (let i = 0; i < count; i++) {
        result[(i + 1)] = 'school' + (i + 1)
    }
    ctx.type = 'json'
    ctx.body = result;
})
other.post('/transferInterface', async (ctx, next) => {
    let url = ctx.request.body.url;
    url = url.replace(3000, 8080)
    ctx.status = 301
    ctx.redirect(url)
    console.log(ctx.request.body)
    ctx.body = "我是 一个中专接口"
})

module.exports = other;
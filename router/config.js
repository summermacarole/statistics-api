const Router = require('koa-router')
const config = new Router();

config.get('/', async (ctx, next) => {
    ctx.body = "config index"
})
    .get('/getConfigByName/:type', async (ctx, next) => {
        let type = ctx.params.type;
        let result;
        console.log(type)
        switch (type) {
            case 'user':
                result = {
                    url: 'http://localhost:3000/utype'
                }
                break;
            case 'stats_CA103001-3':
                result = {
                    url: 'http://localhost:3000/ttype'
                }
                break;
            case 'schoolManage':
                result = {
                    url: 'http://localhost:3000/ctype'
                }
                break;
            case 'bigData':
                result = {
                    url: 'http://192.168.5.61:17086/'//杨毅地址
                }
                break;
            default:
                result = {
                    url: '类型错误'
                }
        }
        ctx.body = result;
    })

module.exports = config;
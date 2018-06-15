const Router = require('koa-router')
const router = new Router()
const config = require('./config')
const other = require('./other')
const utype = require('./utype')
const ctype = require('./ctype')
const ttype = require('./ttype')
const bigData = require('./bigData')

router.get('/', async (ctx, next) => {
    ctx.body = "index"
})

router.use('/config', config.routes(), config.allowedMethods())
router.use('/other', other.routes(), other.allowedMethods())
router.use('/utype', utype.routes(), utype.allowedMethods())
router.use('/ctype', ctype.routes(), ctype.allowedMethods())
router.use('/ttype', ttype.routes(), ttype.allowedMethods())
router.use('/bigData', bigData.routes(), bigData.allowedMethods())
module.exports = router;
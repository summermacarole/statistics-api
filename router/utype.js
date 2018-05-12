const Router = require('koa-router')
const utype = new Router();
// http: //localhost:3000/utype/api/v1/schools/5/teachers/
// http: //localhost:3000/utype/api/v1/schools/5/teachers/classes
utype.get('/', async (ctx, next) => {
    ctx.body = "utype index"
})
utype.get('/api/v1/schools/:schoolId/teachers/', async (ctx, next) => {
    console.log('获取老师')
    let schoolId = ctx.params.schoolId;
    let result = [],
        count = 10;
    for (let i = 0; i < count; i++) {
        let currentSchool = [];
        for (let j = 0; j < count; j++) {
            currentSchool.push({
                id: parseFloat(i + '' + j),
                name: '张三' + i + j
            })
        }
        result.push(currentSchool)
    }
    ctx.body = result[parseFloat(schoolId)]
})
utype.get('/api/v1/schools/:schoolId/teachers/classes', async (ctx, next) => {
    console.log('获取班级')
    let schoolId = ctx.params.schoolId;
    let result = [],
        count = 10;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            let teachings = []
            for (let a = 0; a < count; a++) {
                teachings.push({
                    clazzId: parseFloat('' + i + j + a),
                    clazzName: 'subject' + i + j + a
                })
            }
            result.push({
                teacherId: parseFloat('' + i + j),
                teaching: teachings
            })
        }
    }
    ctx.body = result
})
module.exports = utype;
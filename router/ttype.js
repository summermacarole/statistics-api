const Router = require('koa-router')
const ttype = new Router();

ttype.get('/', async (ctx, next) => {
    ctx.body = "ttype index"
})
ttype.get('/intranet/work/statistic/schools/:schoolId',async (ctx,next)=>{
    let schoolId=ctx.params.schoolId;
    let result={},temp=[]
    for(let i=0;i<10;i++){
        temp[i + 1] = {
            workCount: 10+i,
            handInRate: 0.12345,
            correctRate: 0.124,
            topicNumAvg: 0.24,
            groupWorkCount: 0.23,
            wrongWorkCount: 12,
            repeatCorrectNum: 11
        }
    }

    ctx.body=temp[schoolId]
})
//获取分析数据
ttype.get('/intranet/work/statistic/schools/:schoolId/teachers',async (ctx,next)=>{
    let schoolId = ctx.params.schoolId;
    let self=this,result=[];
    for(let i=0;i<10;i++){
        result.push({
            teacherName:schoolId+'张三'+i,
            workCount:Math.random()*100,
            handInRate:Math.random(),
            correctRate:Math.random(),
            topicNumAvg:Math.random()*100,
            groupWorkCount: Math.random() * 100,
            wrongWorkCount: Math.random() * 100,
            repeatCorrectNum: Math.random() * 100,
            lectureCount: Math.random() * 100,
        })
    }
    ctx.body=result;
})

//获取作业列表
ttype.get('/intranet/works/schools/:schoolId',async (ctx,next)=>{
    
})
module.exports = ttype;
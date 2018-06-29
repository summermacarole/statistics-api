const Router = require('koa-router')
const bigData = new Router();

bigData.get('/', async (ctx, next) => {
    ctx.body = "bigData index"
})
bigData.get('/api/v1/xueqing/getSchoolPeriod', async ctx => {
    let result = {
        "select": [
            {"id": "1", value: '小学'},
            {"id": "2", "value": "初中 "}
        ]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/getGrade', async ctx => {
    let result = {
        "select": [
            {"id": "11", value: '一年级'},
            {"id": "12", value: '二年级'},
            {"id": "13", value: '三年级'},
            {"id": "14", value: '四年级'},
            {"id": "15", value: '五年级'},
            {"id": "16", value: '六年级'},
        ]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/getClass', async ctx => {
    let result = {
        "select": [
            {"id": "2212", "value": "701"},
            {"id": "2214", "value": "703"},
            {"id": "2220", "value": "709"},
            {"id": "4854", "value": "804"},
            {"id": "4855", "value": "805"},
            {"id": "4856", "value": "806"}]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/getApp', async ctx => {
    let result = {
        select: [
            {id: '001', value: '刷题王1'},
            {id: '002', value: '刷题王2'},
            {id: '003', value: '刷题王3'},
        ]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/homework', async ctx => {
    let result = {
        "assginQstNum": 15433,
        "assignHomeworkCount": 1134,
        "correctHomeworkCount": 32476,
        "subjectAssginQstNum": {"1": 1763, "2": 3864, "3": 1952, "4": 3769, "5": 3607, "6": 478},
        "subjectAssignHomeworkCount": {"1": 227, "2": 284, "3": 164, "4": 212, "5": 217, "6": 30},
        "subjectCorrectHomeworkCount": {"1": 7245, "2": 9766, "3": 3932, "4": 5993, "5": 4592, "6": 948}
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/argScore', async ctx => {
    let result = {
        "thisWeekStart": "20180625",
        "thisWeekEnd": "20180629",
        "lastWeekStart": "20180618",
        "lastWeekEnd": "20180624",
        "thisWeekScore": {"1": 50, "3": 20},
        "lastWeekScore": {"1": 23, "2": 40},
        "teacherMicroCourseCount": {"1": 10, "2": 20, "3": 45, "4": 12, "5": 22, "6": 36},
        "zhitongketang": 0.0
    }
    ctx.body = result;
})

bigData.get('/api/v1/xueqing/learnSummary', async ctx => {
    let result = {
        "qstNum": 56,
        "selfWorkRate": 1.0,
        "handInQstNum": 56,
        "rightQstRate": 0.9642857142857143,
        "classQstNum": [{"className": "702", "qstNum": 14, "selfWorkNum": 14, "selfWorkRate": 1.0, "handInQstNum": 14, "rightQstNum": 12, "rightQstRate": 0.8571428571428571}, {
            "className": "703",
            "qstNum": 0,
            "selfWorkNum": 0,
            "selfWorkRate": 0.0,
            "handInQstNum": 0,
            "rightQstNum": 0,
            "rightQstRate": 0.0
        }, {"className": "704", "qstNum": 0, "selfWorkNum": 0, "selfWorkRate": 0.0, "handInQstNum": 0, "rightQstNum": 0, "rightQstRate": 0.0}, {
            "className": "707",
            "qstNum": 42,
            "selfWorkNum": 42,
            "selfWorkRate": 1.0,
            "handInQstNum": 42,
            "rightQstNum": 42,
            "rightQstRate": 1.0
        }]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/read', async ctx => {
    let result = [
        {artitleName: '华夏上下五千年', userNum: 150},
        {artitleName: '美国历史', userNum: 300},
        {artitleName: '致青春', userNum: 400},
        {artitleName: '二战风云录', userNum: 150},
        {artitleName: '十万个为什么', userNum: 200}
    ];
    ctx.body = result;
})

bigData.get('/api/v1/xueqing/activeDegree', async ctx => {
    let result = {
        "totolNum": 875,
        "teaNum": 75,
        "totalStuNum": 800,
        "dayNum": 353,
        "dayTeaNum": 53,
        "dayStuNum": 300,
        "rate": 0.6,
        "sevenRate": 335,
        "eightRate": 310,
        "nineRate": 234,
        "sevenNum": [120, 132, 101, 134, 90, 230, 210],
        "eightNum": [220, 182, 191, 234, 290, 330, 310],
        "nineNum": [150, 232, 201, 154, 190, 330, 410],
        "schoolTopFive": {
            className: ['701', '702', '703', '704', '705'],
            stuActiveRate: [12, 44, 34, 56, 23],
            teaActiveRate: [42, 75, 15, 35, 65]
        },
        "sevenGradeTopFive": [
            {
                "className": "705",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "710",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "701",
                "stuActiveRate": 98,
                "teaActiveRate": 0
            },
            {
                "className": "702",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            },
            {
                "className": "706",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            }
        ],
        "eightGradeTopFive": [
            {
                "className": "705",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "710",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "701",
                "stuActiveRate": 98,
                "teaActiveRate": 0
            },
            {
                "className": "702",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            },
            {
                "className": "706",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            }
        ],
        "nineGradeTopFive": [
            {
                "className": "705",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "710",
                "stuActiveRate": 100,
                "teaActiveRate": 0
            },
            {
                "className": "701",
                "stuActiveRate": 98,
                "teaActiveRate": 0
            },
            {
                "className": "702",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            },
            {
                "className": "706",
                "stuActiveRate": 95,
                "teaActiveRate": 0
            }
        ]
    }
    ctx.body = result;
})
bigData.get('/api/v1/xueqing/selectTree', async (ctx, next) => {
    let result = [
        {
            "id": 2,
            "value": "初中",
            "children": [{
                "id": 7,
                "value": "初中七年级",
                "children": [{"id": 2212, "value": "701"}, {"id": 2213, "value": "702"}, {
                    "id": 2214,
                    "value": "703"
                }, {"id": 2215, "value": "704"}, {"id": 2216, "value": "705"}, {
                    "id": 2217,
                    "value": "706"
                }, {"id": 2218, "value": "707"}, {"id": 2219, "value": "708"}, {
                    "id": 2220,
                    "value": "709"
                }, {"id": 2221, "value": "710"}, {"id": 2222, "value": "711"}, {
                    "id": 2223,
                    "value": "712"
                }, {"id": 5209, "value": "712A"}, {"id": 5210, "value": "712B"}, {
                    "id": 8216,
                    "value": "周紫优"
                }, {"id": 8366, "value": "科英班"}, {"id": 8367, "value": "数语班"}, {
                    "id": 8368,
                    "value": "数英班"
                }, {"id": 8369, "value": "数英班"}, {"id": 8370, "value": "数科班"}, {"id": 12830, "value": "洪海勇培优"}]
            }, {
                "id": 8,
                "value": "初中八年级",
                "children": [{"id": 4851, "value": "801"}, {"id": 4852, "value": "802"}, {
                    "id": 4853,
                    "value": "803"
                }, {"id": 4854, "value": "804"}, {"id": 4855, "value": "805"}, {
                    "id": 4856,
                    "value": "806"
                }, {"id": 4857, "value": "807"}, {"id": 4858, "value": "808"}, {
                    "id": 4859,
                    "value": "809A"
                }, {"id": 4860, "value": "810C"}, {"id": 4861, "value": "811A"}, {
                    "id": 4862,
                    "value": "812B"
                }, {"id": 5187, "value": "809BC"}, {"id": 5203, "value": "809"}, {
                    "id": 5204,
                    "value": "810"
                }, {"id": 5205, "value": "811"}, {"id": 5206, "value": "812"}, {
                    "id": 5643,
                    "value": "800科学"
                }, {"id": 8374, "value": "9-10B谭"}, {"id": 8375, "value": "11-12C谭"}, {
                    "id": 8376,
                    "value": "9-10C黄"
                }, {"id": 8377, "value": "9-10A刘"}, {"id": 8378, "value": "11-12A颜"}, {
                    "id": 8379,
                    "value": "11-12B朱"
                }, {"id": 8694, "value": "科学培优"}, {"id": 8695, "value": "数学培优"}]
            }, {
                "id": 9,
                "value": "初中九年级",
                "children": [{"id": 5243, "value": "907物理竞赛"}, {"id": 5244, "value": "908物理竞赛"}, {
                    "id": 7027,
                    "value": "901"
                }, {"id": 7028, "value": "909"}, {"id": 7029, "value": "910"}, {
                    "id": 7030,
                    "value": "905"
                }, {"id": 7558, "value": "寒假作业901"}, {"id": 7559, "value": "寒假作业902"}, {
                    "id": 7560,
                    "value": "寒假作业903"
                }, {"id": 7561, "value": "寒假作业904"}, {"id": 7562, "value": "寒假作业905"}, {
                    "id": 7563,
                    "value": "寒假作业906"
                }, {"id": 7564, "value": "寒假作业907"}, {"id": 7565, "value": "寒假作业908"}]
            }]
        },
        {
            "id": 3,
            "value": "小学",
            "children": [{
                "id": 2,
                "value": "小学二年级",
                "children": [{"id": 2212, "value": "701"}, {"id": 2213, "value": "702"}, {
                    "id": 2214,
                    "value": "703"
                }, {"id": 2215, "value": "704"}, {"id": 2216, "value": "705"}, {
                    "id": 2217,
                    "value": "706"
                }, {"id": 2218, "value": "707"}, {"id": 2219, "value": "708"}, {
                    "id": 2220,
                    "value": "709"
                }, {"id": 2221, "value": "710"}, {"id": 2222, "value": "711"}, {
                    "id": 2223,
                    "value": "712"
                }, {"id": 5209, "value": "712A"}, {"id": 5210, "value": "712B"}, {
                    "id": 8216,
                    "value": "周紫优"
                }, {"id": 8366, "value": "科英班"}, {"id": 8367, "value": "数语班"}, {
                    "id": 8368,
                    "value": "数英班"
                }, {"id": 8369, "value": "数英班"}, {"id": 8370, "value": "数科班"}, {"id": 12830, "value": "洪海勇培优"}]
            }, {
                "id": 3,
                "value": "小学三年级",
                "children": [{"id": 4851, "value": "801"}, {"id": 4852, "value": "802"}, {
                    "id": 4853,
                    "value": "803"
                }, {"id": 4854, "value": "804"}, {"id": 4855, "value": "805"}, {
                    "id": 4856,
                    "value": "806"
                }, {"id": 4857, "value": "807"}, {"id": 4858, "value": "808"}, {
                    "id": 4859,
                    "value": "809A"
                }, {"id": 4860, "value": "810C"}, {"id": 4861, "value": "811A"}, {
                    "id": 4862,
                    "value": "812B"
                }, {"id": 5187, "value": "809BC"}, {"id": 5203, "value": "809"}, {
                    "id": 5204,
                    "value": "810"
                }, {"id": 5205, "value": "811"}, {"id": 5206, "value": "812"}, {
                    "id": 5643,
                    "value": "800科学"
                }, {"id": 8374, "value": "9-10B谭"}, {"id": 8375, "value": "11-12C谭"}, {
                    "id": 8376,
                    "value": "9-10C黄"
                }, {"id": 8377, "value": "9-10A刘"}, {"id": 8378, "value": "11-12A颜"}, {
                    "id": 8379,
                    "value": "11-12B朱"
                }, {"id": 8694, "value": "科学培优"}, {"id": 8695, "value": "数学培优"}]
            }, {
                "id": 4,
                "value": "小学四年级",
                "children": [{"id": 5243, "value": "907物理竞赛"}, {"id": 5244, "value": "908物理竞赛"}, {
                    "id": 7027,
                    "value": "901"
                }, {"id": 7028, "value": "909"}, {"id": 7029, "value": "910"}, {
                    "id": 7030,
                    "value": "905"
                }, {"id": 7558, "value": "寒假作业901"}, {"id": 7559, "value": "寒假作业902"}, {
                    "id": 7560,
                    "value": "寒假作业903"
                }, {"id": 7561, "value": "寒假作业904"}, {"id": 7562, "value": "寒假作业905"}, {
                    "id": 7563,
                    "value": "寒假作业906"
                }, {"id": 7564, "value": "寒假作业907"}, {"id": 7565, "value": "寒假作业908"}]
            }]
        },
    ]
    ctx.body = result
})
bigData.get('/api/v1/xueqing/knowledgeMapping', async (ctx, next) => {
    console.log('转过来的接口')
    let result = {
        "knowledgeRate": Math.random() * 100,//已学习知识点占比
        "knowledgeTree": [],//知识点树
        "oneWeakKnowledge": [],
        "student": {},
        "studentName": "张三1",
        "threeWeakKnowledge": [],
        "twoWeakKnowledge": []
    }
    for (let i = 0; i <= 10; i++) {
        result['oneWeakKnowledge'].push({
            "knowledegeId": Math.ceil(Math.random() * 20),
            "knowledegeName": "知识点一-" + i,
            "mastery": Math.ceil(Math.random() * 100)
        })
        result['twoWeakKnowledge'].push({
            "knowledegeId": Math.ceil(Math.random() * 20),
            "knowledegeName": "知识点二-" + i,
            "mastery": Math.ceil(Math.random() * 100)
        })
        result['threeWeakKnowledge'].push({
            "knowledegeId": Math.ceil(Math.random() * 20),
            "knowledegeName": "知识点三-" + i,
            "mastery": Math.ceil(Math.random() * 100)
        })
    }
    for (let i = 0; i < 30; i++) {
        let rand = Math.ceil(Math.random() * 10001);
        result['student']['stu-' + rand] = '张三' + rand
    }

    let tree = [], firstLevelLen = 4;
    for (let a = 1; a <= firstLevelLen; a++) {
        let currentFirstLevel = {
            "children": [],
            "classData": {
                "fortyUserNum": Math.ceil(Math.random() * 100),
                "lessFortyUserNum": Math.ceil(Math.random() * 100),
                "lastWeekMastery": Math.ceil(Math.random() * 100),
                "seventhFiveUserNum": Math.ceil(Math.random() * 100),
                "sixtyUserNum": Math.ceil(Math.random() * 100),
                "weakStudent": [
                    "张三1",
                    "张三2",
                    "张三3",
                    "张三4"
                ]
            },
            "knowledegeId": a + '',
            "knowledegeName": "一级知识点" + a,
            "knowledegeLevelId": 1,
            "parentKnowledegeId": 0,
            "learnDay": '201806' + Math.ceil(Math.random() * 31 + 1),
            "mastery": Math.ceil(Math.random() * 100),
            "parentMastery": Math.ceil(Math.random() * 100)
        }
        tree.push(currentFirstLevel)
        if (currentFirstLevel['children']) {
            let secondLevelLen = Math.ceil(Math.random() * (firstLevelLen + 1));
            for (let b = 1; b <= secondLevelLen; b++) {
                let currentSecondLevel = {
                    "children": [],
                    "classData": {
                        "fortyUserNum": Math.ceil(Math.random() * 100),
                        "lessFortyUserNum": Math.ceil(Math.random() * 100),
                        "seventhFiveUserNum": Math.ceil(Math.random() * 100),
                        "lastWeekMastery": Math.ceil(Math.random() * 100),
                        "sixtyUserNum": Math.ceil(Math.random() * 100),
                        "weakStudent": [
                            "张三1",
                            "张三2",
                            "张三3",
                            "张三4"
                        ]
                    },
                    "knowledegeId": '' + a + b,
                    "knowledegeName": "二级知识点" + b,
                    "knowledegeLevelId": 2,
                    "parentKnowledegeId": a,
                    "learnDay": '201806' + Math.ceil(Math.random() * 31 + 1),
                    "mastery": Math.ceil(Math.random() * 100),
                    "parentMastery": Math.ceil(Math.random() * 100)
                }
                currentFirstLevel['children'].push(currentSecondLevel)
                if (currentSecondLevel['children']) {
                    let thirdLevelLen = Math.ceil(Math.random() * (secondLevelLen + 1));
                    for (let c = 1; c <= thirdLevelLen; c++) {
                        let currentThirdLevel = {
                            "classData": {
                                "fortyUserNum": Math.ceil(Math.random() * 100),
                                "lessFortyUserNum": Math.ceil(Math.random() * 100),
                                "seventhFiveUserNum": Math.ceil(Math.random() * 100),
                                "lastWeekMastery": Math.ceil(Math.random() * 100),
                                "sixtyUserNum": Math.ceil(Math.random() * 100),
                                "weakStudent": [
                                    "张三1",
                                    "张三2",
                                    "张三3",
                                    "张三4"
                                ]
                            },
                            "knowledegeId": '' + a + b + c,
                            "knowledegeName": "三级知识点" + c,
                            "knowledegeLevelId": 3,
                            "parentKnowledegeId": '' + a + b,
                            "learnDay": '201806' + Math.ceil(Math.random() * 31 + 1),
                            "mastery": Math.ceil(Math.random() * 100),
                            "parentMastery": Math.ceil(Math.random() * 100)
                        }
                        currentSecondLevel['children'].push(currentThirdLevel)
                    }
                }
            }
        }
    }
    result['knowledgeTree'] = tree;
    //
    // result['knowledgeTree'] = [
    //     {
    //         "knowledegeId": 110706,
    //         "knowledegeName": "图形的初步认识",
    //         "parentKnowledegeId": 0,
    //         "knowledegeLevelId": 1,
    //         "mastery": 19.7,
    //         "parentMastery": 7.7,
    //         "learnDay": 20180604
    //     }
    // ]
    ctx.body = result
})
bigData.get('/api/v1/xueqing/historyMastery', async (ctx, next) => {
    let result = [];
    for (let i = 0; i < 20; i++) {
        let index = i + 1;
        result.push({
            "mastery": Math.ceil(Math.random() * 101),
            "statisDay": '201806' + (index >= 10 ? index : '0' + index)
        })
    }
    ctx.body = result;
})
module.exports = bigData;
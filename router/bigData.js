const Router = require('koa-router')
const bigData = new Router();

bigData.get('/', async (ctx, next) => {
    ctx.body = "bigData index"
})
bigData.get('/api/v1/xueqing/selectTree', async (ctx, next) => {
    let result = [
        {
            "id": 2,
            "value": "初中",
            "children": [{
                "id": 7,
                "value": "初中七年级",
                "children": [{"id": 2212, "value": "701"}, {"id": 2213, "value": "702"}, {"id": 2214, "value": "703"}, {"id": 2215, "value": "704"}, {"id": 2216, "value": "705"}, {
                    "id": 2217,
                    "value": "706"
                }, {"id": 2218, "value": "707"}, {"id": 2219, "value": "708"}, {"id": 2220, "value": "709"}, {"id": 2221, "value": "710"}, {"id": 2222, "value": "711"}, {
                    "id": 2223,
                    "value": "712"
                }, {"id": 5209, "value": "712A"}, {"id": 5210, "value": "712B"}, {"id": 8216, "value": "周紫优"}, {"id": 8366, "value": "科英班"}, {"id": 8367, "value": "数语班"}, {
                    "id": 8368,
                    "value": "数英班"
                }, {"id": 8369, "value": "数英班"}, {"id": 8370, "value": "数科班"}, {"id": 12830, "value": "洪海勇培优"}]
            }, {
                "id": 8,
                "value": "初中八年级",
                "children": [{"id": 4851, "value": "801"}, {"id": 4852, "value": "802"}, {"id": 4853, "value": "803"}, {"id": 4854, "value": "804"}, {"id": 4855, "value": "805"}, {
                    "id": 4856,
                    "value": "806"
                }, {"id": 4857, "value": "807"}, {"id": 4858, "value": "808"}, {"id": 4859, "value": "809A"}, {"id": 4860, "value": "810C"}, {"id": 4861, "value": "811A"}, {
                    "id": 4862,
                    "value": "812B"
                }, {"id": 5187, "value": "809BC"}, {"id": 5203, "value": "809"}, {"id": 5204, "value": "810"}, {"id": 5205, "value": "811"}, {"id": 5206, "value": "812"}, {
                    "id": 5643,
                    "value": "800科学"
                }, {"id": 8374, "value": "9-10B谭"}, {"id": 8375, "value": "11-12C谭"}, {"id": 8376, "value": "9-10C黄"}, {"id": 8377, "value": "9-10A刘"}, {"id": 8378, "value": "11-12A颜"}, {
                    "id": 8379,
                    "value": "11-12B朱"
                }, {"id": 8694, "value": "科学培优"}, {"id": 8695, "value": "数学培优"}]
            }, {
                "id": 9,
                "value": "初中九年级",
                "children": [{"id": 5243, "value": "907物理竞赛"}, {"id": 5244, "value": "908物理竞赛"}, {"id": 7027, "value": "901"}, {"id": 7028, "value": "909"}, {"id": 7029, "value": "910"}, {
                    "id": 7030,
                    "value": "905"
                }, {"id": 7558, "value": "寒假作业901"}, {"id": 7559, "value": "寒假作业902"}, {"id": 7560, "value": "寒假作业903"}, {"id": 7561, "value": "寒假作业904"}, {"id": 7562, "value": "寒假作业905"}, {
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
                "children": [{"id": 2212, "value": "701"}, {"id": 2213, "value": "702"}, {"id": 2214, "value": "703"}, {"id": 2215, "value": "704"}, {"id": 2216, "value": "705"}, {
                    "id": 2217,
                    "value": "706"
                }, {"id": 2218, "value": "707"}, {"id": 2219, "value": "708"}, {"id": 2220, "value": "709"}, {"id": 2221, "value": "710"}, {"id": 2222, "value": "711"}, {
                    "id": 2223,
                    "value": "712"
                }, {"id": 5209, "value": "712A"}, {"id": 5210, "value": "712B"}, {"id": 8216, "value": "周紫优"}, {"id": 8366, "value": "科英班"}, {"id": 8367, "value": "数语班"}, {
                    "id": 8368,
                    "value": "数英班"
                }, {"id": 8369, "value": "数英班"}, {"id": 8370, "value": "数科班"}, {"id": 12830, "value": "洪海勇培优"}]
            }, {
                "id": 3,
                "value": "小学三年级",
                "children": [{"id": 4851, "value": "801"}, {"id": 4852, "value": "802"}, {"id": 4853, "value": "803"}, {"id": 4854, "value": "804"}, {"id": 4855, "value": "805"}, {
                    "id": 4856,
                    "value": "806"
                }, {"id": 4857, "value": "807"}, {"id": 4858, "value": "808"}, {"id": 4859, "value": "809A"}, {"id": 4860, "value": "810C"}, {"id": 4861, "value": "811A"}, {
                    "id": 4862,
                    "value": "812B"
                }, {"id": 5187, "value": "809BC"}, {"id": 5203, "value": "809"}, {"id": 5204, "value": "810"}, {"id": 5205, "value": "811"}, {"id": 5206, "value": "812"}, {
                    "id": 5643,
                    "value": "800科学"
                }, {"id": 8374, "value": "9-10B谭"}, {"id": 8375, "value": "11-12C谭"}, {"id": 8376, "value": "9-10C黄"}, {"id": 8377, "value": "9-10A刘"}, {"id": 8378, "value": "11-12A颜"}, {
                    "id": 8379,
                    "value": "11-12B朱"
                }, {"id": 8694, "value": "科学培优"}, {"id": 8695, "value": "数学培优"}]
            }, {
                "id": 4,
                "value": "小学四年级",
                "children": [{"id": 5243, "value": "907物理竞赛"}, {"id": 5244, "value": "908物理竞赛"}, {"id": 7027, "value": "901"}, {"id": 7028, "value": "909"}, {"id": 7029, "value": "910"}, {
                    "id": 7030,
                    "value": "905"
                }, {"id": 7558, "value": "寒假作业901"}, {"id": 7559, "value": "寒假作业902"}, {"id": 7560, "value": "寒假作业903"}, {"id": 7561, "value": "寒假作业904"}, {"id": 7562, "value": "寒假作业905"}, {
                    "id": 7563,
                    "value": "寒假作业906"
                }, {"id": 7564, "value": "寒假作业907"}, {"id": 7565, "value": "寒假作业908"}]
            }]
        },
    ]
    ctx.body = result
})
module.exports = bigData;
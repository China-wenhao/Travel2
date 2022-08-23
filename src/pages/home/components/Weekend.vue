<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.url" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HeaderWeekend",
    data() {
        return {
            recommendList: [
                {
                    id: "0001",
                    url: "	https://imgs.qunarzz.com/p/tts8/1706/84/0d1ebee065a4ea02.jpg",
                    title: "【茶马古道·骑马·湿地公园·网红打卡】",
                    desc: "拉市海一日游全新玩法"
                },
                {
                    id: "0002",
                    url: "	https://imgs.qunarzz.com/p/tts8/1706/84/0d1ebee065a4ea02.jpg",
                    title: "【茶马古道·骑马·湿地公园·网红打卡】",
                    desc: "拉市海一日游全新玩法"
                },
                {
                    id: "0003",
                    url: "	https://imgs.qunarzz.com/p/tts8/1706/84/0d1ebee065a4ea02.jpg",
                    title: "【茶马古道·骑马·湿地公园·网红打卡】",
                    desc: "拉市海一日游全新玩法"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
   .title
        margin-top .2rem
        line-height .8rem
        background #ccc
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1em
        .item-title
            line-height .54rem
            font-size .32rem
           overflow hidden
        white-space nowrap
        text-overflow ellipsis
        .item-desc
            line-height .4rem
            overflow hidden
        white-space nowrap
        text-overflow ellipsis
            color #ccc  
</style>
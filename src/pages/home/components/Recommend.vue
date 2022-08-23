<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                    <img :src="item.url"
                    class="item-img">
                <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HeaderRecommend",
    data(){
        return{
            recommendList:[
                {
                    id:"0001",
                    url:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_750x500_f9e2581d.jpg",
                    title:"【茶马古道·骑马·湿地公园·网红打卡】",
                    desc:"拉市海一日游全新玩法"
                },
                {
                    id:"0002",
                    url:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_750x500_f9e2581d.jpg",
                    title:"【茶马古道·骑马·湿地公园·网红打卡】",
                    desc:"拉市海一日游全新玩法"
                },
                {
                    id:"0003",
                    url:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_750x500_f9e2581d.jpg",
                    title:"【茶马古道·骑马·湿地公园·网红打卡】",
                    desc:"拉市海一日游全新玩法"
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
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width:1.7rem
            height:1.7rem
            padding .1rem
        .item-info
            flex:1
            padding .1em
            min-width: 0
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
            .item-button
                margin-top .2rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
                
</style>
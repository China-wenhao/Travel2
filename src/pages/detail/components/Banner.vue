<template>
    <div>
        <div class="banner" @click="handdleBannerClick">
            <img class="banner-img" :src="bannerImg">

            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number"><span class="iconfont">&#xe601;</span>{{ this.bannerImgs.length }}</div>
            </div>
        </div>
        <fade-animation>
        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handdleGallaryClose"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue'
import FadeAnimation from '@/common/fade/Fade.vue'
export default {
    name: "DetailBanner",
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data() {
        return {
            showGallary: false,
            imgs: ['https://source.qunarzz.com/site/images/wns/20220817_qunar_dujia_homepage_a750x192_v2.jpg',
                'https://source.qunarzz.com/site/images/wns/20220817_qunar_dujia_homepage_a750x192_v2.jpg',
                'https://source.qunarzz.com/site/images/wns/20220817_qunar_dujia_homepage_a750x192_v2.jpg']
        }
    },
    methods: {
        handdleBannerClick() {
            this.showGallary = true
        },
        handdleGallaryClose() {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    }
}
</script>

<style lang="stylus" scoped>
.banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0 
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem 
            .banner-number
                padding .02rem .4rem
                height .4rem
                line-height .4rem  
                border-radius .2rem
                font-size .24rem
                background rgb(83 90 83 / 42%)
                .banner-icon
                    font-size .24rem
</style>
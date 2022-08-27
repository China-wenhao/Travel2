<template>
    <div>
        <router-link tag="div" to="/" v-show="showAbs" class="header-abs">
            <div class="iconfont header-back">&#xe63c;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe63c;</div>
            </router-link>
            景点详情
        </div>
        <div class="contains"></div>
    </div>
</template>

<script>
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handdleScroll() {
            const top = document.documentElement.scrollTop;
            // console.log(top);
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated() {
        window.addEventListener("scroll", this.handdleScroll)
    },
    deactivated(){
        window.removeEventListener("scroll", this.handdleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    // .contains
    //     height 50rem
    .header-abs
        position absolute;
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius  .4rem
        background-color #fff;
        opacity 0.4
        .header-back
            color:#fff
            position absolute;
            top 50%
            left 50%
            transform translate(-50%,-50%)
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        // overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background #00bcd4
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .32rem
            color #fff
</style>
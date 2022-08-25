<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe63c;</div>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe693;</span>
        输入城市/景点/游玩主题</div>
        <router-link to="/city">
        <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "HomeHeader",
    props:{
        // city:String
    },
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
  .header
        display:flex
        height:.86rem
        line-height .86rem
        background:#00bcd4
        color:#fff
        .header-left
            width:.64rem
            float:left
            .back-icon
               text-align:center
               font-size:.4rem
        .header-input
            flex:1
            height:.64rem
            line-height .64rem  
            margin-top:.12rem
            margin-left:.2rem
            padding-left:.2rem
            background:#fff
            border-radius:.1rem
            color:#999
        .header-right
            min-width:1.04rem
            padding 0 .1em
            float:right
            text-align:center
            color:#fff
            .arrow-icon
                font-size:.24rem
                margin-left:-.04rem
                color:#fff

</style>
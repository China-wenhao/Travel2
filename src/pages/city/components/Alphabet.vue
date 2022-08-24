<template>
    <ul class="list" >
        <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name:"CityAlphabet",
        props:{
            cities:Object
        }
    }
</script>

<style lang="stylus" scoped>
.list
        display flex
        justify-content center
        flex-direction column

        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .44rem
            text-align center
            color #00bcd4
</style>
<template>
    <div>
        <div class="search">
            <input type="text" placeholder="请输入城市名或拼音" class="search-input" v-model="keyWord">
        </div>
        <div class="search-content" ref="search" v-show="keyWord">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id"
                    @click="handdleCityCilck(item.name)">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';
export default {
    name: "CitySearch",
    data() {
        return {
            keyWord: "",
            list: [],
            timer: null
        }
    },
    methods: {
        handdleCityCilck(city) {
            // this.$store.commit('changeCity',city)
            this.changeCity(city)
            this.$router.push("/")
        },
        ...mapMutations(["changeCity"])
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    },
    watch: {
        keyWord() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyWord) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (value.spell.indexOf(this.keyWord) > -1 ||
                            value.name.indexOf(this.keyWord) > -1
                        ) { result.push(value) }
                    });
                }
                this.list = result
            }, 100);
        }
    },
    props: {
        cities: Object
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.search, {
            click: true
        })
    },
    updated() {
        this.scroll.refresh()
    },
}
</script>

<style lang="stylus" scoped>
      .search
        background #00bcd4
        height .72rem
        padding 0 .1rem
        .search-input
            box-sizing border-box
            width 100%  
            height .62rem
            padding 0 .1rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color:#666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>
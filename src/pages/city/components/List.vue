<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handdleCityCilck(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area"
       v-for="(item, key) in cities" 
       :key="key"
       :ref="key"
       >
        <div class="title border-topbottom">
          {{ key }}
        </div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom" @click="handdleCityCilck(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="loading-wrapper"></div>
  </div>
</template>

<script>
import { mapState , mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed:{
    ...mapState({
      currentCity:"city"
    })
  },
  data() {
    return {
      data: []
    }
  },
  methods:{
    handdleCityCilck(city){
      // this.$store.commit('changeCity',city)
      this.changeCity(city)
      this.$router.push("/")
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  updated() {
    this.scroll.refresh()
  },
  watch: {
    letter() {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
 .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        
</style>
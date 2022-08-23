<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  name: 'HeaderSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      // swiperList: [{
      //   id: "0001",
      //   url: "https://source.qunarzz.com/site/images/wns/20220817_qunar_dujia_homepage_a750x192_v2.jpg"
      // },
      // {
      //   id: "0002",
      //   url: "https://source.qunarzz.com/site/images/wns/20220811_qunar_dujia_homepage_a750x192_v6.jpg"
      // }
      // ],
      swiperList: this.list
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  },
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 29.25%
        background #eee
        .swiper-img
            height 120px
            width:100%
</style>
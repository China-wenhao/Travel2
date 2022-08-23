<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      },
      swiperList: [{
        id: "0001",
        url: "https://source.qunarzz.com/site/images/wns/20220817_qunar_dujia_homepage_a750x192_v2.jpg"
      },
      {
        id: "0002",
        url: "https://source.qunarzz.com/site/images/wns/20220811_qunar_dujia_homepage_a750x192_v6.jpg"
      }
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background-color: #fff;
}

.wrapper {
  overflow: hidden;
  widows: 100%;
  height: 0;
  padding-bottom: 25.25%;
}

.swiper-img {
  width: 100%;
}
</style>
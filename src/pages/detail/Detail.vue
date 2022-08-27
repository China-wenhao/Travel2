<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="cotent">
            <detail-list :list="list" />
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios';
export default {
    name: "Detail-detail",
    components: { DetailBanner, DetailHeader, DetailList },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            list: [],
        }
    },
    methods: {
        getDetailInfo() {
            axios.get("/mock/detail.json", {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handdleGetDataSucc)
        },
        handdleGetDataSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // console.log(data);
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },

    mounted() {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
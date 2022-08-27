<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="cotent">
            <detail-list  :list="list"/>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
    name: "Detail-detail",
    components: { DetailBanner, DetailHeader, DetailList },
    data() {
        return {
            list: [
                {
                    title: "成人票",
                    children:[
                        {
                            title:"成人三馆联票",
                            children:[{
                                title:"成人三馆门票--某一连锁店销售"
                            }]
                        },{
                            title:"成人五馆联票"
                        },
                    ]
                },
                {
                    title: "学生票"
                },
                {
                    title: "儿童票"
                },
                {
                    title: "特惠票"
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
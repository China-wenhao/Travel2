<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index ">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.url">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    data() {
        return {
            iconList: [
                {
                    id: "0001",
                    url: "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    desc: "民宿客栈"
                },
                {
                    id: "0002",
                    url: "	https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
                    desc: "专车自驾"
                },
                {
                    id: "0003",
                    url: "https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png",
                    desc: "赚钱·信用卡"
                },
                {
                    id: "0004",
                    url: "https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png",
                    desc: "一日游"
                },
                {
                    id: "0005",
                    url: "https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png",
                    desc: "特惠酒店"
                },
                {
                    id: "0006",
                    url: "	https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
                    desc: "旅游团购"
                },
                {
                    id: "0007",
                    url: "https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png",
                    desc: "行程设计"
                },
                {
                    id: "0008",
                    url: "https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png",
                    desc: "周末游"
                },
                {
                    id: "0009",
                    url: "	https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png",
                    desc: "借钱"
                },
            ]
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages;
        }
    }
}
</script>

<style scoped>
.icons>>>.swiper-container {
    height: 0;
    padding-bottom: 50%;
}

.icon {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
}

.icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: .1rem;
}

.icon-img-content {
    height: 100%;
    display: block;
    margin: 0 auto;
}

.icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
<template>
    <ul class="list">
        <li class="item" v-for="item in letter" :key="item" @click="handdleLetterClick" @touchstart="handdleTouchStart"
            @touchmove="handdleTouchmove" @touchend="handdleTouchEnd" :ref="item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    computed: {
        letter() {
            const letter = []
            for (let i in this.cities) {
                letter.push(i)
            }
            return letter
        }
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated() {
        this.startY = this.$refs["A"][0].offsetTop
    },
    methods: {
        handdleLetterClick(e) {
            // console.log("Alohabet handdleLetterClick");
            this.$emit('change', e.target.innerText)
        },
        handdleTouchStart() {
            this.touchStatus = true
        },
        handdleTouchmove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 22)
                    if (index >= 0 && index < this.letter.length) {
                        this.$emit('change', this.letter[index])
                    }
                }, 16);

            }
        },
        handdleTouchEnd() {
            this.touchStatus = false
        },
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
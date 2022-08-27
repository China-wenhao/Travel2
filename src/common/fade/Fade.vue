<template>
    <transition>
        <slot>

        </slot>
    </transition>
</template>

<script>
export default {
    name: "FadeAnimation"
}
</script>

<style scoped>
.v-enter,.v-leave-to {
    opacity: 0;
    /*透明度*/
    transform: translateY(0px);
}

.v-leave,.v-enter-to {
    opacity: 1;
    /*透明度*/
    transform: translateY(0px);
}

.v-enter-active {
    transition: all 0.8s ease;
}

.v-leave-active {
    transition: all 1.8s ease;
}
</style>
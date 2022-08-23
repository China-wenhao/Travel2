<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe63c;</div>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe693;</span>
        输入城市/景点/游玩主题</div>
        <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeHeader"
}
</script>

<style scoped>
.iconfont{
    color: #fff;
}
.header {
    display: flex;
    line-height: 0.86rem;
    background-color: #00bcd4;
    color: #fff;
}

.header-left {
    width: .64rem;
    float: left
}
.back-icon{
    text-align: center;
}

.header-input {
    flex: 1;
    background-color: #fff;
    line-height: 0.64rem;
    height: 0.64rem;
    color: #ccc;
    margin-top:0.12rem;
    margin-left: 0.2rem;
    margin-bottom: 12px;
    border-radius: 0.1rem;
    padding-left: 0.2rem;
}

.header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
}
.arrow-icon{
    font-size: 0.24rem;
}
</style>
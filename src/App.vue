<template>
  <div id="app">
    <keep-alive exclude="Detail-detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style scoped>
</style>
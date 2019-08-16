<template>
  <div class="Home">
    <router-view></router-view>
    <van-tabbar
      route
      active-color="#42b983"
      inactive-color="#000">
      <van-tabbar-item
        replace
        to="/home/list"
        icon="home-o"
      >
        新闻列表
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/home/user"
        icon="search"
      >
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
      name: 'Home'
  }
</script>

<style scoped lang="scss">
</style>

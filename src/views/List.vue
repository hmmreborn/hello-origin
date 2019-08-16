<template>
    <div class="List">
      <ul>
        <li v-for="(item, index) of pageLists"
            :key="index"
        >
        <van-skeleton
          title
          avatar
          :row="3"
          :loading="loading"
        >
          <div class="demo-preview">
            <img src="https://img.yzcdn.cn/vant/logo.png">
            <div class="demo-content">
              <h3>{{ item.title}}</h3>
              <p>{{ item.content}}</p>
            </div>
          </div>
        </van-skeleton>
        </li>
      </ul>
    </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'List',
    store,
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      this.loading = false;
    },
    computed: {
      pageLists () {
        return store.state.lists
      }
    }
  }
</script>

<style scoped lang="scss">
.demo-preview{
  display: flex;
  padding: 0 15px;
  margin: 10px 0;
  img{
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: 15px;
  }
}
.demo-content {
  padding-top: 6px;
  h3{
    margin: 0;
    font-size: 18px;
    line-height: 20px;
  }
  p{
    margin: 13px 0 0;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

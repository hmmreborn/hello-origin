<template>
    <div class="Add">
      <van-nav-bar
        title="新闻"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-cell-group>
        <van-field  label="标题" v-model="title" required placeholder="请输入标题" />
      </van-cell-group>
      <van-field
        v-model="content"
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        rows="2"
        autosize
      />
      <div class="footer-btn">
        <van-button type="primary" size="small" plain @click="cancle()">取消</van-button>
        <van-button type="primary"size="small" @click="add()">添加</van-button>
      </div>
    </div>
</template>

<script>
  import store from '@/store'
  import {mapMutations} from 'vuex'
  import { Toast } from 'vant';
  export default {
    name: 'Add',
    store,
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      ...mapMutations(['addItem']),
      add () {
        if (this.title === '') {
          Toast('必填项不能为空~')
        } else {
          store.commit('addItem',{
            title: this.title,
            content: this.content
          })
          this.title = ''
          this.content = ''
          this.$router.push('/home/list')
        }
      },
      cancle () {
        this.$router.push('/home/user')
      },
      onClickLeft () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
.footer-btn{
  padding: 10px 15px;
  text-align: right;
  button{
    margin-left: 5px;
  }
}
.van-nav-bar .van-icon{
  color: #42b983;
  font-size: 20px;
}
</style>

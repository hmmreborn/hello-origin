<template>
    <div class="Login">
      <form action="" v-if="!isLogin">
        <van-cell-group>
          <van-field
            v-model="name"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />

          <van-field
            v-model="pwd"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <div class="button-row"><van-button type="primary" block @click="login()" hairline>登录</van-button></div>
        <div class="button-row"><van-button plain  block type="primary" @click="register()" hairline>注册</van-button></div>
      </form>
      <form action="" v-else>
        <van-cell-group>
          <van-field
            v-model="name"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />

          <van-field
            v-model="pwd"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />

          <van-field
            v-model="repeat"
            type="password"
            label="确认密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <div class="button-row"><van-button type="primary" @click="addUser()" block hairline>确定</van-button></div>
        <div class="button-row"><van-button type="primary" @click="cancle() " plain block hairline>取消</van-button></div>
      </form>
    </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'Login',
    data () {
      return {
        isLogin: false,
        name: '',
        pwd: '',
        repeat: '',
      }
    },
    methods: {
      login () {
        if (this.name === '' || this.pwd === '') {
          Toast('必填项不能为空~')
        } else if (localStorage.getItem('name') === this.name && localStorage.getItem('pwd') === this.pwd) {
          this.name = ''
          this.pwd = ''
          this.$router.push('/home/list')
        } else {
          Toast('用户名或密码不正确~')
        }
      },
      register () {
        this.name = ''
        this.pwd = ''
        this.repeat = ''
        this.isLogin = true
      },
      addUser () {
        if (this.name === '' || this.pwd === '' || this.repeat === '') {
          Toast('必填项不能为空~')
        } else if (this.pwd === this.repeat) {
          localStorage.setItem('name', this.name)
          localStorage.setItem('pwd', this.pwd)
          this.name = ''
          this.pwd = ''
          this.isLogin = false
        } else {
          Toast('密码不一致~')
        }
      },
      cancle () {
        this.isLogin = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .Login{
    padding: 0 15px;
    .van-cell-group{
      margin-bottom: 20px;
    }
    .button-row {
      margin-bottom: 10px;
    }
  }
</style>

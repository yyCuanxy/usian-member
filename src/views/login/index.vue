<template>
  <div class="login-wrapper">
    <div class="Login-form">
      <h1 class="Login-title">积云后台管理系统</h1>
      <el-form ref="form" :model="form" label-width="50px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped lang='scss'>
.login-wrapper {
  background: url('http://vue.mengxuegu.com/img/login.b665435f.jpg') no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden; //防止下面Login_form那个盒子 外边距塌陷
}
.Login-form{
  width: 350px;
  margin: 160px auto;
  padding: 28px;
  border-radius: 20px;
  background-color: hsla(0,0%,100%,.8);
}
.Login-title{
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
}
.el-form{
  margin-top: 20px;
}
</style>

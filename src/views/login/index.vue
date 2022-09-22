<template>
  <div class="login-wrapper">
    <div class="Login-form">
      <h1 class="Login-title">积云后台管理系统</h1>
      <el-form :rules="rules" ref="form" :model="LoginForm" label-width="60px">
        <el-form-item label="账号" prop="username">
          <!-- .trim目的在于 禁止输入空格 -->
          <el-input v-model.trim="LoginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="LoginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/user'
export default {
  name: '',
  components: {},
  data() {
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 12,
            message: '请输入3-12个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 点击登录按钮触发的方法
    handleLoginSubmit() {
      // 点击登录对整个表单作校验
      this.$refs['form'].validate((valid) => {
        if (!valid) return //如果valid为true，就是说账号密码存在空的，直接返回
        // 表单校验通过之后调用↓这个方法
        this.handleLogin()
      })
    },
    // 登录方法
    async handleLogin() {//async异步操作
    try{
      const response = await login(this.LoginForm)//await 同步操作
      console.log('response=>', response)
      console.log('token=>',response.token);
    }catch(e){
      console.log(e.message);
    }
      
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
.Login-form {
  width: 350px;
  margin: 160px auto;
  padding: 28px;
  border-radius: 20px;
  background-color: hsla(0, 0%, 100%, 0.8);
}
.Login-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
}
.el-form {
  margin-top: 20px;
}
</style>

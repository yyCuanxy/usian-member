<template>
  <el-header>
    <router-link to="./" class="link">
      <img
        class="logo"
        src="http://vue.mengxuegu.com/img/logo.7156be27.png"
        alt="logo"
        width="30px"
      />
      <span class="company">积云会员管理系统</span>
    </router-link>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ $store.getters.userInfo.name || ''
        }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="changePass" icon="el-icon-edit"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item command="logout" icon="el-icon-s-fold"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    handleCommand(command) {
      console.log(command)
      switch (command) {
        case 'changePass':
          this.handleChangePass()
          break
        case 'logout':
          this.handleLogout()
          break
      }
    },
    handleChangePass() {
      alert('修改密码')
    },
    async handleLogout() {
      try {
        const response = await this.$store.dispatch('handleLogout')
        setTimeout(() => {
          this.$router.push('/login')
        }, 100)
        this.$message.success('退出成功')
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.link {
  text-decoration: none;
  margin-left: 30px;
  color: #fff;
  line-height: 50px;
  // display: block;
  // background-color: yellow;
}
.logo {
  vertical-align: middle;
}
.company {
  margin-left: 10px;
  vertical-align: middle;
}
.el-dropdown {
  float: right;
  margin-right: 30px;
  color: #fff;
}
</style>

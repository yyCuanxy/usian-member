<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside>
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from './AppHeader'
import AppAside from './AppAside'
import AppMain from './AppMain'
export default {
  name: '',
  components: {
    AppHeader,
    AppAside,
    AppMain
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #2d3a4b;
  height: 50px !important;
  line-height: 50px;
  color: #333;
  color: #fff;
  padding: 0;
}

.el-aside {
  background-color: #545c64;
  color: #fff;
  height: 100%;
  width: 230px !important;
}

.el-main {
  background-color: #fff;
  color: #333;
  height: 100%;
}
</style>

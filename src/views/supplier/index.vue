<template>
  <div>
    <!-- <div class="mt-2">
      <el-form ref="memberQueryForm" :inline="true" :model="memberQueryParams">
        <el-form-item prop="name">
          <el-input
            v-model="memberQueryParams.name"
            placeholder="供应商名称"
          ></el-input>
        </el-form-item>
        <el-form-item prop="linkname">
          <el-input
            v-model="memberQueryParams.linkname"
            placeholder="联系人"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQueryMember">查询</el-button>
          <el-button type="primary" @click="handleOpenDialog">新增</el-button>
          <el-button @click="handleReset('memberQueryForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div> -->
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      // 查询的参数
      // memberQueryParams: {
      //   name: '',
      //   linkman: '',
      //   mobile: ''
      // }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 供应商查询功能
    handleQueryMember(){
      console.log(memberQueryParams);
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

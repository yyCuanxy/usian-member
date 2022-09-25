<template>
  <div>
    <div class="mt-2">
      <el-form
        :inline="true"
        :model="StaffQueryParams"
        class="demo-form-inline"
      >
        <el-form-item label="审批人">
          <el-input
            v-model="StaffQueryParams.username"
            placeholder="账号"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="StaffQueryParams.name"
            placeholder="姓名"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleQueryStaff">查询</el-button>
          <el-button type="primary">新增</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="staffList" height="380" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60px">
        </el-table-column>
        <el-table-column prop="username" label="账号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="salary" label="薪酬"> </el-table-column>
        <el-table-column prop="entryDate" label="入职时间"> </el-table-column>
        <el-table-column label="操作" width="160px">
          <template v-slot="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="mt-2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import StaffApi from '../../api/staff'
export default {
  name: '',
  components: {},
  data() {
    return {
      // 用来保存后台返回的员工列表数据
      staffList: [],
      // 页码
      currentPage: 1,
      // 条数
      pageSize: 10,
      // 总条数
      total: 0,
      // 查询的参数
      StaffQueryParams: {
        username: '',
        name: ''
      }
    }
  },
  created() {
    this.getStaffList()
  },
  mounted() {},
  methods: {
    // 获取员工列表数据
    async getStaffList() {
      const { rows, total } = await StaffApi.getStaffList(
        this.currentPage,
        this.pageSize,
        this.StaffQueryParams
      )
      this.total = total
      this.staffList = rows
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getStaffList()
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getStaffList()
    },
    handleQueryStaff(){
      this.currentPage=1
      this.getStaffList
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

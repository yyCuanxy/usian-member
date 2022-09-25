<template>
  <div>
    <div class="mt-2">
      <el-form
        :inline="true"
        :model="SupplierQueryParams"
        class="demo-form-inline"
      >
        <el-form-item>
          <el-input
            v-model="SupplierQueryParams.name"
            placeholder="供应商名称"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="SupplierQueryParams.linkman"
            placeholder="联系人"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="SupplierQueryParams.mobile"
            placeholder="联系电话"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuerySupplier">查询</el-button>
          <el-button type="primary">新增</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="supplierList" height="380" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60px">
        </el-table-column>
        <el-table-column prop="name" label="供应商名称"> </el-table-column>
        <el-table-column prop="linkman" label="联系人"> </el-table-column>
        <el-table-column prop="mobile" label="联系电话"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
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
import SupplierApi from '../../api/supplier'
export default {
  name: '',
  components: {},
  data() {
    return {
      // 用来保存后台返回的供应商列表数据
      supplierList: [],
      // 页码
      currentPage: 1,
      // 条数
      pageSize: 10,
      // 总条数
      total: 0,
      // 查询的参数
      SupplierQueryParams: {
        name: '',
        linkman: '',
        mobile: ''
      }
    }
  },
  created() {
    this.getSupplierList()
  },
  mounted() {},
  methods: {
    // 获取供应商列表数据
    async getSupplierList() {
      const { rows, total } = await SupplierApi.getSupplierList(
        this.currentPage,
        this.pageSize,
        this.SupplierQueryParams
      )
      this.total = total
      this.supplierList = rows
    },
    // 条数切换出发的方法
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getSupplierList()
    },
    // 页码切换触发的方法
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getSupplierList()
    },
    // 供应商查询功能
    handleQuerySupplier(){
      this.currentPage=1
      this.getSupplierList()
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

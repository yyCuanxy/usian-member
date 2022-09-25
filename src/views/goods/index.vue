<template>
  <div>
    <div class="mt-2">
      <el-form ref="goodsQueryForm" :inline="true" :model="GoodsQueryParams">
        <el-form-item prop="user">
          <el-input
            v-model="GoodsQueryParams.user"
            placeholder="商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="GoodsQueryParams.code"
            placeholder="商品编号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="supplierName">
          <el-input
            v-model="GoodsQueryParams.supplierName"
            placeholder="选择供应商"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleQueryGoods">查询</el-button>
          <el-button type="primary">新增</el-button>
          <el-button @click="handleReset('goodsQueryForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="goodsList" height="380" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60px">
        </el-table-column>
        <el-table-column prop="name" label="商品名称"> </el-table-column>
        <el-table-column prop="code" label="商品编码"> </el-table-column>
        <el-table-column prop="spec" label="商品规格"> </el-table-column>
        <el-table-column prop="retailPrice" label="零售价"> </el-table-column>
        <el-table-column prop="purchasePrice" label="进货价"> </el-table-column>
        <el-table-column prop="storageNum" label="库存数量"> </el-table-column>
        <el-table-column prop="supplierName" label="供应商"> </el-table-column>
        <el-table-column label="操作" width="160px">
          <template v-slot="scope">
            <el-button size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
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
import GoodsApi from '../../api/goods'
export default {
  name: '',
  components: {},
  data() {
    return {
      // 用来保存后台返回的商品列表数据
      goodsList: [],
      // 页码
      currentPage: 1,
      // 条数
      pageSize: 10,
      // 总条数
      total: 0,
      // 查询的参数
      GoodsQueryParams: {
        name: '',
        code: '',
        supplierName: ''
      }
    }
  },
  created() {
    this.getGoodsList()
  },
  mounted() {},
  methods: {
    // 获取商品列表数据
    async getGoodsList() {
      const { rows, total } = await GoodsApi.getGoodsList(
        this.currentPage,
        this.pageSize,
        this.GoodsQueryParams
      )
      this.total = total
      this.goodsList = rows
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getGoodsList()
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getGoodsList()
    },
    handleQueryGoods() {
      this.currentPage = 1
      this.getGoodsList()
    },
    // 表单重置
    handleReset(formName) {
      this.$refs[formName].resetFields()
    },
    handleDelete(id) {
      this.$confirm('确认删除这条记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          try {
            const response = await GoodsApi.deleteGoodsList(id)
            this.$message.success('删除成功')
            this.getGoodsList()
          } catch (e) {
            console.log(e.message)
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

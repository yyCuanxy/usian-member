<template>
  <div>
    <div class="mt-2">
      <el-form ref="memberQueryForm" :inline="true" :model="memberQueryParams">
        <el-form-item prop="cardNum">
          <el-input
            v-model="memberQueryParams.cardNum"
            placeholder="会员卡号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input
            v-model="memberQueryParams.name"
            placeholder="会员姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="payType">
          <el-select v-model="memberQueryParams.payType" placeholder="支付类型">
            <el-option
              v-for="(item, index) in payType"
              :key="index"
              :label="item.name"
              :value="item.type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="birthday">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="memberQueryParams.birthday"
            type="date"
            placeholder="出生日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQueryMember">查询</el-button>
          <el-button type="primary">查询</el-button>
          <el-button @click="handleReset('memberQueryForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="memberList" height="380" border style="width: 100%">
        <el-table-column label="序号" width="60px" type="index">
        </el-table-column>
        <el-table-column prop="cardNum" label="会员卡号"> </el-table-column>
        <el-table-column prop="name" label="会员姓名"> </el-table-column>
        <el-table-column prop="birthday" label="会员生日"> </el-table-column>
        <el-table-column prop="phone" label="手机号码" width="140px">
        </el-table-column>
        <el-table-column prop="integral" label="可用积分"> </el-table-column>
        <el-table-column prop="money" label="开卡金额"> </el-table-column>
        <el-table-column prop="payType" label="支付类型">
          <template v-slot="scope">
            {{ scope.row.payType | filterPayType }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="会员地址" width="200px">
        </el-table-column>
        <el-table-column label="操作" width="200px">
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
        :current-page="page"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import MemberApi from '../../api/member'
import MemberEnum from '../../enum/member'
export default {
  name: '',
  components: {},
  data() {
    return {
      // 用来保存后台返回的会员列表数据
      memberList: [],
      // 页码
      page: 1,
      // 条数
      size: 10,
      // 总条数
      total: 0,
      // 查询的参数
      memberQueryParams: {
        cardNum: '',
        name: '',
        payType: '',
        birthday: ''
      },
      payType: MemberEnum.payType
    }
  },
  created() {
    this.getMemberList()
  },
  filters: {
    filterPayType(value) {
      // console.log(value)
      // return MemberEnum.payType[value]
      const data = MemberEnum.payType.find((item) => {
        return item.type === value
      })
      return data ? data.name : ''
    }
  },
  mounted() {},
  methods: {
    // 获取会员列表数据
    async getMemberList() {
      const { rows, total } = await MemberApi.getMemberList(
        this.page,
        this.size,
        this.memberQueryParams
      )
      console.log('memberList=>', rows)
      this.total = total
      this.memberList = rows
    },
    // 条数切换时触发的方法
    handleSizeChange(size) {
      // console.log(size);
      ;(this.size = size), this.getMemberList()
    },
    // 页码切换时触发的方法
    handleCurrentChange(page) {
      // console.log(page);
      this.page = page
      this.getMemberList()
    },
    // 会员查询功能
    handleQueryMember() {
      console.log(this.memberQueryParams)
      this.page = 1
      this.getMemberList()
    },
    // 表单重置
    handleReset(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

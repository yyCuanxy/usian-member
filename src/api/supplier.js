// 封装供应商管理的接口

// 先导入request
import request from "../utils/request";

// 获取供应商列表和查询分页接口
const getSupplierList = (currentPage, pageSize, data) => {
  return request({
    url: `/supplier/list/search/${currentPage}/${pageSize}`,
    method: "POST",
    data
  })
}


export default{
  getSupplierList
}
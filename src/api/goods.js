// 商品管理的接口

// 先导入request
import request from "../utils/request";

// 获取商品列表和查询分页接口
const getGoodsList = (currentPage, pageSize, data) => {
  return request({
    url: `/goods/list/search/${currentPage}/${pageSize}`,
    method: "POST",
    data
  })
}
const deleteGoodsList = (id) => {
  return request({
    url: `/goods/${id}`,
    method:'DELETE'
  })
}

export default{
  getGoodsList,
  deleteGoodsList
}
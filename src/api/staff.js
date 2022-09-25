// 员工管理的接口

// 先导入request
import request from "@/utils/request";

// 获取员工列表和查询分页接口
const getStaffList = (currentPage, pageSize, data) => {
  return request({
    url: `/staff/list/search/${currentPage}/${pageSize}`,
    method: "POST",
    data
  })
}

export default{
  getStaffList
}
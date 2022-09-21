//会员管理接口   http://vuemengxuegu.com/pro-api/member/list/search/1/20/
// 供应商管理接口http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10

// 发送请求 引入request
import request from "../utils/request";

// 获取会员列表接口
const getMemberList = (page = 1, size = 10, data = {}) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: "POST",
    data
  });
};
// 获取供应商列表接口
const getSupplierList = (page = 1, size = 10, data = {}) => {
  return request({
    url: `/supplier/list/search/${page}/${size}`,
    method: "POST",
    data,
  });
};
export default {
  getMemberList,
  getSupplierList,
};

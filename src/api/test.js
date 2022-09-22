//会员管理接口   http://vuemengxuegu.com/pro-api/member/list/search/1/20/
// 供应商管理接口http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// 查询单个会员接口http://vue.mengxuegu.com/pro-api/member/14

// 发送请求 引入request
import request from "../utils/request";

const getBanner = () => {
  //  
  return request({
    url:'/',
    proxy:'/dev-v1'
  })
}
const getList = () => {
  return request({
    url:'/',
    proxy:'/dev-v2'
  })
 }
const getLive = () => {
  return request({
    url:'/api/live'
  })
 }
const getMenu = () => {
  return request({
    url:'/api/menu'
  })
 }

// 获取会员列表接口
const getMemberList = (page = 1, size = 10, data = {}) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: "post",
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

// 查询单个会员接口
const findMember = (id) => {
  return request({
    url: `/member/${id}`,
    method: 'GET',
    data: {
      age: 10000
    }
  })
}

export default {
  getMemberList,
  getSupplierList,
  findMember,
  getBanner,
  getList
};

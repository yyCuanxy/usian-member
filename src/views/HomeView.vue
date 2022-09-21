<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestApi from "../api/test.js";

export default {
  name: "HomeView",
  data() {
    return {
      page: 1,
      size: 10,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    // 会员管理列表
    TestApi.getMemberList(this.page, this.size)
      .then((response) => {
        console.log("member=>", response);
      })
      .catch((error) => {
        console.log(error);
      });
    // 供应商管理
    TestApi.getSupplierList(this.page, this.size)
      .then((response) => {
        console.log("supplier=>", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

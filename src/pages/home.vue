<template>
  <a-layout>
    <a-layout-header class="header">
      <img src="../assets/logo_app_apk.png" class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{
          lineHeight: '64px',
          textAlign: 'right',
        }"
        @click="topNavClick"
      >
        <a-menu-item key="login">{{
          userName ? "登出" : "请登录"
        }}</a-menu-item>
        <a-menu-item key="register" v-if="!userName">注册</a-menu-item>
        <a-sub-menu key="service">
          <template #title>客服</template>
          <a-menu-item key="Pocket-S"> 服务中心 </a-menu-item>
          <a-menu-item key="2"> 联系客服 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="shoppingCar"
          ><a-badge count="5"> 购物车</a-badge></a-menu-item
        >
        <a-avatar
          :size="52"
          src="https://s2.loli.net/2022/07/27/3a8wlyuXztHfhVE.jpg"
        />
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item
          ><router-link to="/home">Home</router-link></a-breadcrumb-item
        >
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff; height: 100vh">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu style="width: 200px" mode="vertical" @click="handleClick">
            <a-sub-menu v-for="(item, index) in sideBarList" :key="index">
              <template #title>{{ index }}</template>
              <a-menu-item
                v-for="_item in item"
                :key="_item.name"
                style="width: 214px; height: 72px"
              >
                <img style="width: 52px; height: 52px" :src="_item.pic" />
                {{ _item.name }}
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> </a-layout-footer>
  </a-layout>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "@/stores/user";
import { getsideBarList } from "../api/index";
export default {
  computed: {
    ...mapStores(useUserStore),
  },
  data() {
    return {
      userName: window.localStorage.getItem("userName"),
      sideBarList: {},
    };
  },
  methods: {
    breakRoute() {
      console.log(this.$route.fullPath);
    },
    async getList() {
      const data = await getsideBarList();
      this.sideBarList = data;
    },
    topNavClick({ item, key, keyPath }) {
      if (key == "login" && !this.user.name) {
        this.$router.push("login");
      } else if (key == "login" && this.user.name) {
        this.user.logOut();
      } else if (key == "register") {
        this.$router.push("register");
      } else if (key == "shoppingCar") {
        this.$router.push("shoppingCar");
      }
    },
    handleClick({ item, key, keyPath }) {
      console.log(item);
      console.log(key);
      console.log(keyPath);
    },
  },
  created() {
    this.getList();
    this.breakRoute()
  },
};
</script>

<style>
.logo {
  position: absolute;
  top: 10px;
  width: 103px;
  height: 60px;
}
</style>

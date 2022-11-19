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
          user.name ? "退出登录" : "请登录"
        }}</a-menu-item>
        <a-menu-item key="register">注册</a-menu-item>
        <a-sub-menu key="service">
          <template #title>客服</template>
          <a-menu-item key="Pocket-S"> 服务中心 </a-menu-item>
          <a-menu-item key="2"> 联系客服 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="shoppingCar"
          ><a-badge count="6"> 购物车</a-badge></a-menu-item
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
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div>
            <template v-if="!user.cart">
              <a-empty :style="{ marginTop: '100px' }"
                ><img slot="image" src="../assets/cart.png" />
                <span slot="description">
                  还没有任何商品哦，快去<router-link to="/home"
                    >挑选</router-link
                  >吧
                </span>
                <!-- <a-button type="primary"> Create Now </a-button> -->
              </a-empty>
            </template>
            <div v-else class="wrap">
              <a-table
                :pagination="{
                  defaultPageSize: 9,
                }"
                style="height: 640px"
                :columns="columns"
                :data-source="user.data"
                :row-selection="{
                  selectedRowKeys: selectedRowKeys,
                  onChange: onSelectChange,
                }"
              >
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="
                      tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                        ? 'geekblue'
                        : 'green'
                    "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
                <span slot="action" slot-scope="text, record">
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link">
                    More actions <a-icon type="down" />
                  </a>
                </span>
              </a-table>
              <a-button
                type="primary"
                style="margin-left: 95%"
                @click="handleConfirm"
                >购买</a-button
              >
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> </a-layout-footer>
  </a-layout>
</template>

<script>
const columns = [
  {
    //要展示的字段
    dataIndex: "name",
    //唯一键，若dataIndex唯一，可不配置
    key: "name",

    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

import { mapStores } from "pinia";
import { useUserStore } from "@/stores/user";
export default {
  computed: {
    ...mapStores(useUserStore),
  },
  data() {
    return {
      selectedRowKeys: [],
      columns,
    };
  },
  methods: {
    handleConfirm() {
      this.$message.success("购买成功",1);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    topNavClick({ item, key, keyPath }) {
      if (key == "login" && !this.user.name) {
        this.$router.push("login");
      } else if (key == "register") {
        this.$router.push("register");
      } else if (key == "shoppingCar") {
        this.$router.push("shoppingCar");
      } else if (key == "login" && this.user.name) {
        this.user.logOut();
      }
    },
    handleClick({ item, key, keyPath }) {
      console.log(item);
      console.log(key);
      console.log(keyPath);
    },
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 10px;
  width: 103px;
  height: 60px;
}
.wrap {
  height: 600px;
}
</style>

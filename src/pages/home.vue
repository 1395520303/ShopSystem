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
        <a-menu-item key="login">请登录</a-menu-item>
        <a-menu-item key="register">注册</a-menu-item>
        <a-sub-menu key="service">
          <template #title>客服</template>
          <a-menu-item key="Pocket-S" style="width: 214px; height: 40px">
            服务中心
          </a-menu-item>
          <a-menu-item key="2" style="width: 214px; height: 40px">
            联系客服
          </a-menu-item>
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
            <a-sub-menu key="phone">
              <template #title>手机</template>
              <a-menu-item key="Pocket-S" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Pocket-S
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="laptop">
              <template #title>电脑</template>
              <a-menu-item key="1" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="pad">
              <template #title>平板</template>
              <a-menu-item key="1" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="screen">
              <template #title>智慧屏</template>
              <a-menu-item key="1" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="wear">
              <template #title>穿戴</template>
              <a-menu-item key="1" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="headphone">
              <template #title>耳机音响</template>
              <a-menu-item key="1" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="2" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="3" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="4" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                Mate系列
              </a-menu-item>
              <a-menu-item key="5" style="width: 214px; height: 72px">
                <img
                  style="width: 52px; height: 52px"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                查看更多
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
export default {
  methods: {
    topNavClick({ item, key, keyPath }) {
      if (key == "login") {
        this.$router.push("login");
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

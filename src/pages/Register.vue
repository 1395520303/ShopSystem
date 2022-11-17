<template>
  <div class="back">
    <div class="left">
      <img src="../assets/mall.png" alt="">
    </div>
    <div class="division"></div>
    <div class="loginFrame">
      <div class="title">商城系统注册</div>
      <a-form
        :form="form"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="用户名">
          <a-input
            autoComplete="off"
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '请输入用户名' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password
            allow-clear
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }],
              },
            ]"
            type="password"
          >
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 11 }">
          <a-button type="primary" html-type="submit"> 注册 </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { register } from "../api/login";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$message.loading("请稍后..", 1.5).then(() => {
            register(values)
              .then(({ msg }) => {
                if (msg == "success") {
                  this.$message.success("创建成功");
                  this.$router.push("login");
                } else {
                  this.$message.error("该用户名已被注册");
                }
              })
              .catch((err) => {
                this.$message.error(err);
              });
          });
        }
      });
    },
  },
};
</script>

<style>
.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
}
.loginFrame {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  height: 300px;
}
.back {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: antiquewhite;
}
.division{
  height: 80vh;
  width: 6px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
}
</style>

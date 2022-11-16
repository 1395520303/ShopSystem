<template>
  <div class="outer">
    <div class="title">商城系统登录</div>
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
            { rules: [{ required: true, message: '请输入用户名' }] },
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

      <a-form-item :wrapper-col="{ span: 12, offset: 10 }">
        <a-space size="large"
          ><a-button type="primary" html-type="submit"> 登录 </a-button>
          <a-button type="primary" @click="register"> 注册 </a-button></a-space
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { logIn } from "../api/login";
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
          logIn({})
            .then(({ data: { msg } }) => {
              if (msg == "sucess") {
                this.$router.push("home");
              }
            })
            .catch((err) => {
              console.log(err);
            });
          // console.log("Received values of form: ", values);
        }
      });
    },
    register() {
      this.$router.push("/register");
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
.outer {
  width: 800px;
  height: 300px;
  margin: 150px auto;
}
</style>

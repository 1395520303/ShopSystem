import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import "normalize.css/normalize.css";
import { createPinia, PiniaVuePlugin, setMapStoreSuffix } from "pinia";

Vue.use(PiniaVuePlugin);
Vue.use(Antd);
// require('./mock/index')
Vue.config.productionTip = false;
setMapStoreSuffix("");
const pinia = createPinia();
new Vue({
  el: "#app",
  router,
  pinia,
  render: (h) => h(App),
});

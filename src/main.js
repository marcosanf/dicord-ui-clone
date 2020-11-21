import Vue from "vue";

import './styles/main.scss';
import Layout from "./components/Layout";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Layout)
}).$mount("#app");

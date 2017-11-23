import Vue from "vue";
import weixin from "./template/weixin.vue";
import "./weixin.css"
let config = {
    render:h=>h(weixin)
};
const vm = new Vue(config);
vm.$mount("#weixin");

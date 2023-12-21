import { createApp } from "vue";
import "normalize.css";
import Antd from "ant-design-vue";
import App from "@/App.vue";
import router from "@/router";
import pinia from "@/store";
import SvgIcon from "@/components/SvgIcon";
import * as Icons from "@ant-design/icons-vue";
import "ant-design-vue/dist/reset.css";
import "./index.css";

const app = createApp(App);
app.use(SvgIcon);
app.use(Antd);
app.use(pinia);

app.use(router).mount("#app");
const icons = Icons;
for (const i in icons) {
  app.component(i, icons[i]);
}

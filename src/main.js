import { createApp } from "vue";
import "normalize.css";
import App from "@/App.vue";
import router from "@/router";
import pinia from "@/store";
import SvgIcon from "@/components/SvgIcon";
import "./index.css";

const app = createApp(App);
app.use(SvgIcon);
app.use(pinia);

app.use(router).mount("#app");

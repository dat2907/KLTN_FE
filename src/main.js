import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./layout/wrapper/index.vue";
import Toaster from "@meforma/vue-toaster";
import Blank from "./layout/wrapper/Login.vue";
import ClientNew from "./layout/wrapper/indexClient.vue"
import AdminNew from "./layout/wrapper/indexAdmin.vue"
import TaiXeNew from "./layout/wrapper/indexTaiXe.vue"

const app = createApp(App);

app.use(router);
app.use(Toaster, {
  position: "top-right",
});
app.use(router);
app.component("default-layout", Default);
app.component("new-layout", Blank);
app.component("client-layout", ClientNew);
app.component("admin-layout", AdminNew);
app.component("taixe-layout", TaiXeNew);
app.mount("#app");

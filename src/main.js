import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./layout/wrapper/index.vue";
import Toaster from "@meforma/vue-toaster";
import Login from "./layout/wrapper/Login.vue";
const app = createApp(App);

app.use(router);
app.use(Toaster, {
  position: "top-right",
});
app.use(router);
app.component("default-layout", Default);
app.component("Login-layout", Login);
app.mount("#app");

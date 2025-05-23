<template>
  <TopRocker></TopRocker>
  <MenuRocker></MenuRocker>
  <div id="appCapsule">
    <router-view></router-view>
  </div>
  <BotRocker></BotRocker>
</template>
<script>
import TopRocker from "../components/TopRocker.vue";
import BotRocker from "../components/BotRocker.vue";
import MenuRocker from "../components/MenuRocker.vue";
// import "../../assets/js/bootstrap.bundle.min.js";
// import "../../assets/js/jquery.min.js";
// import "../../assets/plugins/simplebar/js/simplebar.min.js";
// import "../../assets/plugins/metismenu/js/metisMenu.min.js";
// import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
// import "../../assets/js/index.js";
// import "../../assets/js/app.js";
// import "../../assets/js/pace.min.js";
import "../../assets/js/lib/bootstrap.bundle.min.js";
import "../../assets/js/plugins/splide/splide.min.js";
import "../../assets/js/base.js";
import { RouterView } from "vue-router";
// import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
export default {
  name: "app",
  components: {
    TopRocker,
    MenuRocker,
    BotRocker,
  },
};
</script>
<style>
/* @import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css"; */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
/* @import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css"; */
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
@import "../../assets/css/style.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
</style>

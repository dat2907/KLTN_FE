<template>
    <TopAdmin></TopAdmin>
    <MenuAdmin></MenuAdmin>
    <div id="appCapsule">
        <router-view></router-view>
    </div>
    <BotAdmin></BotAdmin>
</template>
<script>
import TopAdmin from "../components/Admin/TopAdmin.vue";
import MenuAdmin from "../components/Admin/MenuAdmin.vue";
import BotAdmin from "../components/Admin/BotAdmin.vue";
import "../../assets/js/lib/bootstrap.bundle.min.js";
import "../../assets/js/plugins/splide/splide.min.js";
import "../../assets/js/base.js";
import { RouterView } from "vue-router";
export default {
    name: "app",
    components: {
        TopAdmin,
        MenuAdmin,
        BotAdmin,
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
@import "../../assets/css/style.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
</style>
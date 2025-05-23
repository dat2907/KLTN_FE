<template >
	<div class="appHeader no-border transparent position-absolute">
        <div class="left">
            <a href="#" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle"></div>
        <div class="right">
        </div>
    </div>
			<RouterView></RouterView>
</template>
<script>
import "../../assets/js/lib/bootstrap.bundle.min.js";
import "../../assets/js/plugins/splide/splide.min.js";
import "../../assets/js/base.js";
import { RouterView } from "vue-router";
export default {
	name        :   'app',
    components  :   {
    },
}
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
@import url("https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
@import "../../assets/css/style.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
</style>
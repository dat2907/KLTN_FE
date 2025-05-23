<template>
	<div class="appHeader text-light">
        <div class="left">
            <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
        <div class="logo-main">
            <img src="../../assets/img/LOGO_KLTN_CHINH.png" alt="logo" class="logo">
        </div>
        <div class="right">
            <a href="/client/dang-nhap" class="headerButton">
                <i class="fas fa-bell"></i>
                <!-- <span class="badge badge-danger">4</span> -->
            </a>
            <a href="app-settings.html" class="headerButton">
                <!-- <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/490705266_2434762923545253_3741156639531100455_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k0HDbQJU6y8Q7kNvwG-j49W&_nc_oc=AdksnyCNVAXoUEoxpbmIsUGR-_kLsEN9aEpOlwTLCCvqHi6kNGWQujngcnimn3-dBCw&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=KpTV5wgKkNI69jJruqP24w&oh=00_AfHngLzxuSVcBSiqvpVwCpWlgMtqpSAgNm8kfJjIfjf11w&oe=6806B197" alt="image" class="imaged w32">
                <span class="badge badge-danger">6</span> -->
                <img src="../../assets/img/ava.jpg">

            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.appHeader {
    background: radial-gradient(circle at center, #1e90ff, #0066cc); 
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    height: 70px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    z-index: 1000;

    
}

.appHeader .left,
.appHeader .right {
    display: flex;
    align-items: center;
}

.headerButton {
    color: #fff;
    font-size: 30px;
    margin: 0 5px;
}

.headerButton img {
    width: 32px; 
    height: 32px; 
    object-fit: cover; 
    border-radius: 50%; 
}

.badge-danger {
    background-color: red; 
    color: white; 
    font-size: 12px; 
}
.logo-main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-main .logo {
    height: 70px !important; 

    width: 200px !important;   
    max-width: 100% !important; 
    border-radius: 8px;
    object-fit: cover;
}

.btn-light {
    background-color: #f8f9fa; /* Mã màu mới cho btn-light */
    color: #212529;
    border: 1px solid #f8f9fa;
}

</style>
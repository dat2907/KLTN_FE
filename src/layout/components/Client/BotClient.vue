<template>
    <div class="appBottomMenu">
        <a href="/homepage/trang-chu" class="item">
            <div class="col">
            <i class="fas fa-home"></i>
            <strong>Trang chủ</strong>
            </div>
        </a>
        <a href="/client/dat-xe" class="item">
            <div class="col">
            <i class="fas fa-car"></i>
            <strong>Đặt xe</strong>
            </div>
        </a>
        <a href="/client/lich-su-chuyen-xe" class="item">
            <div class="col">
            <i class="fas fa-clock"></i>
            <strong>Lịch sử</strong>
            </div>
        </a>
        <!-- <a href="/ho-tro" class="item">
            <div class="col">
            <i class="fas fa-headset"></i>
            <strong>Hỗ trợ</strong>
            </div>
        </a> -->
        <a href="/client/profile" class="item">
            <div class="col">
                <i class="fa-solid fa-user"></i>
            <strong>Tôi</strong>
            </div>
        </a>
    </div>
</template>
<script >
export default {

}
</script>
<style scoped>

.appBottomMenu {
    background: radial-gradient(circle at center, #1e90ff, #0066cc);
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    color: white;
}

.appBottomMenu .item {
    flex: 1;
    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 12px;
    transition: background 0.3s, transform 0.3s;
    border-radius: 10px;
    padding: 5px 0;
}

.appBottomMenu .item .col i {
    font-size: 20px;
    margin-bottom: 5px;
    display: block;
}

.appBottomMenu .item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.appBottomMenu .item.active {
    background: rgba(61, 140, 231, 0.3);
    color: white !important;
}
</style>
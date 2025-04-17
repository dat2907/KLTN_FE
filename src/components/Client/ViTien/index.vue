<template>
<div class="container mt-5">

<!-- SỐ DƯ -->
    <div class="text-center mb-4">
    <h5 class="text-muted">Số dư hiện tại</h5>
    <h1 class="text-success fw-bold display-3">1.250.000đ</h1>
    </div>

    <!-- CÁC NÚT CHỨC NĂNG -->
    <div class="d-flex justify-content-center gap-3 flex-wrap">
            <router-link to="/Client/Thanh-toan">
                <button class="btn btn-outline-primary px-4 py-2 fs-5">
                    💰 Nạp tiền
                </button>
            </router-link>
            <router-link to="/Client/lich-su-giao-dich">
                <button class="btn btn-outline-secondary px-4 py-2 fs-5">
                📄 Xem lịch sử
                </button>
            </router-link>
            <router-link to="/Client/rut-tien">
                <button class="btn btn-outline-danger px-4 py-2 fs-5">
                💸 Rút tiền
                </button>
            </router-link>
    </div>

</div>
</template>
<script>
import axios from 'axios';
export default {
   
};

</script>

<style></style>


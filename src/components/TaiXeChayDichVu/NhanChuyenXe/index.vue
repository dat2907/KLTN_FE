<template>
    <div class="container mt-4">

    <!-- THÔNG TIN CHUYẾN ĐI -->
    <div class="card mb-4">
    <div class="card-header bg-info text-white">
        <h5 class="mb-0">Thông Tin Chuyến Đi</h5>
    </div>
    <div class="card-body">
        <p><strong>Điểm đón:</strong> 123 Lê Duẩn, Đà Nẵng</p>
        <p><strong>Điểm đến:</strong> 456 Nguyễn Văn Linh, Đà Nẵng</p>
        <p><strong>Khoảng cách đến khách hàng:</strong> 1.2 km</p>
        <p><strong>Thời gian tài xế đến:</strong> 5 phút</p>
        <p><strong>Giá cước ước tính:</strong> 45.000đ</p>
    </div>
    </div>

    <!-- BẢN ĐỒ REALTIME -->
    <div class="card mb-4">
    <div class="card-header bg-success text-white">
        <h5 class="mb-0">Bản Đồ Realtime</h5>
    </div>
    <div class="card-body p-0" style="height: 300px;">
        <!-- Giả lập Google Maps -->
        <div id="map" style="width: 100%; height: 100%; background: #ddd; display: flex; align-items: center; justify-content: center;">
        <span class="text-muted">[ Google Maps hiển thị ở đây ]</span>
        </div>
    </div>
    </div>

    <!-- NÚT CẬP NHẬT TRẠNG THÁI -->
    <div class="text-center mb-5">
    <button class="btn btn-outline-warning me-2">Đã đến nơi</button>
    <button class="btn btn-outline-primary me-2">Bắt đầu</button>
    <button class="btn btn-outline-success">Kết thúc</button>
    </div>

    </div>
</template>

<script>
export default {
    
};
</script>

<style>

</style>


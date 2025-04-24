<template>
    <div class="container mt-4">

    <!-- THÔNG TIN CHUYẾN ĐI -->
    <div class="card mb-4">
    <div class="card-header text-white">
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
    <div class="card-header text-white">
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
    <button class="btn-dadennoi me-2">Đã đến nơi</button>
    <button class="btn-batdau me-2">Bắt đầu</button>
    <button class="btn-ketthuc">Kết thúc</button>
    </div>

    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
    .container {
    max-width: 800px;
    margin: 0 auto;
}

/* Card tổng thể */
.card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Header của từng card */
.card-header {
    font-weight: 600;
    padding: 1rem 1.5rem;
    font-size: 18px;
    background: radial-gradient(circle at center, #1e90ff, #0066cc) !important;
    color: white;
    font-weight: 600;
    text-align: center;
    border-bottom: none;
    color: #f8f9fa;
}

/* Body của card */
.card-body {
    padding: 1.5rem;
    background-color: #f8f9fa;
    font-size: 16px;
}

/* Google Maps giả lập */
#map {
    border-radius: 0 0 15px 15px;
    font-size: 16px;
    font-style: italic;
}

/* Nút trạng thái */
.text-center button {
    min-width: 150px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 30px;
    transition: all 0.3s ease;
}


.text-center button {
    min-width: 160px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border: none;
}

.text-center .btn-dadennoi {
    background-color: #fff3cd;
    color: #856404;
}

.text-center .btn-batdau {
    background-color: #cce5ff;
    color: #004085;
}

.text-center .btn-ketthuc {
    background-color: #d4edda;
    color: #155724;
}
.text-center .btn-dadennoi:hover {
    background-color: #ffc107;
    color: white;
}

.text-center .btn-batdau:hover {
    background-color: #1f77fc;
    color: white;
}

.text-center .btn-ketthuc:hover {
    background-color: #198754;
    color: white;
}

</style>


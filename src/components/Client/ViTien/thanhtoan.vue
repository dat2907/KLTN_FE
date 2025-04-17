<template>
<div class="container mt-5">

<!-- Thông tin tài khoản -->
    <div class="text-center mb-4">
    <h5 class="text-muted">Tài khoản</h5>
    <h3 class="fw-bold">Nguyễn Văn A</h3>
    <p class="fs-5 text-success">Số dư: 1.250.000đ</p>
    </div>

    <!-- Phương thức thanh toán -->
    <div class="mb-4">
    <h5 class="mb-3">Chọn phương thức thanh toán</h5>
    <div class="d-flex flex-wrap gap-3">
        <button class="btn btn-outline-primary">ZaloPay</button>
        <button class="btn btn-outline-danger">MoMo</button>
        <button class="btn btn-outline-success">Ngân hàng nội địa</button>
    </div>
    </div>

    <!-- Chọn số tiền -->
    <div class="mb-4">
    <h5 class="mb-3">Chọn số tiền muốn nạp</h5>
    <div class="d-flex flex-wrap gap-3">
        <button class="btn btn-outline-secondary">50.000đ</button>
        <button class="btn btn-outline-secondary">200.000đ</button>
        <button class="btn btn-outline-secondary">300.000đ</button>
        <button class="btn btn-outline-secondary">500.000đ</button>
        <button class="btn btn-outline-secondary">1.000.000đ</button>
        <button class="btn btn-outline-secondary">2.000.000đ</button>
    </div>
    </div>

    <!-- Nhập số tiền khác -->
    <div class="mb-4">
    <label class="form-label">Hoặc nhập số tiền khác:</label>
    <input type="number" class="form-control" placeholder="Nhập số tiền muốn nạp">
    </div>

    <!-- Nút xác nhận -->
    <div class="text-center">
    <button class="btn btn-primary px-5 py-2 fs-5">Nạp Tiền</button>
    </div>

</div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
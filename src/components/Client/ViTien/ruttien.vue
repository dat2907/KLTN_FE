<template>
<div class="container">
        <h2 class="mb-4">Rút Tiền</h2>

        <!-- Thông tin tài khoản -->
        <div class="account-info">
        <h4>Thông tin tài khoản</h4>
        <p><strong>Họ tên:</strong> Nguyễn Văn A</p>
        <p><strong>Số dư hiện tại:</strong> 5,000,000 VND</p>
        </div>

        <!-- Form rút tiền -->
        <div class="withdrawal-form mt-4">
        <div class="mb-3">
            <label for="withdrawAmount" class="form-label">Số tiền cần rút</label>
            <input type="number" class="form-control" id="withdrawAmount" placeholder="Nhập số tiền">
        </div>

        <div class="mb-3">
            <label for="bankAccount" class="form-label">Số tài khoản ngân hàng</label>
            <input type="text" class="form-control" id="bankAccount" placeholder="Nhập số tài khoản">
        </div>

        <button class="btn btn-success">Rút Tiền</button>

        <div class="spinner-border text-primary mt-3" role="status" style="display: none;">
            <span class="visually-hidden">Đang xử lý...</span>
        </div>

        <!-- Thông báo lỗi -->
        <div class="alert alert-danger mt-3" style="display: none;">
            Số tiền rút vượt quá số dư hiện tại.
        </div>

        <!-- Thông báo thành công -->
        <div class="alert alert-success mt-3" style="display: none;">
            Rút tiền thành công! Bạn đã rút 1,000,000 VND.
        </div>
        </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
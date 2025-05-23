<template>
    <div class="container mt-5">
        <!-- SỐ DƯ -->
        <div class="text-center mb-4">
            <h3 class="mb-3">Số Dư Hiện Tại</h3>
            <h1 class="text-success fw-bold display-4">1.250.000đ</h1>
        </div>

        <!-- LỊCH SỬ GIAO DỊCH -->
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Lịch Sử Giao Dịch</h3>
            </div>
            <div class="card-body p-0">
                <table class="table table-striped mb-0 text-center">
                    <thead class="table-light">
                        <tr>
                            <th>Ngày giờ</th>
                            <th>Loại giao dịch</th>
                            <th>Số tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12/04/2025 10:20</td>
                            <td>Nhận tiền chuyến đi</td>
                            <td class="text-success">+150.000đ</td>
                        </tr>
                        <tr>
                            <td>11/04/2025 17:45</td>
                            <td>Thanh toán phí dịch vụ</td>
                            <td class="text-danger">-10.000đ</td>
                        </tr>
                        <tr>
                            <td>10/04/2025 08:30</td>
                            <td>Rút tiền về ngân hàng</td>
                            <td class="text-danger">-500.000đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- FORM RÚT TIỀN -->
        <div class="card mb-4">
            <div class="card-header bg-primary">
                <h3 class="mb-0">Rút Tiền Về Ngân Hàng</h3>
            </div>
            <div class="card-body p-3">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Số tiền muốn rút</label>
                        <input type="number" class="form-control" placeholder="Nhập số tiền...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngân hàng</label>
                        <select class="form-select">
                            <option>-- Chọn ngân hàng --</option>
                            <option>Vietcombank</option>
                            <option>MB Bank</option>
                            <option>Techcombank</option>
                            <option>VPBank</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Số tài khoản</label>
                        <input type="text" class="form-control" placeholder="Nhập số tài khoản...">
                    </div>
                    <button type="submit" class="btn w-100">Rút tiền</button>
                </form>
            </div>
        </div>

        <!-- FORM LIÊN KẾT TÀI KHOẢN -->
        <div class="card mb-5">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Liên Kết Tài Khoản Ngân Hàng</h3>
            </div>
            <div class="card-body p-3">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Tên ngân hàng</label>
                        <select class="form-select">
                            <option>-- Chọn ngân hàng --</option>
                            <option>Vietcombank</option>
                            <option>MB Bank</option>
                            <option>Techcombank</option>
                            <option>ACB</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Số tài khoản</label>
                        <input type="text" class="form-control" placeholder="Nhập số tài khoản...">
                    </div>
                    <button type="submit" class="btn w-100">Liên kết</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
.btn{
    background-color: #007bff;
    color: #f8f9fa;
    font-weight: bold;
    font-size: 0.9rem;
}
.btn:hover{
    background-color: #0570e2 !important;
    color: #f8f9fa !important;
}
.bg-primary{
    background-color: #007bff !important;
    
}
/* input{
    font-size: 0.7rem;
} */
</style>

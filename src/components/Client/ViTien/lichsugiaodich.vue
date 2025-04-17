<template>
   <div class="container mt-5">
    <h2 class="mb-4">Lịch sử Nạp Tiền vào Ví</h2>

    <!-- Thông tin ví khách hàng -->
    <div class="row mb-4">
        <div class="col-md-12">
            <div class="alert alert-info" role="alert">
                <strong>Số dư ví hiện tại:</strong> 3,000,000 VND
            </div>
        </div>
    </div>

    <!-- Bộ lọc và tìm kiếm -->
    <div class="row mb-4">
        <div class="col-md-3">
            <label for="filter-date" class="form-label">Chọn khoảng thời gian</label>
            <input type="date" id="filter-date" class="form-control">
        </div>
        <div class="col-md-3">
            <label for="search" class="form-label">Tìm kiếm theo ID giao dịch</label>
            <input type="text" id="search" class="form-control" placeholder="Nhập ID giao dịch">
        </div>
    </div>

    <!-- Bảng hiển thị lịch sử nạp tiền -->
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID Giao dịch</th>
                <th>Ngày</th>
                <th>Số tiền nạp</th>
                <th>Hình thức nạp</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>2025-04-12</td>
                <td>1,000,000 VND</td>
                <td>Chuyển khoản ngân hàng</td>
                <td><span class="badge bg-success">Hoàn thành</span></td>
                <td><button class="btn btn-info btn-sm">Chi tiết</button></td>
            </tr>
            <tr>
                <td>002</td>
                <td>2025-04-10</td>
                <td>500,000 VND</td>
                <td>Thẻ tín dụng</td>
                <td><span class="badge bg-success">Hoàn thành</span></td>
                <td><button class="btn btn-info btn-sm">Chi tiết</button></td>
            </tr>
            <tr>
                <td>003</td>
                <td>2025-04-08</td>
                <td>2,000,000 VND</td>
                <td>Ví điện tử</td>
                <td><span class="badge bg-warning">Đang xử lý</span></td>
                <td><button class="btn btn-info btn-sm">Chi tiết</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
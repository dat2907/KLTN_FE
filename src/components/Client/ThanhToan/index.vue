<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center text-nowrap">
                                    <img src="" alt="">
                                </th>
                                <th class="text-center text-nowrap">#</th>
                                <th class="text-center text-nowrap">Hình Ảnh</th>
                                <th class="text-center text-nowrap">Tên Tài Xế</th>
                                <th class="text-center text-nowrap">Loại Xe</th>
                                <th class="text-center text-nowrap">Biển Số</th>
                                <th class="text-center text-nowrap">Địa Chỉ Đón</th>
                                <th class="text-center text-nowrap">Địa Chỉ Đến</th>
                                <th class="text-center text-nowrap">Thời Gian Đặt</th>
                                <th class="text-center text-nowrap">Thành Tiền</th>
                                <th class="text-center text-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle text-center">
                                    <input class="form-check-input" type="checkbox" aria-label="...">
                                </td>
                                <td class="align-middle text-center">
                                    <h6 class="mb-0 font-14">1</h6>
                                </td>
                                <td class="text-center align-middle">
                                    <img src="" style="width: 50px; height: auto;" alt="">
                                </td>
                                <td class="align-middle text-center">Tên Tài Xế</td>
                                <td class="align-middle text-center">Loại Xe</td>
                                <td class="align-middle text-center">Biển Số</td>
                                <td class="align-middle text-center">Địa Chỉ Đón</td>
                                <td class="align-middle text-center">Địa Chỉ Đến</td>
                                <td class="align-middle text-center">Thời Gian Đặt</td>
                                <td class="align-middle text-center">Thành Tiền</td>
                                <td class="text-center align-middle">
                                    <button class="btn"><i class="fa-solid fa-trash text-danger"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <div class="row mt-3">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Mã giảm giá</h5>
                                <div class="d-flex flex-row align-items-center text-nowrap">
                                    <label class="me-2"><i
                                            class="fa-xl fa-solid fa-ticket text-danger me-2"></i><b>Voucher:</b></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Nhập mã giảm giá">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Áp
                                            Dụng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Chọn phương thức thanh toán</h5>
                                <select class="form-select" aria-label="Chọn phương thức thanh toán">
                                    <option value="0">Thanh Toán Online</option>
                                    <option value="1">Thanh Toán COD</option>
                                    <option value="2">Thanh Toán Khi Đến Điạ chỉ</option>
                                    <option value="3">Thanh Toán Bằng Momo</option>
                                    <option value="4">Thanh Toán Bằng ZaloPay</option>
                                    <option value="5">Thanh Toán Bằng Thẻ Tín Dụng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row mt-4">
                    <div class="col-6">
                        <div class="ms-auto">
                            <h5 class="card-title">Chi tiết thanh toán</h5>
                            <p><i class="fa-solid fa-money-bill fa-xl me-2"></i><b>Tổng Tiền Hóa Đơn:</b> </p>
                            <p><i class="fa-solid fa-money-bill-trend-up fa-xl me-2"></i><b>Số Tiền Giảm:</b>
                            </p>
                            <p><i class="fa-solid fa-money-bill-transfer me-2"></i><b>Tổng tiền thanh toán:</b> </p>
                        </div>
                    </div>
                    <hr>
                    <div class="text-center mt-3">
                        <button class="btn btn-info btn-lg w-50">
                            <i class="bi bi-check-circle"></i> Xác nhận & Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>
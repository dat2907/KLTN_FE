<template>
    <div class="container p-3 pt-4">
        <div class="row">
            <div class="card mb-3">
                <div class="card-body p-1 pt-3">
                    <!-- <div class="table-responsive">
                        <table class="table table-bordered ">
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
                    </div> -->

                    <div class="row b-3">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header text">
                                    <h3 class="m-0">Thông tin tài xế</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-4">
                                            <img style="width: 150px; height: 150px;" class="ava-img" />
                                            <!-- <img v-bind:src="profile.hinh_anh" style="width: 140px; height: 140px;" class="ava-img mb-2" /> -->

                                        </div>
                                        <div class="col-7 align-content-around flex-wrap">
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Tên Tài Xế</h4>
                                                <p class="m-0">tên</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Loại Xe</h4>
                                                <p class="m-0">Loại Xe</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Biển Số</h4>
                                                <p class="m-0">Biển Số</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Thời Gian Đặt</h4>
                                                <p class="m-0">Thời Gian Đặt</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-2">
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Địa Chỉ Đón</h4>
                                                <p class="m-0">Địa Chỉ ĐónĐịa Chỉ Đón</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Địa Chỉ Đến</h4>
                                                <p class="m-0">Địa Chỉ Đến</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Thành Tiền</h4>
                                                <h4 class="m-0">Thành Tiền</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-6 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Mã giảm giá</h5>
                                    <div class="d-flex flex-row align-items-center text-nowrap">
                                        <label class="me-2"><i
                                                class="fa-xl fa-solid fa-ticket text-danger me-1"></i><b>Voucher:</b></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Nhập mã giảm giá"
                                                style="height: 38px;">
                                            <button class="btn" type="button" id="button-addon2"
                                                style="height: 38px;">Áp Dụng</button>
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
                        <div class="col-12">
                            <div class="ms-auto">
                                <h5 class="card-title">Chi tiết thanh toán</h5>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill fa-xl me-2"></i><b>Tổng Tiền Hóa Đơn:</b> </p>
                                    <p class="m-0 ">Thành Tiền</p>
                                </div>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill-trend-up fa-xl me-2"></i><b>Số Tiền Giảm:</b>
                                    </p>
                                    <p class="m-0 ">Thành Tiền</p>
                                </div>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill-transfer me-2"></i><b>Tổng tiền thanh toán:</b>
                                    </p>
                                    <p class="m-0 ">Thành Tiền</p>
                                </div>

                            </div>
                        </div>
                        <hr>
                        <div class="col-12 d-flex justify-content-center mb-2">

                            <button class="btn btn-primary btn-lg w-50 text-nowrap">
                                <i class="bi bi-check-circle"></i> Xác nhận & Thanh toán
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            isThanhToan: false,
        }
    },
    mounted() {
        this.checkThanhToanStatus();
    },
    methods: {
        checkThanhToanStatus() {
            const token = localStorage.getItem('token_khach_hang');
            if (token) {
                this.isThanhToan = true;
                var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                this.$toast.success(thong_bao);
                this.$router.push('/client/theo-doi-chuyen-di');

            } else {
                this.isThanhToan = false;
                var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                    this.$toast.error(thong_bao);
            }
        },
    }
}
</script>
<style>
p {
    margin: 0;
}

.btn {
    background-color: #007bff;
    color: #f8f9fa;
    font-weight: bold;
}

.btn:hover {
    background-color: #0570e2 !important;
    color: #f8f9fa !important;
}

.form-select {
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
}

.form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
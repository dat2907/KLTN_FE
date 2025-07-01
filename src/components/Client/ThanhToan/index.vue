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

                    <div class="row b-3" v-if="chuyenXe">
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
                                                <p class="m-0">{{ chuyenXe.TaiXe ? chuyenXe.TaiXe : 'Chưa có tài xế' }}</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Loại Xe</h4>
                                                <p class="m-0">{{ getLoaiXe(chuyenXe.LoaiXe) }}</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Biển Số</h4>
                                                <p class="m-0">{{ chuyenXe.BienSo ? chuyenXe.BienSo : 'Chưa có biển số' }}</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Thời Gian Đặt</h4>
                                                <p class="m-0">{{ formatDateTime(chuyenXe.created_at) }}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-2">
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Địa Chỉ Đón</h4>
                                                <p class="m-0">{{ getDiaChi(chuyenXe.DiaDiemDon) }}</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Địa Chỉ Đến</h4>
                                                <p class="m-0">{{ getDiaChi(chuyenXe.DiaDiemDen) }}</p>
                                            </div>
                                            <div class="pb-2 d-flex align-items-center justify-content-between">
                                                <h4 class="m-0">Thành Tiền</h4>
                                                <h4 class="m-0">{{ formatCurrency(chuyenXe.GiaTien) }}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <!-- <div class="col-lg-6 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Mã giảm giá</h5>
                                    <div class="d-flex flex-row align-items-center text-nowrap">
                                        <label class="me-2"><i
                                                class="fa-xl fa-solid fa-ticket text-danger me-1"></i><b>Voucher:</b></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Nhập mã giảm giá"
                                                style="height: 38px;" v-model="voucherCode">
                                            <button class="btn" type="button" id="button-addon2"
                                                style="height: 38px;">Áp Dụng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Chọn phương thức thanh toán</h5>
                                    <select class="form-select" aria-label="Chọn phương thức thanh toán" v-model="phuongThucThanhToan">
                                        <option value="0">Thanh Toán Online</option>
                                        <option value="1">Thanh Toán Tiền Mặt</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Hiển thị mã QR khi thanh toán online -->
                    <div class="row mt-3" v-if="phuongThucThanhToan === '0' && chuyenXe">
                        <div class="col-lg-6 mx-auto">
                            <div class="card">
                                <div class="card-header text-center">
                                    <h4 class="m-0">Quét mã QR để thanh toán</h4>
                                </div>
                                <div class="card-body text-center">
                                    <div class="qr-container">
                                        <img :src="getQRCode()" alt="Mã QR thanh toán" class="img-fluid qr-image">
                                    </div>
                                    <div class="mt-3">
                                        <p>Số tiền: <strong>{{ formatCurrency(tongTienThanhToan) }}</strong></p>
                                        <p class="text-danger">Vui lòng quét mã QR để hoàn tất thanh toán</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr>
                    <div class="row mt-4" v-if="chuyenXe">
                        <div class="col-12">
                            <div class="ms-auto">
                                <h5 class="card-title">Chi tiết thanh toán</h5>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill fa-xl me-2"></i><b>Tổng Tiền Hóa Đơn:</b> </p>
                                    <p class="m-0">{{ formatCurrency(chuyenXe.GiaTien) }}</p>
                                </div>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill-trend-up fa-xl me-2"></i><b>Số Tiền Giảm:</b>
                                    </p>
                                    <p class="m-0">{{ formatCurrency(giamGia) }}</p>
                                </div>
                                <div class="pb-2 d-flex align-items-center justify-content-between">
                                    <p><i class="fa-solid fa-money-bill-transfer me-2"></i><b>Tổng tiền thanh toán:</b>
                                    </p>
                                    <p class="m-0">{{ formatCurrency(tongTienThanhToan) }}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="col-12 d-flex justify-content-center mb-2">
                            <button class="btn btn-primary btn-lg w-50 text-nowrap" @click="xacNhanThanhToan">
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
import axios from 'axios';
export default {
    data() {
        return {
            isThanhToan: false,
            chuyenXe: null,
            voucherCode: '',
            phuongThucThanhToan: '0',
            giamGia: 0,
        }
    },
    computed: {
        tongTienThanhToan() {
            if (!this.chuyenXe) return 0;
            return parseFloat(this.chuyenXe.GiaTien) - this.giamGia;
        }
    },
    mounted() {
        this.checkThanhToanStatus();
        this.getDataChuyenXe();
    },
    methods: {
        getDataChuyenXe() {
            axios.get(`http://127.0.0.1:8000/api/khach-hang/chuyen-xe`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token_khach_hang')}`
                }
            })
            .then(res => {
                if (res.data.status && res.data.data) {
                    this.chuyenXe = res.data.data;
                }
            })
            .catch(err => {
                console.log(err);
            });
        },
        getDiaChi(diaDiemJson) {
            try {
                const diaDiem = JSON.parse(diaDiemJson);
                return diaDiem.dia_chi;
            } catch (error) {
                return 'Không có thông tin';
            }
        },
        getLoaiXe(loaiXe) {
            const loaiXeMap = {
                1: 'Xe máy',
                2: 'Ô tô 4 chỗ',
                3: 'Ô tô 7 chỗ'
            };
            return loaiXeMap[loaiXe] || 'Không xác định';
        },
        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
            return formatter.format(value);
        },
        formatDateTime(dateTime) {
            const date = new Date(dateTime);
            return date.toLocaleString('vi-VN');
        },
        getQRCode() {
            if (!this.chuyenXe) return '';
            const paymentInfo = `CX000${this.chuyenXe.id}` ;
            return `https://img.vietqr.io/image/mbbank-191006103011-compact2.jpg?amount=${this.tongTienThanhToan}&addInfo=${paymentInfo}`;
        },
        xacNhanThanhToan() {
            axios.post('http://127.0.0.1:8000/api/khach-hang/thanh-toan', {
                id: this.chuyenXe.id,
                phuongThucThanhToan: this.phuongThucThanhToan,
                tongTienThanhToan: this.tongTienThanhToan,
                giamGia: this.giamGia
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token_khach_hang')}`
                }
            })
            .then((res) => {
                console.log(res);
                if(res.data && res.data.status) {
                    this.$toast.success('<b>Thông báo</b><span style="margin-top: 5px">Thanh toán thành công!<span>');
                    this.$router.push('/client/theo-doi-chuyen-di');
                } else {
                    this.$toast.error('<b>Thông báo</b><span style="margin-top: 5px">Thanh toán thất bại!<span>');
                }
            })
            .catch((err) => {
                console.log(err);
                this.$toast.error('<b>Thông báo</b><span style="margin-top: 5px">Đã xảy ra lỗi khi thanh toán!<span>');
            });
        },
        checkThanhToanStatus() {
            const token = localStorage.getItem('token_khach_hang');
            // if (token) {
            //     this.isThanhToan = true;
            //     var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
            //     this.$toast.success(thong_bao);
            //     this.$router.push('/client/theo-doi-chuyen-di');

            // } else {
            //     this.isThanhToan = false;
            //     var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
            //         this.$toast.error(thong_bao);
            // }
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

.qr-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

.qr-image {
    max-width: 200px;
    border: 1px solid #dee2e6;
    padding: 10px;
    background-color: white;
}
</style>
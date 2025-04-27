<template>
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="card-header">
                    <h3 class="text-center align-middle"><b>Lịch Sử Chuyến Xe</b></h3>
                </div>
            </div>
        </div>
        <!-- Lịch sử chuyến xe -->
        <div class="row mt-5" v-for="(v, k) in dsChuyenXe" :key="k">
            <div class="col-lg-4">
                <div class="card p-3 shadow border-0 rounded-4">
                    <div class="d-flex align-items-center gap-3">
                        <i class="fa-solid fa-car-side fa-3x text-primary"></i>
                        <div>
                            <p class="mb-0">Điểm đón: {{ v.DiaDiemDon }}</p>
                            <p class="mb-0">Điểm đến: {{ v.DiaDiemDen }}</p>
                            <span class="badge bg-success">Đã hoàn thành</span>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-3 w-100">Đặt lại</button>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card p-4 shadow border-0 rounded-4">
                    <div class="d-flex align-items-center gap-4">
                        <div>
                            <h4 class="mb-1 fw-bold"><strong>Tài xế: </strong>{{ v.TaiXe }}</h4>
                        </div>
                        <div class="card bg-dark text-white mt-5">
                            <img src="https://png.pngtree.com/png-vector/20220715/ourmid/pngtree-taxi-order-vehicle-rent-car-png-image_5926433.png"
                                height="400px" class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title text-white">Lịch Sử Chuyến Xe</h5>
                                <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p class="card-text">Last updated 3 mins ago</p> -->
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong>Loại xe: </strong> {{ v.LoaiXe }}</p>
                            <p><strong>Địa điểm đón: </strong> {{ v.DiaDiemDon }}</p>
                            <p><strong>Địa điểm đón: </strong>{{ v.DiaDiemDen }}</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Quãng đường: </strong>{{ v.SoKm }}</p>
                        </div>
                    </div>
                    <hr>
                    <h5 class="fw-bold">Thông tin thanh toán</h5>
                    <p><strong>Giá tiền:</strong> <span class="text-success fw-bold">{{ v.GiaTien }}</span></p>
                    <p><strong>Hình thức thanh toán:</strong> <span class="text-primary">{{ v.HinhThucThanhToan
                            }}</span></p>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            dsChuyenXe: [],
        }
    },
    mounted() {
        this.getHistory();
    },
    methods: {
        getHistory() {
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/lich-su-don-hang", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.dsChuyenXe = res.data.data;
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                });
        },
    },
}
</script>
<style></style>

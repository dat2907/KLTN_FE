<template>
<div class="class">
    <div class="container py-4">
        <div class="card shadow-lg border-0 rounded-4 mx-auto" style="max-width: 800px;">
            <div class="bg-primary text-white text-center rounded-top-4 px-0">
                <h3 class="mb-0 py-2"><i class="fa-solid fa-car-side me-2"></i>Đặt Xe</h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="row gy-4 gx-5">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-location-dot me-1"></i>Điểm
                                đón</label>
                            <input v-model="client_order.DiaDiemDon" type="text" class="form-control"
                                placeholder="Nhập điểm đón">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-location-arrow me-1"></i>Điểm
                                đến</label>
                            <input v-model="client_order.DiaDiemDen" type="text" class="form-control"
                                placeholder="Nhập điểm đến">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-calendar-days me-1"></i>Ngày &
                                Giờ đặt trước</label>
                            <input v-model="client_order.ThoiGian" type="datetime-local" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-coins me-1"></i>Giá ước
                                tính</label>
                            <input v-model="client_order.GiaTien" type="text" class="form-control"
                                placeholder="Tự động tính" disabled>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-car me-1"></i>Loại xe</label>
                            <select v-model="client_order.LoaiXe" class="form-select">
                                <option>-- Chọn loại xe --</option>
                                <option value="1">Xe máy</option>
                                <option value="2">Xe 4 chỗ</option>
                                <option value="3">Xe 7 chỗ</option>
                                <option value="4">Xe 4 chỗ LUXURY</option>
                                <option value="5">Xe 7 chỗ LUXURY</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <div class="rounded-3 overflow-hidden" style="height: 250px; background-color: #f8f9fa;">
                                <div class="d-flex justify-content-center align-items-center h-100 text-muted">
                                    <i class="fa-solid fa-map-location-dot fa-2x me-2"></i> Bản đồ sẽ hiển thị tại đây
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button v-on:click="ActionDatXe()" class="btn btn-success w-100 py-2 fw-bold">
                                <i class="fa-solid fa-paper-plane me-1"></i>Đặt xe ngay
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            client_order: {}
        }
    },
    mounted() {

    },
    methods: {
        ActionDatXe() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dat-xe', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                });
        }
    },
}
</script>
<style>
    .container {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgb(239, 86, 4);
    }

    /* Card chính */
    .card {
    border-radius: 20px;
    border: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    /* Header màu cam chủ đạo */
    .card .bg-primary {
    background: linear-gradient(135deg, rgb(255, 255, 255), rgb(243, 207, 193));
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    }

    /* Tiêu đề */
    .card .bg-primary h3 {
    font-weight: 700;
    font-size: 1.6rem;
    }

    /* Label form */
    .form-label {
    font-weight: 600;
    color: #333;
    }

    /* Input + Select */
    .form-control,
    .form-select {
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    transition: border-color 0.3s, box-shadow 0.3s;
    }

    .form-control:focus,
    .form-select:focus {
    border-color: rgb(239, 86, 4);
    box-shadow: 0 0 0 0.2rem rgba(239, 86, 4, 0.25);
    }

    /* Nút đặt xe */
    .btn-success {
    background-color: rgb(239, 86, 4);
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    transition: 0.3s;
    }

    .btn-success:hover {
    background-color: rgb(220, 76, 4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 86, 4, 0.3);
    }

    /* Bản đồ giả */
    .map-placeholder {
    background-color: #f1f3f5;
    height: 250px;
    border-radius: 12px;
    border: 1px dashed #ccc;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    }

    /* Responsive padding */
    @media (max-width: 576px) {
    .card {
        padding: 10px;
    }

    .card .bg-primary h3 {
        font-size: 1.3rem;
    }

    .btn-success {
        font-size: 0.95rem;
    }
    }
    body {
    background-color: rgb(239, 86, 4); /* Hoặc màu bạn muốn */
    min-height: 100vh;
    }
</style>
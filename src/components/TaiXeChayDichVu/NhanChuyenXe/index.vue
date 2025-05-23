<template>
    <div class="container mt-4">

        <!-- THÔNG TIN CHUYẾN ĐI -->
        <div class="card shadow-lg rounded-4 mb-4">
            <div class="card-header bg-primary text-white rounded-top-4">
                <h3 class="mb-0 text-center text-light">Thông Tin Chuyến Đi</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item p-2">
                        <label class="fw-bold mb-1">Điểm đón:</label>
                        <p class="mb-0">123 Lê Duẩn, Đà Nẵng</p>
                    </li>
                    <li class="list-group-item p-2">
                        <label class="fw-bold mb-1">Điểm đến:</label>
                        <p class="mb-0">456 Nguyễn Văn Linh, Đà Nẵng</p>
                    </li>
                    <li class="list-group-item p-2">
                        <label class="fw-bold mb-1">Khoảng cách đến khách hàng:</label>
                        <p class="mb-0">1.2 km</p>
                    </li>
                    <li class="list-group-item p-2">
                        <label class="fw-bold mb-1">Thời gian tài xế đến:</label>
                        <p class="mb-0">5 phút</p>
                    </li>
                    <li class="list-group-item p-2">
                        <label class="fw-bold mb-1">Giá cước ước tính:</label>
                        <p class="mb-0">45.000đ</p>
                    </li>
                </ul>
            </div>
        </div>



        <!-- BẢN ĐỒ REALTIME -->
        <div class="card mb-4">
            <div class="card-header text-white">
                <h3 class="mb-0 text-center text-light">Bản Đồ Realtime</h3>
            </div>
            <div class="card-body p-0" style="height: 300px;">
                <!-- Giả lập Google Maps -->
                <div id="map"
                    style="width: 100%; height: 100%; background: #ddd; display: flex; align-items: center; justify-content: center;">
                    <span class="text-muted">[ Google Maps hiển thị ở đây ]</span>
                </div>
            </div>
        </div>

        <!-- NÚT CẬP NHẬT TRẠNG THÁI -->
        <div class="text-center mb-5">
            <button class="btn-dadennoi me-2">Nhận chuyến xe</button>
            <button class="btn-batdau me-2">Từ chối</button>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        nhanChuyenXe() {
            axios
                .post("http://127.0.0.1:8000/api/tai-xe/nhan-chuyen-xe", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_tai_xe")
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
    background-color: #cde4ff;
    color: #007bff;
}

.text-center .btn-batdau {
    background-color: #ffccd6;
    color: #000000;
}

.text-center .btn-ketthuc {
    background-color: #d4edda;
    color: #155724;
}

.text-center .btn-dadennoi:hover {
    background-color: #007bff;
    color: white;
}

.text-center .btn-batdau:hover {
    background-color: #fc1f44;
    color: white;
}

.text-center .btn-ketthuc:hover {
    background-color: #198754;
    color: white;
}
</style>

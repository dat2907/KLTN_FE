<template>
    <div class="history-container">
        <div class="history-card">
            <div class="history-header">
                <h3>Lịch Sử Chuyến Xe</h3>
            </div>

            <div class="history-content">
                <!-- Chuyến xe đang hiển thị -->
                <div class="order-card active" v-for="(v, k) in dsChuyenXe" :key="k">
                    <div class="pickup-dropoff">
                        <div class="car-icon">
                            <i class="fa-solid fa-car"></i>
                        </div>
                        <div class="location-details">
                            <div class="location">
                                <p>Điểm đón:</p>
                                <p class="address">{{ parseAddress(v.DiaDiemDon).dia_chi }}</p>
                            </div>
                            <div class="location">
                                <p>Điểm đến:</p>
                                <p class="address">{{ parseAddress(v.DiaDiemDen).dia_chi }}</p>
                            </div>
                            <span class="status-badge" :class="getStatusClass(v.TrangThai)">{{
                                getStatusText(v.TrangThai) }}</span>
                        </div>
                    </div>
                    <button class="btn-reorder">Đặt lại</button>
                </div>

                <!-- Chi tiết chuyến xe -->
                <div class="order-details-card" v-if="dsChuyenXe.length > 0">
                    <div class="driver-section">
                        <div class="driver-info">
                            <h4>Tài xế:</h4>
                            <p>{{ dsChuyenXe[0].TaiXe || 'Chưa có thông tin' }}</p>
                        </div>
                        <div class="ride-illustration">
                            <img src="https://png.pngtree.com/png-vector/20220715/ourmid/pngtree-taxi-order-vehicle-rent-car-png-image_5926433.png"
                                alt="Minh họa đặt xe">
                            <div class="illustration-overlay">
                                <h5>Lịch Sử Chuyến Xe</h5>
                            </div>
                        </div>
                    </div>

                    <div class="ride-details" v-if="dsChuyenXe.length > 0">
                        <div class="detail-row">
                            <div class="detail-item">
                                <p class="label">Loại xe:</p>
                                <p class="value">{{ getVehicleType(dsChuyenXe[0].LoaiXe) }}</p>
                            </div>
                            <div class="detail-item">
                                <p class="label">Quãng đường:</p>
                                <p class="value">{{ dsChuyenXe[0].SoKm }} km</p>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item full-width">
                                <p class="label">Địa điểm đón:</p>
                                <p class="value location-text">{{ parseAddress(dsChuyenXe[0].DiaDiemDon).dia_chi }}</p>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-item full-width">
                                <p class="label">Địa điểm đến:</p>
                                <p class="value location-text">{{ parseAddress(dsChuyenXe[0].DiaDiemDen).dia_chi }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="payment-info" v-if="dsChuyenXe.length > 0">
                        <h5>Thông tin thanh toán</h5>
                        <div class="payment-row">
                            <p class="label">Giá tiền:</p>
                            <p class="value price">{{ formatCurrency(dsChuyenXe[0].GiaTien) }}</p>
                        </div>
                        <div class="payment-row">
                            <p class="label">Hình thức thanh toán:</p>
                            <p class="value payment-method">{{ dsChuyenXe[0].HinhThucThanhToan || 'Tiền mặt' }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation -->
            <div class="bottom-navigation">
                <a href="#" class="nav-item">
                    <i class="fa-solid fa-home"></i>
                    <span>Trang chủ</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fa-solid fa-car"></i>
                    <span>Đặt xe</span>
                </a>
                <a href="#" class="nav-item active">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span>Lịch sử</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fa-solid fa-user"></i>
                    <span>Tôi</span>
                </a>
            </div>
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
        parseAddress(addressString) {
            try {
                return JSON.parse(addressString);
            } catch (error) {
                console.error("Lỗi khi parse địa chỉ:", error);
                return { dia_chi: "Không có thông tin" };
            }
        },
        formatCurrency(value) {
            if (!value) return "0";
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        getVehicleType(loaiXe) {
            switch (parseInt(loaiXe)) {
                case 1: return 'Xe máy';
                case 2: return 'Xe 4 chỗ';
                case 3: return 'Xe 7 chỗ';
                case 4: return 'Xe 4 chỗ LUXURY';
                case 5: return 'Xe 7 chỗ LUXURY';
                default: return 'Không xác định';
            }
        },
        getStatusText(trangThai) {
            switch (parseInt(trangThai)) {
                case 0: return 'Đang xử lý';
                case 1: return 'Đã hoàn thành';
                case 2: return 'Đã hủy';
                default: return 'Không xác định';
            }
        },
        getStatusClass(trangThai) {
            switch (parseInt(trangThai)) {
                case 0: return 'status-processing';
                case 1: return 'status-completed';
                case 2: return 'status-cancelled';
                default: return '';
            }
        }
    },
}
</script>
<style scoped>
.history-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    height: auto;
    /* margin: 30px 0; */
}

.history-container {
    max-width: 100%;
    background-color: #f8f9fa;
    min-height: 100vh;
    position: relative;
    padding: 40px 20px;
}

.history-header {
    background-color: #007bff;
    color: white;
    padding: 15px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.history-header h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
}

.history-content {
    padding: 15px;
}

.order-card {
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.pickup-dropoff {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.car-icon {
    width: 50px;
    height: 50px;
    background-color: #e6f0ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    flex-shrink: 0;
}

.car-icon i {
    color: #007bff;
    font-size: 1.5rem;
}

.location-details {
    flex: 1;
}

.location {
    margin-bottom: 8px;
}

.location p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
}

.location .address {
    color: #333;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
}

.status-badge {
    display: inline-block;
    color: white;
    font-size: 0.7rem;
    padding: 3px 8px;
    border-radius: 12px;
    margin-top: 5px;
}

.status-completed {
    background-color: #28a745;
}

.status-processing {
    background-color: #ffc107;
    color: #212529;
}

.status-cancelled {
    background-color: #dc3545;
}

.btn-reorder {
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 0;
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-reorder:hover {
    background-color: #0069d9;
}

.order-details-card {
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.driver-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.driver-info {
    margin-bottom: 15px;
}

.driver-info h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 5px 0;
}

.driver-info p {
    margin: 0;
    font-size: 0.9rem;
}

.ride-illustration {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 200px;
    margin-bottom: 15px;
    border: 1px solid #000;
}

.ride-illustration img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.illustration-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #000;
}

.illustration-overlay h5 {
    color: white;
    margin: 0;
    font-size: 1rem;
}

.ride-details {
    margin-bottom: 15px;
}

.detail-row {
    display: flex;
    margin-bottom: 10px;
}

.detail-item {
    flex: 1;
}

.full-width {
    width: 100%;
}

.label {
    font-weight: bold;
    margin: 0;
    font-size: 0.85rem;
    color: #666;
}

.value {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
}

.location-text {
    word-break: break-all;
}

.payment-info {
    border-top: 1px solid #eee;
    padding-top: 15px;
}

.payment-info h5 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 10px 0;
}

.payment-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.price {
    color: #28a745;
    font-weight: bold;
}

.payment-method {
    color: #007bff;
}

.bottom-navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    color: #666;
    text-decoration: none;
    font-size: 0.8rem;
}

.nav-item i {
    font-size: 1.2rem;
    margin-bottom: 4px;
}

.nav-item.active {
    color: #007bff;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .history-container {
        max-width: 768px;
        margin: 0 auto;
    }

    .history-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .order-card {
        width: 35%;
    }

    .order-details-card {
        width: 60%;
        margin-top: 0;
    }
}
</style>

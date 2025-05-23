<template>
    <div class="container py-4">
        <!-- Summary Cards -->
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h5 class="card-title">Tổng doanh thu</h5>
                        <h3 class="mb-0">{{ formatMoney(statistics.tong_doanh_thu) }} VNĐ</h3>
                        <small>Từ {{ formatDate(statistics.tu_ngay) }} đến {{ formatDate(statistics.den_ngay) }}</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h5 class="card-title">Số đơn hàng</h5>
                        <h3 class="mb-0">{{ statistics.so_don_hang }}</h3>
                        <small>Đơn hàng thành công</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h5 class="card-title">Khách hàng mới</h5>
                        <h3 class="mb-0">{{ statistics.khach_hang_moi }}</h3>
                        <small>Trong tháng này</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h5 class="card-title">Tài xế mới</h5>
                        <h3 class="mb-0">{{ statistics.tai_xe_moi }}</h3>
                        <small>Trong tháng này</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filter Section -->
        <div class="card shadow-lg border-0 rounded-4 mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <label class="form-label">Từ ngày</label>
                        <input type="date" class="form-control" v-model="filter.tu_ngay">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Đến ngày</label>
                        <input type="date" class="form-control" v-model="filter.den_ngay">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">&nbsp;</label>
                        <button class="btn btn-primary w-100" @click="getData()">
                            <i class="fas fa-search"></i> Xem thống kê
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Charts Section -->
        <div class="row">
            <!-- Doanh thu theo tháng -->
            <div class="col-md-6 mb-4">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title">Doanh thu theo tháng</h5>
                        <canvas ref="revenueChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- Đơn hàng theo trạng thái -->
            <div class="col-md-6 mb-4">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title">Đơn hàng theo trạng thái</h5>
                        <canvas ref="orderStatusChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- Top khách hàng -->
            <div class="col-md-6 mb-4">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title">Top khách hàng</h5>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Khách hàng</th>
                                        <th>Số đơn hàng</th>
                                        <th>Tổng chi tiêu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="customer in statistics.top_khach_hang" :key="customer.id">
                                        <td>{{ customer.ho_ten }}</td>
                                        <td>{{ customer.so_don_hang }}</td>
                                        <td>{{ formatMoney(customer.tong_chi_tieu) }} VNĐ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top tài xế -->
            <div class="col-md-6 mb-4">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title">Top tài xế</h5>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tài xế</th>
                                        <th>Số chuyến xe</th>
                                        <th>Đánh giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="driver in statistics.top_tai_xe" :key="driver.id">
                                        <td>{{ driver.ho_ten }}</td>
                                        <td>{{ driver.so_chuyen_xe }}</td>
                                        <td>{{ driver.danh_gia }}/5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js';

export default {
    data() {
        return {
            statistics: {
                tong_doanh_thu: 0,
                so_don_hang: 0,
                khach_hang_moi: 0,
                tai_xe_moi: 0,
                tu_ngay: '',
                den_ngay: '',
                top_khach_hang: [],
                top_tai_xe: []
            },
            filter: {
                tu_ngay: '',
                den_ngay: ''
            },
            revenueChart: null,
            orderStatusChart: null
        }
    },
    mounted() {
        // Set default date range to current month
        const today = new Date();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        
        this.filter.tu_ngay = firstDay.toISOString().split('T')[0];
        this.filter.den_ngay = lastDay.toISOString().split('T')[0];
        
        this.getData();
    },
    methods: {
        getData() {
            axios.get("http://127.0.0.1:8000/api/admin/thong-ke/data", {
                params: this.filter,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                }
            })
            .then((res) => {
                if (res.data.status) {
                    this.statistics = res.data.data;
                    this.initCharts();
                }
            })
        },
        initCharts() {
            // Revenue Chart
            if (this.revenueChart) {
                this.revenueChart.destroy();
            }
            const revenueCtx = this.$refs.revenueChart.getContext('2d');
            this.revenueChart = new Chart(revenueCtx, {
                type: 'line',
                data: {
                    labels: this.statistics.doanh_thu_theo_thang.map(item => item.thang),
                    datasets: [{
                        label: 'Doanh thu',
                        data: this.statistics.doanh_thu_theo_thang.map(item => item.doanh_thu),
                        borderColor: '#007bff',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });

            // Order Status Chart
            if (this.orderStatusChart) {
                this.orderStatusChart.destroy();
            }
            const orderStatusCtx = this.$refs.orderStatusChart.getContext('2d');
            this.orderStatusChart = new Chart(orderStatusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Thành công', 'Đang xử lý', 'Thất bại'],
                    datasets: [{
                        data: [
                            this.statistics.don_hang_thanh_cong,
                            this.statistics.don_hang_dang_xu_ly,
                            this.statistics.don_hang_that_bai
                        ],
                        backgroundColor: ['#28a745', '#ffc107', '#dc3545']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        },
        formatMoney(amount) {
            return new Intl.NumberFormat('vi-VN').format(amount);
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString('vi-VN');
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.bg-primary {
    background: linear-gradient(135deg, #007bff, #0056b3) !important;
}

.bg-success {
    background: linear-gradient(135deg, #28a745, #1e7e34) !important;
}

.bg-info {
    background: linear-gradient(135deg, #17a2b8, #117a8b) !important;
}

.bg-warning {
    background: linear-gradient(135deg, #ffc107, #d39e00) !important;
}

.table th {
    font-weight: 600;
    background-color: #f8f9fa;
}

.form-control {
    border-radius: 0.375rem;
    border: 1px solid #ced4da;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
</style>
<template>
    <div class="p-3">
        <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body">
                <h4 class="card-title mb-4">Lịch Sử Nạp Rút</h4>
                
                <!-- Filter Section -->
                <div class="row mb-4">
                    <div class="col-md-3">
                        <select class="form-select" v-model="filter.loai_giao_dich">
                            <option value="">Tất cả giao dịch</option>
                            <option value="nap_tien">Nạp tiền</option>
                            <option value="rut_tien">Rút tiền</option>
                            <option value="thanh_toan">Thanh toán</option>
                            <option value="thu_thuong">Thù thưởng</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" v-model="filter.trang_thai">
                            <option value="">Tất cả trạng thái</option>
                            <option value="0">Chưa xác nhận</option>
                            <option value="1">Đã xác nhận</option>
                            <option value="2">Hoàn thành</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" v-model="filter.user_type">
                            <option value="">Tất cả đối tượng</option>
                            <option value="khach_hang">Khách hàng</option>
                            <option value="tai_xe">Tài xế</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group">
                            <input type="date" class="form-control" v-model="filter.ngay_giao_dich">
                            <button class="btn btn-primary" @click="getData()">
                                <i class="fas fa-search"></i> Tìm kiếm
                            </button>
                            <button class="btn btn-secondary" @click="resetFilter()">
                                <i class="fas fa-sync-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Table Section -->
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Đối tượng</th>
                                <th>Thông tin</th>
                                <th>Ngân hàng</th>
                                <th>Loại giao dịch</th>
                                <th>Số tiền</th>
                                <th @click="toggleSort()" style="cursor: pointer;" class="text-nowrap">
                                    Ngày giao dịch
                                    <i class="fas" :class="filter.sort_direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down'"></i>
                                </th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in list" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>
                                    <span class="badge" :class="getUserTypeClass(item.user_type)">
                                        {{ getUserTypeText(item.user_type) }}
                                    </span>
                                </td>
                                <td>
                                    <div v-if="item.ten_tai_xe">
                                        <div><strong>{{ item.ten_tai_xe }}</strong></div>
                                        <div class="text-muted small">
                                            <div><i class="fas fa-envelope me-1"></i> {{ item.email_tai_xe }}</div>
                                            <div><i class="fas fa-phone me-1"></i> {{ item.sdt_tai_xe }}</div>
                                        </div>
                                    </div>
                                    <div v-else class="text-muted small">
                                        ID: {{ item.user_id || item.taixe_id || 'N/A' }}
                                    </div>
                                </td>
                                <td>
                                    <div v-if="item.ngan_hang">
                                        <div>{{ item.ngan_hang }}</div>
                                        <div class="text-muted small">{{ item.so_tai_khoan }}</div>
                                    </div>
                                    <div v-else class="text-muted small">
                                        Không có
                                    </div>
                                </td>
                                <td>
                                    <span :class="getTransactionClass(item.loai_giao_dich)">
                                        {{ getTransactionText(item.loai_giao_dich) }}
                                    </span>
                                </td>
                                <td>{{ formatMoney(item.so_tien) }} VNĐ</td>
                                <td>{{ formatDate(item.ngay_giao_dich) }}</td>
                                <td>
                                    <span :class="getStatusClass(item.trang_thai)" class="badge rounded-pill">
                                        {{ getStatusText(item.trang_thai) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <div>
                        Hiển thị {{ pagination.from }} đến {{ pagination.to }} của {{ pagination.total }} mục
                    </div>
                    <nav>
                        <ul class="pagination">
                            <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
                                <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">
                                    Trước
                                </a>
                            </li>
                            <li v-for="page in pagination.last_page" :key="page" class="page-item"
                                :class="{ active: page === pagination.current_page }">
                                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                            </li>
                            <li class="page-item" :class="{ disabled: pagination.current_page === pagination.last_page }">
                                <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">
                                    Sau
                                </a>
                            </li>
                        </ul>
                    </nav>
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
            list: [],
            filter: {
                loai_giao_dich: '',
                trang_thai: '',
                user_type: '',
                ngay_giao_dich: new Date().toISOString().split('T')[0],
                sort_direction: 'desc'
            },
            pagination: {
                current_page: 1,
                from: 0,
                to: 0,
                total: 0,
                last_page: 1
            }
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get("http://127.0.0.1:8000/api/admin/lich-su-nap-rut/data", {
                params: {
                    ...this.filter,
                    sort_direction: this.filter.sort_direction
                },
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                }
            })
            .then((res) => {
                if (res.data.status) {
                    this.list = res.data.data;
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    this.$toast.error("Phiên đăng nhập đã hết hạn");
                } else {
                    this.$toast.error("Có lỗi xảy ra, vui lòng thử lại");
                }
            });
        },
        changePage(page) {
            if (page >= 1 && page <= this.pagination.last_page) {
                this.pagination.current_page = page;
                this.getData();
            }
        },
        formatMoney(amount) {
            return new Intl.NumberFormat('vi-VN').format(amount);
        },
        formatDate(date) {
            if (!date) return '';
            return new Date(date).toLocaleDateString('vi-VN');
        },
        getUserTypeClass(type) {
            switch (type) {
                case 'khach_hang':
                    return 'bg-info';
                case 'tai_xe':
                    return 'bg-primary';
                default:
                    return 'bg-secondary';
            }
        },
        getUserTypeText(type) {
            switch (type) {
                case 'khach_hang':
                    return 'Khách hàng';
                case 'tai_xe':
                    return 'Tài xế';
                default:
                    return 'Không xác định';
            }
        },
        getTransactionClass(type) {
            switch (type) {
                case 'nap_tien':
                    return 'text-success fw-bold';
                case 'rut_tien':
                    return 'text-danger fw-bold';
                case 'thanh_toan':
                    return 'text-primary fw-bold';
                case 'thu_thuong':
                    return 'text-warning fw-bold';
                default:
                    return 'text-muted';
            }
        },
        getTransactionText(type) {
            switch (type) {
                case 'nap_tien':
                    return 'Nạp tiền';
                case 'rut_tien':
                    return 'Rút tiền';
                case 'thanh_toan':
                    return 'Thanh toán';
                case 'thu_thuong':
                    return 'Thù thưởng';
                default:
                    return 'Không xác định';
            }
        },
        getStatusClass(status) {
            switch (parseInt(status)) {
                case 0:
                    return 'bg-warning';
                case 1:
                    return 'bg-success';
                case 2:
                    return 'bg-info';
                default:
                    return 'bg-secondary';
            }
        },
        getStatusText(status) {
            switch (parseInt(status)) {
                case 0:
                    return 'Chưa xác nhận';
                case 1:
                    return 'Đã xác nhận';
                case 2:
                    return 'Hoàn thành';
                default:
                    return 'Không xác định';
            }
        },
        toggleSort() {
            this.filter.sort_direction = this.filter.sort_direction === 'asc' ? 'desc' : 'asc';
            this.getData();
        },
        resetFilter() {
            this.filter = {
                loai_giao_dich: '',
                trang_thai: '',
                user_type: '',
                ngay_giao_dich: new Date().toISOString().split('T')[0],
                sort_direction: 'desc'
            };
            this.getData();
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.table th {
    font-weight: 600;
    background-color: #f8f9fa;
}

.badge {
    padding: 8px 12px;
}

.form-select, .form-control {
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

.table td {
    vertical-align: middle;
}
</style>
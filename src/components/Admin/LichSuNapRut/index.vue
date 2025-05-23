<template>
    <div class="container py-4">
        <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body">
                <h4 class="card-title mb-4">Lịch Sử Nạp Rút</h4>
                
                <!-- Filter Section -->
                <div class="row mb-4">
                    <div class="col-md-3">
                        <select class="form-select" v-model="filter.loai_giao_dich">
                            <option value="">Tất cả giao dịch</option>
                            <option value="nap">Nạp tiền</option>
                            <option value="rut">Rút tiền</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" v-model="filter.trang_thai">
                            <option value="">Tất cả trạng thái</option>
                            <option value="1">Thành công</option>
                            <option value="0">Đang xử lý</option>
                            <option value="-1">Thất bại</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input type="date" class="form-control" v-model="filter.ngay">
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary w-100" @click="getData()">
                            <i class="fas fa-search"></i> Tìm kiếm
                        </button>
                    </div>
                </div>

                <!-- Table Section -->
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Khách hàng</th>
                                <th>Loại giao dịch</th>
                                <th>Số tiền</th>
                                <th>Ngày giao dịch</th>
                                <th>Trạng thái</th>
                                <th>Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in list" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.ho_ten }}</td>
                                <td>
                                    <span :class="item.loai_giao_dich === 'nap' ? 'text-success' : 'text-danger'">
                                        {{ item.loai_giao_dich === 'nap' ? 'Nạp tiền' : 'Rút tiền' }}
                                    </span>
                                </td>
                                <td>{{ formatMoney(item.so_tien) }} VNĐ</td>
                                <td>{{ formatDate(item.created_at) }}</td>
                                <td>
                                    <span :class="getStatusClass(item.trang_thai)">
                                        {{ getStatusText(item.trang_thai) }}
                                    </span>
                                </td>
                                <td>{{ item.ghi_chu }}</td>
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
                ngay: ''
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
                    page: this.pagination.current_page,
                    ...this.filter
                },
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                }
            })
            .then((res) => {
                if (res.data.status) {
                    this.list = res.data.data.data;
                    this.pagination = {
                        current_page: res.data.data.current_page,
                        from: res.data.data.from,
                        to: res.data.data.to,
                        total: res.data.data.total,
                        last_page: res.data.data.last_page
                    };
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    this.$toast.error("Phiên đăng nhập đã hết hạn");
                    // this.$router.push('/admin/dang-nhap');
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
            return new Date(date).toLocaleDateString('vi-VN');
        },
        getStatusClass(status) {
            switch (parseInt(status)) {
                case 1:
                    return 'text-success';
                case 0:
                    return 'text-warning';
                case -1:
                    return 'text-danger';
                default:
                    return '';
            }
        },
        getStatusText(status) {
            switch (parseInt(status)) {
                case 1:
                    return 'Thành công';
                case 0:
                    return 'Đang xử lý';
                case -1:
                    return 'Thất bại';
                default:
                    return 'Không xác định';
            }
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

.pagination {
    margin-bottom: 0;
}

.page-link {
    color: #007bff;
    border: 1px solid #dee2e6;
}

.page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
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
</style>
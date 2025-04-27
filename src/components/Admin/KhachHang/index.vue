<template>

    <div class="container mt-2">
        <div class="row">
            <div class="card rounded-4">
                <div
                    class="position-absolute top-50 start-0 translate-middle-y fw-bold fs-5 bg-opacity-75 p-3 rounded-end ms-3">
                    <h1><i class="fa-solid fa-clock-rotate-left text-white"></i></h1>
                    <h1 class="text-white">QUẢN LÝ THÔNG TIN KHÁCH HÀNG</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header custom-header">
                        <h3><i class="fa-solid fa-users me-2"></i><b>Thông tin khách hàng</b></h3>
                    </div>


                    <div class="card-body">
                        <div class="search-bar-wrapper mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-white border-end-0"><i class="bx bx-search"></i></span>
                                <input type="text" class="form-control border-start-0"
                                    placeholder="Tìm kiếm khách hàng...">
                                <button class="btn " type="button"></button>
                            </div>
                        </div>
                        <table class="table table-bordered table-hover mb-1">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center">STT</th>
                                    <th class="align-middle text-center">Họ và tên</th>
                                    <th class="align-middle text-center">Số điện thoại</th>
                                    <th class="align-middle text-center">Email</th>
                                    <th class="align-middle text-center">Ví Tiền</th>
                                    <th class="align-middle text-center">Trạng thái</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list" :key="index">
                                    <tr>
                                        <td class="align-middle text-center">{{ index + 1 }}</td>
                                        <td class="align-middle text-center">{{ value.ho_ten }}</td>
                                        <td class="align-middle text-center">{{ value.so_dien_thoai }}</td>
                                        <td class="align-middle text-center">{{ value.email }}</td>
                                        <td class="align-middle text-center">{{ value.vi_tien }}</td>
                                        <td class="align-middle text-center">
                                            <div class="d-flex justify-content-center gap-2">
                                                <button v-if="value.trang_thai"
                                                    v-on:click="actionDoiTrangThaiTaiKhoan(value)"
                                                    class="btn btn-success px-2 py-1 rounded-pill shadow-sm fw-bold"
                                                    style="background: linear-gradient(135deg, #28a745, #218838); 
                                            border: none; 
                                            transition: 0.3s;">
                                                    <i class="fas fa-play-circle me-1"></i> Đang hoạt động
                                                </button>
                                                <button v-else v-on:click="actionDoiTrangThaiTaiKhoan(value)"
                                                    class="btn btn-danger px-4 py-2 rounded-pill shadow-sm fw-bold"
                                                    style="background: linear-gradient(135deg, #dc3545, #c82333); 
                                            border: none; 
                                            transition: 0.3s;">
                                                    <i class="fas fa-pause-circle me-1"></i> Tạm Ngừng
                                                </button>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="d-flex justify-content-center gap-2">

                                                <button v-on:click="Object.assign(edit_khach_hang, value)"
                                                    class="btn btn-primary px-2 py-1 rounded-pill shadow-sm fw-bold"
                                                    data-bs-toggle="modal" data-bs-target="#Capnhatkhachhang">
                                                    <i class="fa-solid fa-pen-to-square me-1"></i> Cập nhật
                                                </button>
                                                <button v-on:click="Object.assign(delete_khach_hang, value)"
                                                    class="btn btn-danger px-4 py-2 rounded-pill shadow-sm fw-bold"
                                                    data-bs-toggle="modal" data-bs-target="#xoaKhachhang">
                                                    <i class="fa-solid fa-trash me-1"></i> Xóa
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
        <!-- Modal Capnhatkhachhang -->
        <div class="modal fade" id="Capnhatkhachhang" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Cập nhật thông tin Khách Hàng</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12 mb-2">
                            <label class="form-label">Họ và Tên</label>
                            <input v-model="edit_khach_hang.ho_ten" type="text" class="form-control">
                        </div>
                        <div class="col-md-12 mb-2">
                            <label class="form-label">Số Điện Thoại</label>
                            <input v-model="edit_khach_hang.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="col-md-12 mb-2">
                            <label class="form-label">Email</label>
                            <input v-model="edit_khach_hang.email" type="email" class="form-control">
                        </div>
                        <div class="col-md-12 mb-2">
                            <label class="form-label">Số Điện Thoại</label>
                            <input v-model="edit_khach_hang.vi_tien" type="text" class="form-control">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="actionCapNhatTaiKhoan()" type="button" class="btn btn-primary">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal xóa khach hang -->
        <div class="modal fade" id="xoaKhachhang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                    <div class="text-white">Bạn Có chắc chắn xóa tài khoản <b>{{
                                        delete_khach_hang.ho_va_ten
                                            }}</b> này không!</div>
                                </div>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="actionXoaTaiKhoan()" type="button" class="btn btn-danger"
                            data-bs-dismiss="modal">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal Thêm mới khách hàng -->
        <div class="modal fade" id="themmoikhachhang" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Thêm mới Khách Hàng</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label><b>Họ và tên</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập họ và tên">
                        <label><b>Số điện thoại</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Số điện thoại">
                        <label><b>Email</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Email">
                        <label><b>Tên tài khoản</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Tên tài khoản">
                        <label><b>Mật khẩu</b></label>
                        <input type="text" class="form-control" placeholder="Nhập Mật khẩu">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Thêm thông tin</button>
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
            list: [],
            edit_khach_hang: {},
            delete_khach_hang: {},
        }
    },
    mounted() {
        this.loadDataKhachHang();
    },
    methods: {
        loadDataKhachHang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                })
        },


        actionDoiTrangThaiTaiKhoan(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/doi-trang-thai', value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataKhachHang();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        actionCapNhatTaiKhoan() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/update', this.edit_khach_hang, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataKhachHang();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        actionXoaTaiKhoan() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/delete', this.delete_khach_hang, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataKhachHang();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
    },
}
</script>
<style>
.custom-header {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: white;
    text-align: center;
    border-radius: 1rem 1rem 0 0;
    padding: 1rem;
    font-size: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-bar-wrapper .input-group {
    max-width: 500px;
    margin: auto;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.search-bar-wrapper .form-control {
    border: none;
    box-shadow: none;
}

.search-bar-wrapper .input-group-text {
    background-color: white;
    border: none;
}
</style>
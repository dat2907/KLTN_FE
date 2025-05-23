<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center align-middle">Danh Sách Đơn Đặt Xe<b></b></h3>
                    </div>
                    <div class="card-body">
                        <div class="input-group mt-3 w-100 mb-1">
                            <input type="text" class="form-control search-control border border-1 border-secondary"
                                placeholder="Search...">
                            <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                    class="bx bx-search"></i></span>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm
                                Kiếm</button>
                        </div>
                        <div class="table table-responsive">
                            <table class="table table-bordered ">
                                <thead class="bg-info">
                                    <tr>
                                        <th class="align-middle text-center ">STT</th>
                                        <th class="align-middle text-center ">Mã Đơn</th>
                                        <th class="align-middle text-center">Tên Khách Hàng</th>
                                        <th class="align-middle text-center ">Điểm Đón</th>
                                        <th class="align-middle text-center ">Điểm Đến</th>
                                        <th class="align-middle text-center ">Giá Tiền</th>
                                        <th class="align-middle text-center">Biển số</th>
                                        <th class="align-middle text-center ">Loại Xe</th>
                                        <th class="align-middle text-center ">Số Km</th>
                                        <th class="align-middle text-center">Trạng thái</th>
                                        <th class="align-middle text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in list" :key="index">
                                        <tr>
                                            <td class="align-middle text-center">{{ index + 1 }}</td>
                                            <td class="align-middle text-center">{{ value.Ma_id }}</td>
                                            <td class="align-middle text-center">{{ value.ho_ten }}</td>
                                            <td class="align-middle text-center">{{ value.DiaDiemDon }}</td>
                                            <td class="align-middle text-center">{{ value.DiaDiemDen }}</td>
                                            <td class="align-middle text-center">{{ value.GiaTien }}</td>
                                            <td class="align-middle text-center">{{ value.BienSo }}</td>
                                            <td class="align-middle text-center">{{ value.LoaiXe }}</td>
                                            <td class="align-middle text-center">{{ value.SoKm }}</td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center gap-2">
                                                    <button v-if="value.TrangThai"
                                                        v-on:click="actionDoiTrangThaiDatXe(value)"
                                                        class="btn btn-success me-2">Đã hoàn thành</button>
                                                    <button v-else v-on:click="actionDoiTrangThaiDatXe(value)"
                                                        class="btn btn-danger">Chưa hoàn thành </button>
                                                </div>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center gap-2">
                                                    <button v-on:click="Object.assign(edit_dat_xe, value)"
                                                        class="btn btn-primary me-2" data-bs-toggle="modal"
                                                        data-bs-target="#Capnhatdatxe">Cập nhật</button>
                                                    <button v-on:click="Object.assign(delete_dat_xe, value)"
                                                        class="btn btn-danger" data-bs-toggle="modal"
                                                        data-bs-target="#xoadatxe"><i class="fa-solid fa-trash"></i>Xóa
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoikhachhang"><i
                                class="fa-solid fa-user-plus"></i>Thêm
                            mới
                            khách hàng</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Capnhatdatxe -->
        <div class="modal fade" id="Capnhatdatxe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Cập nhật thông tin Khách Hàng</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label><b>Mã đơn</b></label>
                        <input v-model="edit_dat_xe.Ma_id" type="text" class="form-control mb-2"
                            placeholder="Nhập mã đơn">

                        <label><b>Họ và tên</b></label>
                        <input v-model="edit_dat_xe.ho_ten" type="text" class="form-control mb-2"
                            placeholder="Nhập họ và tên">

                        <label><b>Điểm đón</b></label>
                        <input v-model="edit_dat_xe.DiaDiemDon" type="text" class="form-control mb-2"
                            placeholder="Nhập địa điểm đón">

                        <label><b>Điểm đến</b></label>
                        <input v-model="edit_dat_xe.DiaDiemDen" type="text" class="form-control mb-2"
                            placeholder="Nhập địa điểm đến">

                        <label><b>Giá tiền</b></label>
                        <input v-model="edit_dat_xe.GiaTien" type="text" class="form-control mb-2"
                            placeholder="Nhập giá tiền">

                        <label><b>Biển số</b></label>
                        <input v-model="edit_edit_dat_xe.BienSo" type="text" class="form-control mb-2"
                            placeholder="Nhập biển số">

                        <label><b>Loại Xe</b></label>
                        <input v-model="edit_edit_dat_xe.LoaiXe" type="text" class="form-control mb-2"
                            placeholder="Nhập loại xe">

                        <label><b>Số Km</b></label>
                        <input v-model="edit_edit_dat_xe.SoKm" type="text" class="form-control mb-2"
                            placeholder="Số km">

                        <label><b>Trạng thái</b></label>
                        <select class="form-control mb-2">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Tạm Ngừng</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="actionCapNhatDatXe()" type="button" class="btn btn-primary">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal xóa dat xe -->
        <div class="modal fade" id="xoadatxe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <div class="text-white">Bạn Có chắc chắn xóa đơn đặt xe không <b>{{
                                        delete_dat_xe.Ma_id
                                            }}</b> này không!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="actionXoaDatXe()" type="button" class="btn btn-danger"
                            data-bs-dismiss="modal">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal Thêm mới dat xe -->
        <div class="modal fade" id="themmoidatxe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            ql_dat_xe: [],
            edit_dat_xe: {},
            delete_dat_xe: {}
        }
    },
    mounted() {
        this.loadDataDatXe();
    },
    methods: {
        loadDataDatXe() {
            axios
                .get('http://127.0.0.1:8000/api/admin/get-data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        actionDoiTrangThaiDatXe(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuyen-xe/doi-trang-thai', value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataDatXe();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        actionCapNhatDatXe() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cap-nhat-don-dat-xe', this.edit_dat_xe, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataDatXe();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        actionXoaDatXe() {
            axios
                .post('http://127.0.0.1:8000/api/admin/xoa-don-dat-xe', this.delete_dat_xe, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataDatXe();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
    },
}
</script>
<style scoped>
.container {
    margin-top: 40px;
}

.card {
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #0dcaf0;
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.table thead th {
    vertical-align: middle;
    background-color: #439ff5 !important;
    color: #fff;
}

.table tbody td {
    vertical-align: middle;
}

.search-control {
    padding-left: 40px;
}

.search-show {
    color: #aaa;
    font-size: 18px;
}

.btn {
    min-width: 120px;
}

.modal-header {
    background-color: #0dcaf0;
    color: white;
}

.modal-title {
    font-weight: bold;
}

input.form-control,
select.form-control {
    border-radius: 10px;
    border: 1px solid #ced4da;
}

.modal-footer .btn {
    min-width: 100px;
}

/* Hiệu ứng hover nút */
button.btn:hover {
    opacity: 0.9;
    transition: all 0.2s ease-in-out;
}
</style>

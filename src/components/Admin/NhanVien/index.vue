<template>
    <div class="p-3">
        <div class="row mt-3">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="m-0">DANH SÁCH NHÂN VIÊN</h2>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                            Thêm Mới
                        </button>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Số Điện Thoại</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Quyền</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_nhan_vien" :key="index">
                                    <tr>
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle">{{ value.ho_ten }}</td>
                                        <td class="align-middle">{{ value.email }}</td>
                                        <td class="align-middle">{{ value.so_dien_thoai }}</td>
                                        <td class="align-middle text-center">{{ value.dia_chi }}</td>
                                        <td class="align-middle">{{ value.ten_quyen }}</td>
                                        <td class="align-middle text-center">
                                            <button v-if="value.tinh_trang == 1" v-on:click="changeTrangThai(value)"
                                                class="btn btn-success w-100"
                                                >Hoạt Động</button>
                                            <button v-else v-on:click="changeTrangThai(value)"
                                                class="btn btn-danger w-100"
                                                >Dừng Hoạt Động</button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-on:click="Object.assign(edit_nhan_vien, value)"
                                                class="btn btn-primary me-2" data-bs-toggle="modal"
                                                data-bs-target="#capnhatDM">Cập nhật</button>
                                            <button v-on:click="del_nhan_vien = value" class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#delModal">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="addModalLabel">Thêm Mới Nhân Viên</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row modal-body">
                            <div class="col-lg-6 mb-2">
                                <label>Họ Và Tên</label>
                                <input v-model="create_nhan_vien.ho_ten" type="text" class="form-control mt-2">
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Email</label>
                                <input v-on:blur="checkMail()" v-model="create_nhan_vien.email" type="email"
                                    class="form-control mt-2">
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Password</label>
                                <input v-model="create_nhan_vien.password" type="text" class="form-control mt-2">
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Số Điện Thoại</label>
                                <input v-model="create_nhan_vien.so_dien_thoai" type="tel" class="form-control mt-2">
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Địa Chỉ</label>
                                <input v-model="create_nhan_vien.dia_chi" type="text" class="form-control mt-2">
                            </div>
                            <div class="col-lg-6 mb-2">
                                <label>Quyền</label>
                                <select v-model="create_nhan_vien.id_chuc_vu" class="form-control mt-2">
                                    <template v-for="(v, k) in list_quyen" :key="k">
                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button v-on:click="themMoiDaiLy()" class="btn btn-primary">Thêm Mới</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhân Viên</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-danger" role="alert">
                                Bạn có chắc muốn xóa Nhân Viên <b class="text-danger">{{ del_nhan_vien.ho_va_ten
                                }}</b>
                                này
                                không?
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button v-on:click="xoaNhanVien()" type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật Nhân Viên</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-2">
                                <label>Họ Và Tên</label>
                                <input v-model="edit_nhan_vien.ho_ten" type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Email</label>
                                <input v-on:blur="checkMail()" v-model="edit_nhan_vien.email" type="email"
                                    class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Số Điện Thoại</label>
                                <input v-model="edit_nhan_vien.so_dien_thoai" type="tel" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Địa Chỉ</label>
                                <input v-model="edit_nhan_vien.dia_chi" type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Quyền</label>
                                <select v-model="edit_nhan_vien.id_chuc_vu" class="form-control mt-2">
                                    <template v-for="(v, k) in list_quyen" :key="k">
                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label>Tình trạng</label>
                                <select v-model="edit_nhan_vien.tinh_trang" class="form-control mt-2">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Dừng Hoạt Động</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button v-on:click="capnhatNhanVien()" type="button" class="btn btn-primary"
                                data-bs-dismiss="modal">Cập
                                nhật</button>
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
            list_nhan_vien: [],
            create_nhan_vien: {},
            del_nhan_vien: {},
            is_them_moi: 0,
            edit_nhan_vien: {},
            listPhanQuyen: [],
            list_quyen: []
        }
    },
    mounted() {
        this.layDataNhanVien();
        this.layDuLieuPhanQuyen();
    },
    methods: {
        layDuLieuPhanQuyen() {
            axios
                .get('http://127.0.0.1:8000/api/admin/nhan-vien/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status == false) {
                        this.$toast.error(res.data.message)
                    }
                    this.list_nhan_vien = res.data.data;
                });
        },
        checkMail() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/check-mail", this.create_nhan_vien, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.is_them_moi = res.data.status;
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }

                })
        },
        layDataNhanVien() {
            axios
                .get("http://127.0.0.1:8000/api/admin/nhan-vien/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                    this.list_quyen = res.data.data_quyen;
                })
        },
        themMoiDaiLy() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/create", this.create_nhan_vien, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.create_nhan_vien = {},
                        this.layDataNhanVien();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
                .catch((res) => {
                    var errors = Object.values(res.response.data.errors);
                    var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + errors[0] + '<span>';
                    this.$toast.error(thong_bao);
                });
        },
        capnhatNhanVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/update", this.edit_nhan_vien, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataNhanVien();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
                .catch((res) => {
                    var errors = Object.values(res.response.data.errors);
                    var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + errors[0] + '<span>';
                    this.$toast.error(thong_bao);
                });
        },
        xoaNhanVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/delete", this.del_nhan_vien, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataNhanVien();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        changeTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/doi-trang-thai", value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataNhanVien();
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
.btn-primary {
    background-color: #007bff;
    color: #f8f9fa;
    font-weight: bold;
}

.btn-primary:hover {
    background-color: #0570e2 !important;
    color: #f8f9fa !important;
}

/* .btn-success {
    background: linear-gradient(135deg, #28a745, #218838) !important;
    border: none;
    transition: 0.3s;
}

.btn-success:hover {
    background: linear-gradient(135deg, #28a745, #218838) !important;
    border: none;
    transition: 0.3s;
}

.btn-danger {
    background: linear-gradient(135deg, #dc3545, #c82333) !important;
}
.btn-danger:hover {
    background: linear-gradient(135deg, #dc3545, #c82333) !important;
    border: none;
    transition: 0.3s;
} */


</style>
<template>
    <div class="container mt-5 mb-5">
        <div class="row mt-3">
            <div class="card card-image rounded-4 p-0">
                <img src="https://i.pinimg.com/474x/b8/dd/8b/b8dd8bd829ba698fdff1fecc6de29c6d.jpg"
                    class="img-header rounded-4 img-fluid" alt="...">
                <div
                    class="title-header d-flex position-absolute top-50 start-0 translate-middle-y fw-bold fs-5 bg-opacity-75 p-3 rounded-end">
                    <h1 class="m-0"><i class="fa-solid fa-clock-rotate-left me-3"></i></h1>
                    <h1 class="m-0">QUẢN LÝ THÔNG TIN TÀI XẾ</h1>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-12 p-0">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center m-0"><b>Danh sách tài xế</b></h2>
                    </div>
                    <div class="card-body">
                        <div class="input-group mt-2 w-100 mb-1">
                            <input type="text" class="form-control search-control border border-1 border-secondary"
                                placeholder="Search...">
                            <span class="position-absolute top-50 search-show translate-middle-y"
                                style="left: 15px; height: 38px;"><i class="bx bx-search"></i></span>
                            <button class="btn " style="height: 38px;" type="button" id="button-addon2">Tìm
                                Kiếm</button>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="align-middle text-center">STT</th>
                                        <th class="align-middle text-center">Họ và tên</th>
                                        <th class="align-middle text-center">Số điện thoại</th>
                                        <th class="align-middle text-center">Email</th>
                                        <th class="align-middle text-center">Số CCCD</th>
                                        <th class="align-middle text-center">Loại xe</th>
                                        <th class="align-middle text-center">Bằng lái xe</th>
                                        <th class="align-middle text-center">Biển số xe</th>
                                        <th class="align-middle text-center">Thông tin ngân hàng</th>
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
                                            <td class="align-middle text-center">{{ value.cccd }}</td>
                                            <td class="align-middle text-center">{{ value.loai_xe }}</td>
                                            <td class="align-middle text-center">{{ value.bang_lai_xe }}</td>
                                            <td class="align-middle text-center">{{ value.bien_so }}</td>
                                            <td class="align-middle text-center">{{ value.ngan_hang }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai"
                                                    v-on:click="actionDoiTrangThaiTaiKhoan(value)"
                                                    class="btn btn-success text-nowrap w-100 me-2">Đang hoạt
                                                    động</button>
                                                <button v-else v-on:click="actionDoiTrangThaiTaiKhoan(value)"
                                                    class="btn btn-danger text-nowrap w-100">Tạm Ngừng </button>
                                            </td>
                                            <td class="align-middle text-center text-nowrap">
                                                <button v-on:click="Object.assign(edit_tai_xe, value)" class="btn me-1"
                                                    data-bs-toggle="modal" data-bs-target="#CapNhatTaiXe">Cập
                                                    nhật</button>
                                                <button v-on:click="Object.assign(delete_tai_xe, value)"
                                                    class="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#xoaTaiXe"><i class="fa-solid fa-trash"></i>Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- <div class="card-footer d-flex justify-content-end">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ThemMoiTaiXe"><i
                                class="fa-solid fa-user-plus"></i>Thêm
                            mới
                            tài xế</button>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Modal CapNhatTaiXe -->
        <div class="modal fade" id="CapNhatTaiXe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Cập nhật thông tin Tài Xế</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <label><b>Họ và tên</b></label>
                                <input v-model="edit_tai_xe.ho_ten" type="text" class="form-control mb-2"
                                    placeholder="Nhập họ và tên">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Số điện thoại</b></label>
                                <input v-model="edit_tai_xe.so_dien_thoai" type="text" class="form-control mb-2"
                                    placeholder="Nhập Số điện thoại">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Email</b></label>
                                <input v-model="edit_tai_xe.email" type="email" class="form-control mb-2"
                                    placeholder="Nhập Email">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Số CCCD</b></label>
                                <input v-model="edit_tai_xe.cccd" type="text" class="form-control mb-2"
                                    placeholder="Nhập Số CCCD">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Loại xe</b></label>
                                <input v-model="edit_tai_xe.loai_xe" type="text" class="form-control mb-2"
                                    placeholder="Nhập loại xe">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Bằng lái xe</b></label>
                                <input v-model="edit_tai_xe.bang_lai_xe" type="text" class="form-control mb-2"
                                    placeholder="Nhập Bằng lái xe">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Biển số</b></label>
                                <input v-model="edit_tai_xe.bien_so" type="text" class="form-control mb-2"
                                    placeholder="Nhập Biển số">
                            </div>
                            <div class="col-lg-6">
                                <label><b>Thông tin ngân hàng</b></label>
                                <input v-model="edit_tai_xe.ngan_hang" type="text" class="form-control mb-2"
                                    placeholder="Nhập Thông tin ngân hàng">
                            </div>
                            <div class="col-lg-12">
                                <label><b>Trạng thái</b></label>
                                <select v-model="edit_tai_xe.trang_thai" class="form-control mb-2">
                                    <option value="1">Đang hoạt động</option>
                                    <option value="0">Tạm Ngừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button v-on:click="actionCapNhatTaiKhoan()" type="button" data-bs-dismiss="modal"
                            class="btn btn-primary">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal xóa TaiXe -->
        <div class="modal fade" id="xoaTaiXe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa Tài Xế</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <div class="ms-3">
                                        <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                        <div class="text-white">Bạn Có chắc chắn xóa tài khoản <b>{{
                                            delete_tai_xe.ho_ten
                                                }}</b> này không!</div>
                                    </div>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button v-on:click="actionXoaTaiKhoan()" type="button" class="btn btn-danger"
                            data-bs-dismiss="modal">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal Thêm mới Tài Xế -->

        <!-- <div class="modal fade" id="ThemMoiTaiXe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Thêm mới Tài Xế</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label><b>Họ và tên</b></label>
                        <input v-model="create_tai_xe.ho_ten" type="text" class="form-control mb-2"
                            placeholder="Nhập họ và tên">

                        <label><b>Số điện thoại</b></label>
                        <input v-model="create_tai_xe.so_dien_thoai" type="text" class="form-control mb-2"
                            placeholder="Nhập Số điện thoại">

                        <label><b>Email</b></label>
                        <input v-model="create_tai_xe.email" type="text" class="form-control mb-2"
                            placeholder="Nhập Email">


                        <label><b>Số CCCD</b></label>
                        <input v-model="create_tai_xe.cccd" type="text" class="form-control mb-2"
                            placeholder="Nhập Số CCCD">

                        <label><b>Loại xe</b></label>
                        <input v-model="create_tai_xe.loai_xe" type="text" class="form-control mb-2"
                            placeholder="Nhập loại xe">


                        <label><b>Bằng lái xe</b></label>
                        <input v-model="create_tai_xe.bang_lai_xe" type="text" class="form-control mb-2"
                            placeholder="Nhập Bằng lái xe">

                        <label><b>Biển số</b></label>
                        <input v-model="create_tai_xe.bien_so" type="text" class="form-control mb-2"
                            placeholder="Nhập Biển số">

                        <label><b>Thông tin ngân hàng</b></label>
                        <input v-model="create_tai_xe.ngan_hang" type="text" class="form-control mb-2"
                            placeholder="Nhập Thông tin ngân hàng">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button v-on:click="actionThemTaiKhoan()" data-bs-dismiss="modal" type="button"
                            class="btn btn-primary">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
            create_tai_xe: {},
            edit_tai_xe: {},
            delete_tai_xe: {},
        }
    },
    mounted() {
        this.loadDataTaiXe();
    },
    methods: {
        loadDataTaiXe() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tai-xe/data', {
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
                .post('http://127.0.0.1:8000/api/admin/tai-xe/doi-tinh-trang', value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataTaiXe();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        actionCapNhatTaiKhoan() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tai-xe/cap-nhat-tai-khoan', this.edit_tai_xe, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataTaiXe();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        // actionThemTaiKhoan() {
        //     axios
        //         .post('http://127.0.0.1:8000/api/admin/tai-xe/them-tai-khoan', this.create_tai_xe, {
        //             headers: {
        //                 Authorization: 'Bearer ' + localStorage.getItem("token_admin")
        //             }
        //         })
        //         .then((res) => {
        //             if (res.data.status) {
        //                 var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
        //                 this.$toast.success(thong_bao);
        //                 this.loadDataTaiXe();
        //             } else {
        //                 var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
        //                 this.$toast.error(thong_bao);
        //             }
        //         })
        // },
        actionXoaTaiKhoan() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tai-xe/delete-tai-khoan', this.delete_tai_xe, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.loadDataTaiXe();
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
/* .title{
    display: flex;
} */
.btn {
    background-color: #007bff;
    color: #f8f9fa;
    font-weight: bold;
    border: none !important;
}

.btn:hover {
    background-color: #0570e2;
    color: #f8f9fa !important;
    /* border: none !important; */
}

.card-image {
    box-shadow: none;
    border: none;
}

.img-header {
    object-fit: cover !important;
    height: 400px;
    border-radius: 10px;
}

.title-header {
    /* background-color: #007bffaf; */
    background-color: #EDEDF5;
    color: #007bff !important;
    border-radius: 0 10px 10px 0 !important;

}
</style>
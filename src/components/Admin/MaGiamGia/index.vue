<template>
    <div class="container">
        <div class="custom-header d-flex justify-content-between align-items-center p-2 mb-3">
            <h2 class="text-white fw-bold m-0">Quản Lý Mã Giảm Giá</h2>
            <div class="search-box">
                <input type="text" class="form-control" placeholder="Tìm mã giảm giá..." v-model="search">
                <i class="fas fa-search search-icon"></i>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-lg-3">
                <div class="card mb-3">
                    <div class="card-header">
                        <h3 class="m-0"><b>THÊM MỚI MÃ GIẢM GIÁ</b></h3>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <label>Mã Code</label>
                            <input v-model="create_ma_giam_gia.code" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Thời Gian Bắt Đầu</label>
                            <input v-model="create_ma_giam_gia.ngay_bat_dau" type="date" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Thời Gian Kết Thúc</label>
                            <input v-model="create_ma_giam_gia.ngay_het_han" type="date" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Loại Giảm</label>
                            <select v-model="create_ma_giam_gia.loai_giam_gia" class="form-control">
                                <option value="0">Giảm %</option>
                                <option value="1">Tiền Mặt</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label>Số Giảm Giá</label>
                            <input v-model="create_ma_giam_gia.so_giam_gia" type="number" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Số Tiền Tối Đa</label>
                            <input v-model="create_ma_giam_gia.so_tien_toi_da" type="number" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Đơn Hàng Tối Thiểu</label>
                            <input v-model="create_ma_giam_gia.so_tien_toi_thieu" type="number"
                                class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Tình trạng</label>
                            <select v-model="create_ma_giam_gia.tinh_trang" class="form-control">
                                <option value="0">Tạm Tắt</option>
                                <option value="1">Hiển Thị</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <button v-on:click="themMoiMaGiamGia()" class="btn">Thêm Mới</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header">
                        <h3 class="m-0"><b>DANH SÁCH MÃ GIẢM GIÁ</b></h3>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle">#</th>
                                    <th class="text-center align-middle">Mã Code</th>
                                    <th class="text-center align-middle">Thời Gian Bắt Đầu</th>
                                    <th class="text-center align-middle">Thời Gian Kết Thúc</th>
                                    <th class="text-center align-middle">Loại Giảm</th>
                                    <th class="text-center align-middle">Số Giảm Giá</th>
                                    <th class="text-center align-middle">Số Tiền Tối Đa</th>
                                    <th class="text-center align-middle">Đơn Hàng Tối Thiểu</th>
                                    <th class="text-center align-middle">Tình Trạng</th>
                                    <th class="text-center align-middle">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_ma_giam_gia" :key="index">
                                    <tr>
                                        <th class="align-middle">{{ index + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ value.code }}</td>
                                        <td class="align-middle text-center">{{ value.ngay_bat_dau }}</td>
                                        <td class="align-middle text-center">{{ value.ngay_het_han }}</td>
                                        <td class="align-middle text-nowrap">
                                            <template v-if="value.loai_giam_gia == 0">
                                                Giảm %
                                            </template>
                                            <template v-else>
                                                Tiền Mặt
                                            </template>
                                        </td>
                                        <td class="align-middle text-end">{{ value.so_giam_gia }}</td>
                                        <td class="align-middle text-end">{{ value.so_tien_toi_da }}</td>
                                        <td class="align-middle text-end">{{ value.so_tien_toi_thieu }}</td>
                                        <td class="align-middle text-center">
                                            <button v-on:click="changeTrangThai(value)" v-if="value.tinh_trang == 1"
                                                class="btn btn-success text-nowrap">Hiển
                                                thị</button>
                                            <button v-on:click="changeTrangThai(value)" v-else
                                                class="btn btn-danger text-nowrap">Tạm
                                                tắt</button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-on:click="Object.assign(edit_ma_giam_gia, value)"
                                                class="btn w-100 mb-1" data-bs-toggle="modal"
                                                data-bs-target="#capnhatDM">Cập nhật</button>
                                            <button v-on:click="del_ma_giam_gia = value" class="btn btn-danger w-100"
                                                data-bs-toggle="modal" data-bs-target="#delModal">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <!-- Modal Cập Nhật -->
            <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="capnhatDMModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="capnhatDMModalLabel">Cập nhật Mã Giảm Giá</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12 mb-2">
                                    <label>Mã Code</label>
                                    <input v-model="edit_ma_giam_gia.code" type="text" class="form-control">
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Thời Gian Bắt Đầu</label>
                                    <input v-model="edit_ma_giam_gia.ngay_bat_dau" type="date" class="form-control">
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Thời Gian Kết Thúc</label>
                                    <input v-model="edit_ma_giam_gia.ngay_het_han" type="date" class="form-control">
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Loại Giảm</label>
                                    <select v-model="edit_ma_giam_gia.loai_giam_gia" class="form-control">
                                        <option value="0">Giảm %</option>
                                        <option value="1">Tiền Mặt</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Số Giảm Giá</label>
                                    <input v-model="edit_ma_giam_gia.so_giam_gia" type="number" class="form-control">

                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Số Tiền Tối Đa</label>
                                    <input v-model="edit_ma_giam_gia.so_tien_toi_da" type="number" class="form-control">
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <label>Đơn Hàng Tối Thiểu</label>
                                    <input v-model="edit_ma_giam_gia.so_tien_toi_thieu" type="number"
                                        class="form-control">
                                </div>
                                <div class="col-lg-12 mb-2">
                                    <label>Tình trạng</label>
                                    <select v-model="edit_ma_giam_gia.tinh_trang" class="form-control">
                                        <option value="0">Tạm Tắt</option>
                                        <option value="1">Hiển Thị</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button v-on:click="capnhatMaGiamGia()" type="button" class="btn"
                                data-bs-dismiss="modal">Cập
                                nhật</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Xóa -->
            <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="delModalLabel">Xóa Mã Giảm Giá</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-danger" role="alert">
                                Bạn có chắc muốn xóa <b class="text-white">{{ del_ma_giam_gia.code }}</b> này
                                không?
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button v-on:click="xoaMaGiamGia()" type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Xóa</button>
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
            list_ma_giam_gia: [],
            create_ma_giam_gia: {},
            del_ma_giam_gia: {},
            edit_ma_giam_gia: {},
        }
    },
    mounted() {
        this.layDataMaGiamGia();
    },
    methods: {
        layDataMaGiamGia() {
            axios
                .get("http://127.0.0.1:8000/api/admin/ma-giam-gia/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    this.list_ma_giam_gia = res.data.data;
                })
        },
        themMoiMaGiamGia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/ma-giam-gia/create", this.create_ma_giam_gia, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataMaGiamGia();
                        this.create_ma_giam_gia = {};
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        capnhatMaGiamGia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/ma-giam-gia/update", this.edit_ma_giam_gia, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataMaGiamGia();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        xoaMaGiamGia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/ma-giam-gia/delete", this.del_ma_giam_gia, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataMaGiamGia();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        changeTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/ma-giam-gia/doi-trang-thai", value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataMaGiamGia();
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
    background: linear-gradient(45deg, #007bff, #00c6ff);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
    border-radius: 10px;
    margin: 30px 0;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-box input {
    padding-left: 35px;
    border-radius: 20px;
    border: none;
    height: 38px;
    font-size: 14px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-box .search-icon {
    position: absolute;
    top: 9px;
    left: 12px;
    color: #aaa;
}

.btn {
    background-color: #007bff ;
    color: #f8f9fa;
    font-weight: bold;
    border: none !important;
}

.btn:hover {
    background-color: #0570e2;
    color: #f8f9fa !important;
    /* border: none !important; */
}
</style>

<template>
    <div class="p-3">
        <div class="row mt-3">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-6">
                                Danh Sách Quyền
                            </div>
                            <div class="col-lg-6 text-end">
                                <button class="btn" data-bs-toggle="modal"
                                    data-bs-target="#themMoiModal">Thêm
                                    Quyền</button>
                            </div>
                            <div class="col-lg-12">
                                <div class="input-group mt-3 w-100">
                                    <input v-on:keyup.enter="timKiem()" v-model="tim_kiem.noi_dung_tim" type="text"
                                        class="form-control search-control border border-2 border-secondary"
                                        placeholder="Search...">
                                    <span class="position-absolute top-50 search-show translate-middle-y"
                                        style="left: 15px; height: 38px;"><i class="bx bx-search"></i></span>
                                    <button v-on:click="timKiem()" class="btn" type="button" style="height: 40px;"
                                        id="button-addon2">Tìm Kiếm</button>
                                </div>
                            </div>
                            <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Quyền</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="col-12 mb-2">
                                                <label class="form-label">Tên Quyền</label>
                                                <input v-model="create_quyen.ten_quyen" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button v-on:click="themMoiPhanQuyen()" type="button"
                                                class="btn btn-primary" data-bs-dismiss="modal">Tạo
                                                Mới</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="text-center align-middle">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Quyền</th>
                                        <th>Cấp Quyền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in list_phan_quyen" :key="k" class="align-middle">
                                        <th class="text-center">{{ k + 1 }}</th>
                                        <td>{{ v.ten_quyen }}</td>
                                        <td class="text-center">
                                            <button v-on:click="quyen_dang_chon = v; loadData()"
                                                class="btn btn-info text-white">Phân
                                                Quyền</button>
                                        </td>
                                        <td class="text-center">
                                            <i v-on:click="Object.assign(update_quyen, v)"
                                                class="fa-solid fa-square-pen fa-3x text-primary me-2"
                                                data-bs-toggle="modal" data-bs-target="#updateModal"></i>
                                            <i v-on:click="Object.assign(delete_quyen, v)"
                                                class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Quyền</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="update_quyen.ten_quyen" type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="capNhatPhanQuyen()" type="button" class="btn btn-primary"
                                            data-bs-dismiss="modal">Xác Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Quyền</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div
                                            class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                            <div class="d-flex align-items-center">
                                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h3 class=" text-dark">Cảnh báo !</h3>
                                                    <div class="text-dark">
                                                        <p class="mb-0">Bạn có muốn xóa quyền <b>{{ delete_quyen.ten_quyen }}</b> này
                                                            không?
                                                        </p>
                                                        <p class="mb-0">
                                                            <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="xoaPhanQuyen()" type="button" class="btn btn-danger"
                                            data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="mb-0">Danh Sách Chức Năng</h5>
                            <p v-if="quyen_dang_chon.ten_quyen" class="mb-0 text-primary">
                                Đang phân quyền cho: <span class="fw-bold">{{ quyen_dang_chon.ten_quyen }}</span>
                            </p>
                        </div>
                        <div v-if="quyen_dang_chon.id" class="d-flex gap-2">
                            <button @click="huyPhanQuyen()" class="btn btn-secondary">
                                <i class="fas fa-times me-1"></i> Hủy
                            </button>
                            <button @click="luuPhanQuyen()" class="btn btn-success">
                                <i class="fas fa-save me-1"></i> Lưu Phân Quyền
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 ">
                                <div class="input-group">
                                    <span class="input-group-text bg-primary text-white" style="border-radius: 10px 0 0 10px;">
                                        <i class="fas fa-search p-2"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="search_chuc_nang"
                                        placeholder="Tìm kiếm chức năng..."
                                    >
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr class="text-center text-nowrap align-middle bg-light">
                                            <th style="width: 50px">
                                                <input type="checkbox" 
                                                    v-model="selectAll" 
                                                    @change="toggleSelectAll" 
                                                    class="form-check-input"
                                                    :disabled="!quyen_dang_chon.id">
                                            </th>
                                            <th style="width: 80px">#</th>
                                            <th class="text-start">Tên Chức Năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(v, k) in filtered_chuc_nang" 
                                            :key="k" 
                                            class="align-middle"
                                            :class="{'table-active': isQuyenDuocChon(v.id)}">
                                            <td class="text-center">
                                                <input type="checkbox" 
                                                    v-model="v.isSelected" 
                                                    class="form-check-input"
                                                    :disabled="!quyen_dang_chon.id">
                                            </td>
                                            <th class="text-center">{{ k + 1 }}</th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <i class="fas fa-shield-alt me-2 text-primary"></i>
                                                    {{ v.ten_chuc_nang }}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
            list_chuc_nang: [],
            list_phan_quyen: [],
            create_quyen: {},
            delete_quyen: {},
            update_quyen: {},
            quyen_dang_chon: {},
            list_chi_tiet: [],
            tim_kiem: {},
            selectAll: false,
            quyen_hien_tai: [],
            search_chuc_nang: '',
        }
    },
    computed: {
        filtered_chuc_nang() {
            if (!this.search_chuc_nang) return this.list_chuc_nang;
            
            const searchTerm = this.search_chuc_nang.toLowerCase().trim();
            return this.list_chuc_nang.filter(item => 
                item.ten_chuc_nang.toLowerCase().includes(searchTerm)
            );
        }
    },
    mounted() {
        this.layDuLieuPhanQuyen();
        this.layDuLieuChucNang();
        this.loadData();
    },
    methods: {
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/phan-quyen/tim-kiem", this.tim_kiem, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status == false) {
                        toaster.error(res.data.message)
                    }
                    this.list_phan_quyen = res.data.data;
                });
        },
        xoaQuyen(payload) {
            axios
                .post("http://127.0.0.1:8000/api/admin/chi-tiet-phan-quyen/xoa-quyen", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message)
                    }

                });
        },
        loadData() {
            if (!this.quyen_dang_chon.id) return;
            
            var payload = {
                'id_quyen': this.quyen_dang_chon.id,
            };
            axios
                .post("http://127.0.0.1:8000/api/admin/chi-tiet-phan-quyen/danh-sach", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status == false) {
                        this.$toast.error(res.data.message)
                        return;
                    }
                    this.quyen_hien_tai = res.data.data.map(item => item.chuc_nang_id);
                    this.list_chuc_nang.forEach(chuc_nang => {
                        chuc_nang.isSelected = this.quyen_hien_tai.includes(chuc_nang.id);
                    });
                    this.selectAll = this.list_chuc_nang.every(chuc_nang => chuc_nang.isSelected);
                });
        },
        toggleSelectAll() {
            if (!this.quyen_dang_chon.id) return;
            
            this.filtered_chuc_nang.forEach(chuc_nang => {
                chuc_nang.isSelected = this.selectAll;
            });
        },
        huyPhanQuyen() {
            this.quyen_dang_chon = {};
            this.selectAll = false;
            this.list_chuc_nang.forEach(chuc_nang => {
                chuc_nang.isSelected = false;
            });
            this.quyen_hien_tai = [];
        },
        isQuyenDuocChon(id_chuc_nang) {
            return this.quyen_hien_tai.includes(id_chuc_nang);
        },
        luuPhanQuyen() {
            if (!this.quyen_dang_chon.id) {
                this.$toast.error('Vui lòng chọn quyền cần phân quyền!');
                return;
            }

            const selectedIds = this.list_chuc_nang
                .filter(chuc_nang => chuc_nang.isSelected)
                .map(chuc_nang => chuc_nang.id);

            var payload = {
                'id_quyen': this.quyen_dang_chon.id,
                'list_id_chuc_nang': selectedIds
            };

            axios
                .post("http://127.0.0.1:8000/api/admin/chi-tiet-phan-quyen/cap-nhieu-quyen", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                });
        },
        layDuLieuChucNang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-nang/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status == false) {
                        this.$toast.error(res.data.message)
                    }
                    this.list_chuc_nang = res.data.data;
                });
        },
        layDuLieuPhanQuyen() {
            axios
                .get('http://127.0.0.1:8000/api/admin/phan-quyen/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status == false) {
                        this.$toast.error(res.data.message)
                    }
                    this.list_phan_quyen = res.data.data;
                });
        },
        themMoiPhanQuyen() {
            axios
                .post('http://127.0.0.1:8000/api/admin/phan-quyen/create', this.create_quyen, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                        this.create_quyen = {};
                    } else {
                        this.$toast.error(res.data.message)
                    }
                });
        },
        xoaPhanQuyen() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/phan-quyen/delete/' + this.delete_quyen.id, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                    } else {
                        this.$toast.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        capNhatPhanQuyen() {
            axios
                .put('http://127.0.0.1:8000/api/admin/phan-quyen/update', this.update_quyen, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        this.layDuLieuPhanQuyen();
                    } else {
                        this.$toast.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
    },
}
</script>
<style>
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

<template>
    <div class="container py-4">
        <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body">
                <ul class="nav nav-tabs nav-justified" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#profileTab" role="tab">
                            <i class="fa-solid fa-user me-1"></i> Thông Tin Cá Nhân
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#passwordTab" role="tab">
                            <i class="fa-solid fa-lock me-1"></i> Đổi Mật Khẩu
                        </a>
                    </li>
                    
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="profileTab" role="tabpanel">
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <div class="card h-100 mt-4">
                                    <div class="card-body d-flex flex-column align-items-center text-center">
                                        <img v-bind:src="profile.hinh_anh" style="width: 140px; height: 140px;"
                                            class="mb-2" />
                                        <h5 class="mb-1">{{ profile.ho_ten }}</h5>
                                        <p class="text-muted mb-0">Khách Hàng</p>
                                        <p class="text-secondary small m-0">{{ profile.dia_chi }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label">Họ và Tên</label>
                                            <input type="text" class="form-control" v-model="profile.ho_ten"
                                                placeholder="Nhập họ và tên" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" v-model="profile.email"
                                                placeholder="Nhập email" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Số Điện Thoại</label>
                                            <input type="text" class="form-control" v-model="profile.so_dien_thoai"
                                                placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Địa Chỉ</label>
                                            <input type="text" class="form-control" v-model="profile.dia_chi"
                                                placeholder="Nhập địa chỉ" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn text-white">Cập Nhật</button>
                                        </div>

                                    </div>
                                    <hr class="mt-3">
                                    <div class="row m-1">
                                        <div class="col-lg-3">
                                            <h5 class="mb-3">Avatar</h5>

                                        </div>
                                        <div class="col-lg-9 text-secondary">
                                            <input type="file" class="form-control" accept="image/*"
                                                v-on:change="loadAnhTuLocal($event)">

                                        </div>
                                        <!-- <div class="col-lg-9 text-secondary mt-3">
                                            <img v-if="anh_tmp" style="width: 150px; height: 150px" v-bind:src="anh_tmp"
                                                alt="" class="img-fluid">
                                        </div> -->
                                    </div>
                                    <div class="row m-1">
                                        <div class="col-lg-3 col-md-12">
                                            <img v-if="anh_tmp" style="width: 100px; height: 100px" v-bind:src="anh_tmp"
                                                alt="" class="img-fluid me-1">
                                            <button v-on:click="updateAvatar()" type="button"
                                                class="btn text-white px-4">Lưu Ảnh</button>
                                        </div>
                                        <div class="col-lg-9 text-secondary">
                                            <!-- <button v-on:click="updateAvatar()" type="button"
                                                class="btn btn-primary px-4">Lưu Ảnh</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="tab-pane fade" id="passwordTab" role="tabpanel">
                        <div class="card border-0 shadow-sm p-4 rounded-4 mt-3">

                            <div class="row ">
                                <div class="col-lg-9">
                                    <!-- <div class="row mb-3">
                                        <div class="col-lg-2">
                                            <label for="">Mật khẩu cũ</label>
                                        </div>
                                        <div class="col-lg-3">
                                            <input v-model="changepassword.old_password" type="password"
                                                placeholder="Nhập mật khẩu cũ" class="form-control">
                                        </div>
                                    </div> -->
                                    <div class="row mb-3">
                                        <div class="col-lg-2">
                                            <label for="">Mật khẩu mới</label>
                                        </div>
                                        <div class="col-lg-3">
                                            <input v-model="changepassword.new_password" type="password"
                                                placeholder="Nhập mật khẩu mới" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-lg-2">
                                            <label for="">Nhập lại Mật khẩu mới </label>
                                        </div>
                                        <div class="col-lg-3">
                                            <input v-model="changepassword.confirm_password" type="password"
                                                placeholder="Nhập lại mật khẩu mới" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <button v-on:click="changePass()" class="btn text-white">Lưu</button>
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
            profile: {},
            changepassword: {},
            anh_tmp: "",
            file_anh: ""

        }
    },
    mounted() {
        this.getDataProfile();
    },
    methods: {
        loadAnhTuLocal(event) {
            this.file_anh = event.target.files[0];
            this.createImage(this.file_anh);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.anh_tmp = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        updateAvatar() {
            const payload = new FormData();
            payload.append('hinh_anh', this.file_anh);
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/profile/anh-dai-dien", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang"),
                        'Content-Type': 'multipart/from-data'
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.getDataProfile()
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        getDataProfile() {
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/profile/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    this.profile = res.data.data;
                })
        },
        updateProfile() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/update-tai-khoan", this.profile, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.getDataProfile()

                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + value + '<span>';
                        this.$toast.error(thong_bao);
                    })
                });
        },
        changePass() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/doi-mat-khau", this.changepassword, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.$router.push('/client/dang-nhap')
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                        // this.$router.push('/client/dang-ky');
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    Object.values(listErrors).forEach((value) => {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + value + '<span>';
                        this.$toast.error(thong_bao);
                    })
                });
        }
    },
}
</script>
<style>
/* Tab menu */
.nav-tabs {
    border-bottom: 2px solid #ddd;
}

.nav-tabs .nav-item .nav-link {
    border: none;
    color: #5a5a5a;
    font-weight: 600;
}

.nav-tabs .nav-item .nav-link.active {
    color: #007bff;
    border-color: #007bff;
}

.nav-tabs .nav-item .nav-link:hover {
    color: #0056b3;
}

/* Card */
.card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
}

.card-body {
    padding: 20px;
}

.card .card-body h5 {
    font-size: 1.25rem;
    font-weight: 600;
}

.card .card-body img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #007bff;
}

.card .card-body p {
    font-size: 0.9rem;
    color: #555;
}

/* Form */
.form-label {
    font-weight: 600;
    color: #333;
}

.form-control {
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: none;
    font-size: 0.875rem;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.text-end .btn {
    border-radius: 8px;
    padding: 10px 20px;
}

/* Button */
.btn {
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 8px;
    font-size: 0.9rem;
}

.btn:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

/* Responsive Layout */
@media (max-width: 768px) {
    .card .card-body {
        padding: 15px;
    }

    .row.g-4 {
        flex-direction: column;
    }

    .col-lg-4,
    .col-lg-8 {
        width: 100%;
        margin-bottom: 20px;
    }

    .nav-tabs {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .card .card-body h5 {
        font-size: 1rem;
    }

    .form-label {
        font-size: 0.875rem;
    }

    .form-control {
        font-size: 0.75rem;
    }

    .btn-primary {
        font-size: 0.875rem;
    }
}

.custom-file-upload {
    position: relative;
    display: inline-block;
}

.custom-file-upload input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.custom-file-label {
    display: inline-block;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.custom-file-label:hover {
    background-color: #0056b3;
}

.custom-file-label i {
    margin-right: 8px;
}
</style>
<template>
    <div class="container py-4">
        <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body">
                <!-- Tabs -->
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

                <!-- Tab Content -->
                <div class="tab-content py-4">
                    <!-- Profile Tab -->
                    <div class="tab-pane fade show active" id="profileTab" role="tabpanel">
                        <div class="row g-4">
                            <!-- Avatar -->
                            <div class="col-lg-4">
                                <div class="card h-100">
                                    <div class="card-body d-flex flex-column align-items-center text-center">
                                        <img src="../../../assets/img/avatar2.jpeg"
                                            class="rounded-circle p-1 mb-3" alt="Avatar"
                                            style="width: 140px; height: 140px;" />
                                        <h5 class="mb-1">{{ profile.ho_ten }}</h5>
                                        <p class="text-muted mb-0">Tài xế</p>
                                        <p class="text-secondary small">{{ profile.dia_chi }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Form -->
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Password Tab -->
                    <div class="tab-pane fade" id="passwordTab" role="tabpanel">
                        <div class="card border-0 shadow-sm p-4 rounded-4">
                            <div class="row g-3 ">
                                <div class="row mb-3">
                                    <div class="col-lg-2">
                                        <label for="">Mật khẩu cũ</label>
                                    </div>
                                    <div class="col-lg-3">
                                        <input v-model="changepassword.old_password" type="password"
                                            placeholder="Nhập mật khẩu cũ" class="form-control">
                                    </div>
                                </div>
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
            changepassword: {}

        }
    },
    mounted() {
        this.getDataProfile();
    },
    methods: {
        getDataProfile() {
            axios
                .get("http://127.0.0.1:8000/api/tai-xe/get-data/profile", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_tai_xe")
                    }
                })
                .then((res) => {
                    this.profile = res.data.data;
                })
        },
        updateProfile() {
            axios
                .post("http://127.0.0.1:8000/api/tai-xe/update-tai-khoan", this.profile, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_tai_xe")
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
                .post("http://127.0.0.1:8000/api/tai-xe/doi-mat-khau", this.changepassword, {
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
    border: 3px solid #007bff;
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

    .col-lg-4, .col-lg-8 {
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
</style>
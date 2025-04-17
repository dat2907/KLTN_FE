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
                                        <img src="https://i.pinimg.com/736x/d6/4f/63/d64f6390a717d4094d1dd7d2d51285ca.jpg"
                                            class="rounded-circle bg-primary p-1 mb-3" alt="Avatar"
                                            style="width: 140px; height: 140px;" />
                                        <h5 class="mb-1">{{ profile.ho_ten }}</h5>
                                        <p class="text-muted mb-0">Khách Hàng</p>
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
                                                class="btn btn-primary">Cập Nhật</button>
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
                                <button v-on:click="changePass()" class="btn btn-primary">Lưu</button>
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
<style></style>
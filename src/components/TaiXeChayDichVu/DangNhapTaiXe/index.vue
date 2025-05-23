<!-- <template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mx-auto">
            <div class="my-4 text-center">
                <img src="https://i.pinimg.com/736x/5f/5a/c2/5f5ac262a11716546274fd7ab484a428.jpg" width="180" alt="">
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Đăng Nhập Tài Xế</h3>
                            <p>Bạn chưa có tài khoản?
                                <router-link to="">
                                    Đăng kí ngay
                                </router-link>
                            </p>
                        </div>
                        <div class="login-separater text-center mb-4">
                            <hr>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email</label>
                                    <input v-model="driver.email" type="email" class="form-control"
                                        placeholder="Nhập vào Email">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="driver.password" type="password" class="form-control"
                                            placeholder="Nhập vào Mật Khẩu">
                                    </div>
                                </div>


                                <div class="col-12">
                                    <div class="d-grid">
                                        <button v-on:click="ActionDangnhap()" type="button" class="btn btn-primary"><i
                                                class="bx bx-user"></i>Đăng
                                            Nhập</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->
<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="login-card">
                <div class="text-center mb-4">
                    <img src="../../../assets/img/LOGO_KLTN_CHINH.png" alt="Logo" class="login-logo">
                </div>
                <h2 class="text-center mb-2">Đăng Nhập Tài Xế</h2>
                <p class="text-center mb-4">
                    Bạn chưa có tài khoản?
                    <router-link to="/tai-xe-chay-dich-vu/dang-ki-tai-xe" class="link-register">Đăng ký
                        ngay</router-link>
                </p>
                <form @submit.prevent="ActionDangnhap()">
                    <div class="form-group mb-3">
                        <label class="form-label">Email</label>
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input v-model="driver.email" type="email" class="form-control" placeholder="Nhập vào Email">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Mật khẩu</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input v-model="driver.password" type="password" class="form-control"
                                placeholder="Nhập vào Mật khẩu">
                        </div>
                    </div>
                    <div class="mb-4 text-end">
                        <router-link to="/client/quen-mat-khau" class="link-forgot">Quên mật khẩu?</router-link>
                    </div>
                    <button type="submit" class="btn-login w-100" @click="ActionDangnhap()">
                        <i class="fas fa-sign-in-alt me-2"></i> Đăng Nhập
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            driver: {}
        }
    },
    mounted() {

    },
    methods: {
        ActionDangnhap() {
            axios
                .post('http://127.0.0.1:8000/api/tai-xe/dang-nhap', this.driver)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.driver = {}
                        // Lưu lại ở trình duyệt
                        localStorage.setItem('token_tai_xe', res.data.token);
                        localStorage.setItem('ten_taixe', res.data.ten_taixe);
                        this.$router.push('/tai-xe-chay-dich-vu/profile-tai-xe');
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
        }
    },
}
</script>
<style scoped>
.login-container {
    min-height: 100vh;
    background-color: #f8f9fa;
}

.login-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0062E6, #33AEFF);
    padding: 20px;
}

.login-card {
    width: 100%;
    max-width: 480px;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    transition: all 0.3s ease;
}

.login-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* .login-logo {
    width: 180px;
    height: 180px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
} */
.login-logo {
    width: 250px;
    height: 70px;
    object-fit: cover;
}

.login-logo:hover {
    transform: scale(1.05);
}

.form-label {
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    display: block;
}

.input-with-icon {
    position: relative;
}

.input-with-icon i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}

.form-control {
    padding: 12px 12px 12px 40px;
    height: auto;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.3s;
    font-size: 16px;
}

.form-control:focus {
    border-color: #0062E6;
    box-shadow: 0 0 0 0.2rem rgba(0, 98, 230, 0.25);
}

.link-forgot {
    font-size: 14px;
    color: #0062E6;
    text-decoration: none;
    transition: all 0.2s;
}

.link-forgot:hover {
    text-decoration: underline;
    color: #004db3;
}

.btn-login {
    background: linear-gradient(to right, #0062E6, #33AEFF);
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 98, 230, 0.3);
    cursor: pointer;
}

.btn-login:hover {
    background: linear-gradient(to right, #005ad9, #1a9bff);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 98, 230, 0.35);
}

.link-register {
    color: #0062E6;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
}

.link-register:hover {
    color: #004db3;
    text-decoration: underline;
}

@media (max-width: 576px) {
    .login-card {
        padding: 30px 20px;
    }
}
</style>
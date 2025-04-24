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
    <div class="class">
        <div class="login-wrapper">
            <div class="login-card">
                <div class="text-center mb-4">
                <img src="../../../assets/img/LOGO_KLTN_CHINH.png" alt="Logo" class="login-logo">
                </div>
                <h3 class="text-center mb-2">Đăng Nhập</h3>
                <p class="text-center mb-3">
                Bạn chưa có tài khoản?
                <router-link to="/taixechaydichvu/dang-ki-tai-xe" class="link-register">Đăng ký ngay</router-link>
                </p>
                <form @submit.prevent="ActionDangnhap()">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input v-model="driver.email" type="email" class="form-control" placeholder="Nhập vào Email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Mật khẩu</label>
                    <input v-model="driver.password" type="password" class="form-control" placeholder="Nhập vào Mật khẩu">
                </div>
                <div class="mb-3 text-end">
                    <router-link to="/client/quen-mat-khau" class="link-forgot">Quên mật khẩu?</router-link>
                </div>
                <button type="submit" class="btn-login w-100">
                    <i class="bx bx-user"></i> Đăng Nhập
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
                        this.$router.push('/taixechaydichvu/profile-taixe');
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
    .login-wrapper {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #1e90ff, #007bff);
        padding: 20px;
    }

    .login-card {
        width: 100%;
        max-width: 480px;
        background: #fff;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .login-logo {
        width: 200px;
        border-radius: 12px;
    }

    .form-label {
        font-weight: 600;
        color: #333;
    }

    .form-control {
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #ddd;
        transition: 0.3s;
    }

    .form-control:focus {
        border-color: rgb(4, 125, 239);
        box-shadow: 0 0 0 0.2rem rgb(4, 125, 239);
    }

    .link-forgot {
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
    }

    .link-forgot:hover {
        text-decoration: underline;
    }

    .btn-login {
        background-color: rgb(4, 125, 239);
        color: #fff;
        padding: 12px;
        border: none;
        border-radius: 30px;
        font-weight: 600;
        transition: 0.3s ease;
        box-shadow: 0 4px 12px rgba(239, 86, 4, 0.3);
    }

    .btn-login:hover {
        background-color: rgb(4, 125, 239);
        transform: translateY(-2px);
    }

    .link-register {
        color: rgb(4, 125, 239);
        font-weight: 600;
        text-decoration: none;
    }

    .link-register:hover {
        text-decoration: underline;
    }
    /* html, body {
        background-color: rgb(239, 86, 4);
        min-height: 100vh;
    }

    .class {
    min-height: 100vh; 
    } */
</style>
<template>
<div class="class">
    <div class="login-wrapper">
        <div class="login-card">
            <div class="text-center mb-4">
            <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/491724271_2427655590935555_1536682867116486130_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ocS5eEz0llgQ7kNvwEGz5kQ&_nc_oc=Adkx30y2i6-ANYNRx0ugOeAAUZBRju_CBSlR04306M_DvC8n4JcnyG6s8fOjPoEbomtMXaonTBtaZ75W0_dlE1JG&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=XNtm4NVUFN4OLqPeZFXYRg&oh=00_AfFmSkG_dGAmFlRmD_cy5GaZP0TbZ5FP39CarcJG3r_yTQ&oe=68063E8C" alt="Logo" class="login-logo">
            </div>
            <h3 class="text-center mb-2">Đăng Nhập</h3>
            <p class="text-center mb-3">
            Bạn chưa có tài khoản?
            <router-link to="/client/dang-ky" class="link-register">Đăng ký ngay</router-link>
            </p>
            <form @submit.prevent="ActionDangnhap()">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="client.email" type="email" class="form-control" placeholder="Nhập vào Email">
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input v-model="client.password" type="password" class="form-control" placeholder="Nhập vào Mật khẩu">
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
            client: {}
        }
    },
    mounted() {

    },
    methods: {
        ActionDangnhap() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dang-nhap-tk', this.client)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.client = {}
                        // Lưu lại ở trình duyệt
                        localStorage.setItem('token_khach_hang', res.data.token);
                        localStorage.setItem('ten_kh', res.data.ten_kh);
                        this.$router.push('/client/profile');
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
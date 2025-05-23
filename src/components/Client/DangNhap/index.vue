<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="login-card">
                <div class=" text-center mb-4">
                    <!-- <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/491724271_2427655590935555_1536682867116486130_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ocS5eEz0llgQ7kNvwEGz5kQ&_nc_oc=Adkx30y2i6-ANYNRx0ugOeAAUZBRju_CBSlR04306M_DvC8n4JcnyG6s8fOjPoEbomtMXaonTBtaZ75W0_dlE1JG&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=XNtm4NVUFN4OLqPeZFXYRg&oh=00_AfFmSkG_dGAmFlRmD_cy5GaZP0TbZ5FP39CarcJG3r_yTQ&oe=68063E8C"
                        alt="Logo" class="login-logo"> -->
                        <img src="../../../assets/img/LOGO_KLTN_CHINH.png" alt="" class="login-logo">
                </div>
                <h2 class="text-center mb-2">Đăng Nhập</h2>
                <p class="text-center mb-4">
                    Bạn chưa có tài khoản?
                    <router-link to="/client/dang-ky" class="link-register">Đăng ký ngay</router-link>
                </p>
                <form @submit.prevent="ActionDangnhap()">
                    <div class="form-group mb-3">
                        <label class="form-label">Email</label>
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input v-model="client.email" type="email" class="form-control"
                                placeholder="Nhập vào Email">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Mật khẩu</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input v-model="client.password" type="password" class="form-control"
                                placeholder="Nhập vào Mật khẩu">
                        </div>
                    </div>
                    <div class="mb-4 text-end">
                        <router-link to="/client/quen-mat-khau" class="link-forgot">Quên mật khẩu?</router-link>
                    </div>
                    <button type="submit" class="btn-login w-100">
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
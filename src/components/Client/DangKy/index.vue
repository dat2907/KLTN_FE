<template>
    <!-- Đăng ký -->
    <div class="auth-wrapper">
        <div class="auth-card">
            <div class="text-center mb-4">
                <!-- <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/491724271_2427655590935555_1536682867116486130_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ocS5eEz0llgQ7kNvwEGz5kQ&_nc_oc=Adkx30y2i6-ANYNRx0ugOeAAUZBRju_CBSlR04306M_DvC8n4JcnyG6s8fOjPoEbomtMXaonTBtaZ75W0_dlE1JG&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=XNtm4NVUFN4OLqPeZFXYRg&oh=00_AfFmSkG_dGAmFlRmD_cy5GaZP0TbZ5FP39CarcJG3r_yTQ&oe=68063E8C"
                    class="auth-logo" alt=""> -->
                    <img src="../../../assets/img/LOGO_KLTN_CHINH.png" alt="" class="login-logo">

            </div>
            <h3 class="text-center mb-3">Đăng Ký Tài Khoản</h3>
            <p class="text-center">
                Bạn đã có tài khoản?
                <router-link to="/client/dang-nhap" class="auth-link">Đăng nhập</router-link>
            </p>
            <hr>
            <form>
                <div class="mb-3">
                    <label class="form-label">Họ Và Tên</label>
                    <input v-model="client_create.ho_ten" type="text" class="form-control"
                        placeholder="Nhập vào họ và tên">
                </div>
                <div class="mb-3">
                    <label class="form-label">Số Điện Thoại</label>
                    <input v-model="client_create.so_dien_thoai" type="text" class="form-control"
                        placeholder="Nhập vào số điện thoại">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input v-model="client_create.email" type="email" class="form-control" placeholder="Nhập vào Email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Địa chỉ</label>
                    <input v-model="client_create.dia_chi" type="text" class="form-control" placeholder="Nhập địa chỉ">
                </div>
                <div class="mb-3">
                    <label class="form-label">Mật Khẩu</label>
                    <input v-model="client_create.password" type="password" class="form-control"
                        placeholder="Nhập vào Mật Khẩu">
                </div>
                <div class="mb-4">
                    <label class="form-label">Nhập Lại Mật Khẩu</label>
                    <input v-model="client_create.re_password" type="password" class="form-control"
                        placeholder="Nhập lại Mật Khẩu">
                </div>
                <button v-on:click="ActionDangky()" type="button" class="btn-auth">Đăng Ký</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            client_create: {
            }
        }
    },
    mounted() {
    },
    methods: {
        ActionDangky() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dang-ky', this.client_create)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.client_create = {};
                        this.$router.push('/client/dang-nhap');
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                        this.$router.push('/client/dang-nhap');
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
.login-logo {
    width: 250px;
    height: 70px;
    object-fit: cover;
}
.auth-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(4, 125, 239);
    padding: 30px;
}

.auth-card {
    width: 100%;
    max-width: 500px;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.auth-logo {
    width: 150px;
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
    box-shadow: 0 0 0 0.2rem rgb(81, 131, 177);
}

.btn-auth {
    background-color: rgb(4, 125, 239);
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    width: 100%;
    transition: 0.3s ease;
    box-shadow: 0 4px 12px rgba(239, 86, 4, 0.3);
}

.btn-auth:hover {
    background-color: rgb(4, 125, 239);
    transform: translateY(-2px);
}

.auth-link {
    color: rgb(4, 125, 239);
    font-weight: 600;
    text-decoration: none;
}

.auth-link:hover {
    text-decoration: underline;
}
</style>
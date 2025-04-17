<template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mx-auto">
            <div class="my-4 text-center">
                <img src="https://i.pinimg.com/736x/5f/5a/c2/5f5ac262a11716546274fd7ab484a428.jpg" width="180" alt="">
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Đăng Ký Tài Xế</h3>
                            <p>
                                <router-link to="">
                                    Bạn đã có tài khoản?
                                </router-link>
                            </p>
                        </div>
                        <div class="login-separater text-center mb-4">
                            <hr>
                        </div>
                        <div class="form-body">
                            <div class="row g-3">
                                <div class="col-sm-12">
                                    <label class="form-label">Họ Và Tên</label>
                                    <input v-model="driver_create.ho_ten" type="text" class="form-control"
                                        placeholder="Nhập vào họ và tên">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Email</label>
                                    <input v-model="driver_create.email" type="email" class="form-control"
                                        placeholder="Nhập vào Email">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Số Điện Thoại</label>
                                    <input v-model="driver_create.so_dien_thoai" type="text" class="form-control"
                                        placeholder="Nhập vào số điện thoại">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">CCCD</label>
                                    <input v-model="driver_create.cccd" type="text" class="form-control"
                                        placeholder="Nhập vào số điện thoại">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Bằng lái xe</label>
                                    <input v-model="driver_create.bang_lai_xe" type="text" class="form-control"
                                        placeholder="Nhập vào số điện thoại">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="driver_create.password" type="password" class="form-control"
                                            placeholder="Nhập vào Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Nhập Lại Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="driver_create.re_password" type="password" class="form-control"
                                            placeholder="Nhập lại Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Tài khoản ngân hàng</label>
                                    <input v-model="driver_create.ngan_hang" type="text" class="form-control"
                                        placeholder="Nhập loại xe">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Loại Xe</label>
                                    <input v-model="driver_create.loai_xe" type="text" class="form-control"
                                        placeholder="Nhập loại xe">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Biển Số</label>
                                    <input v-model="driver_create.bien_so" type="text" class="form-control"
                                        placeholder="Nhập biển số">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Địa Chỉ</label>
                                    <input v-model="driver_create.dia_chi" type="text" class="form-control"
                                        placeholder="Nhập địa chỉ">
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button v-on:click="ActionDangky()" type="button" class="btn btn-primary"><i
                                                class="bx bx-user"></i>Đăng
                                            Ký</button>
                                    </div>
                                </div>
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
            driver_create: {}
        }
    },
    mounted() {

    },
    methods: {
        ActionDangky() {
            axios
                .post('http://127.0.0.1:8000/api/tai-xe/dang-ky', this.driver_create)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.driver_create = {};
                        this.$router.push('/taixechaydichvu/dang-nhap-tai-xe');
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
<style></style>
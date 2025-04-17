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
                            <h3 class="">Đăng Nhập</h3>
                            <p>Bạn chưa có tài khoản?
                                <router-link to="">
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
                                    <input v-model="client.email" type="email" class="form-control"
                                        placeholder="Nhập vào Email">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="client.password" type="password" class="form-control"
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
.class{
 background-color: black;
}
</style>
<template>
    <!-- <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div> -->
    <!-- * loader -->

    <!-- App Header -->
    <!-- <div class="appHeader">
        <div class="left">
            <a href="../../../assets/" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Settings
        </div>
        <div class="right">
            <a href="app-notifications.html" class="headerButton">
                <ion-icon class="icon" name="notifications-outline"></ion-icon>
                <span class="badge badge-danger">4</span>
            </a>
        </div>
    </div> -->
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section text-center">
            <div class="avatar-section">
                <a href="#">
                    <img src="../../../assets/img/ava.jpg" alt="avatar" style="width: 140px; height: 140px;" class="imaged  rounded">
                    <!-- <img v-bind:src="profile.hinh_anh" style="width: 140px; height: 140px;" class="ava-img mb-2" /> -->

                    <!-- <span class="button">
                        <i class="fa-solid fa-camera custom-icon"></i>
                    </span> -->
                </a>
            </div>
        </div>
        <div class="listview-title mt-1">Thông báo</div>
        <ul class="listview image-listview text inset">
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Thông báo
                            <div class="text-muted">
                                Gửi thông báo khi có hoạt động
                            </div>
                        </div>
                        <div class="form-check form-switch  ms-2">
                            <input class="form-check-input" type="checkbox" id="SwitchCheckDefault1">
                            <label class="form-check-label" for="SwitchCheckDefault1"></label>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Âm thanh thông báo</div>
                        <span class="text">Beep</span>
                    </div>
                </a>
            </li>
        </ul>

        <div class="listview-title mt-1">Chỉnh sửa hồ sơ</div>
        <ul class="listview image-listview text inset">
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Thay đổi Username
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Họ và Tên</label>
                                            <input type="text" class="form-control" v-model="profile.ho_ten"
                                                placeholder="Nhập họ và tên" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Cập nhật E-mail
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" v-model="profile.email"
                                                placeholder="Nhập email" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Cập nhật số điện thoại
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Số Điện Thoại</label>
                                            <input type="text" class="form-control" v-model="profile.so_dien_thoai"
                                                placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <!-- <a href="#" class="item">
                <div class="in">
                    <div>Cập nhật số điện thoại</div>
                </div>
            </a> -->
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                Thay đổi Địa chỉ
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Địa Chỉ</label>
                                            <input type="text" class="form-control" v-model="profile.dia_chi"
                                                placeholder="Nhập địa chỉ" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <!-- <a href="#" class="item">
                <div class="in">
                    <div>Địa chỉ</div>
                    <span class="text">Chỉnh sửa</span>
                </div>
            </a> -->
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                Căn Cước Công Dân
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">CCCD</label>
                                            <input type="text" class="form-control" v-model="profile.cccd"
                                                placeholder="Nhập cccd" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                Loại xe
                            </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Loại xe</label>
                                            <input type="text" class="form-control" v-model="profile.loai_xe"
                                                placeholder="Nhập loại xe" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                Biển số
                            </button>
                        </h2>
                        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Biển số</label>
                                            <input type="text" class="form-control" v-model="profile.bien_so"
                                                placeholder="Nhập biển số xe" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                Bằng lái xe
                            </button>
                        </h2>
                        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Bằng lái xe</label>
                                            <input type="text" class="form-control" v-model="profile.bang_lai_xe"
                                                placeholder="Nhập Bằng lái xe" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                Ngân hàng
                            </button>
                        </h2>
                        <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="mb-3">
                                            <label class="form-label">Ngân hàng</label>
                                            <input type="text" class="form-control" v-model="profile.ngan_hang"
                                                placeholder="Nhập ngân hàng" />
                                        </div>
                                        <div class="text-end">
                                            <button v-on:click="updateProfile()" type="button"
                                                class="btn btn-primary w-100 text-white">Cập
                                                Nhật</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Hiển thị hồ sơ
                        </div>
                        <div class="form-check form-switch ms-2">
                            <input class="form-check-input" type="checkbox" id="SwitchCheckDefault2">
                            <label class="form-check-label" for="SwitchCheckDefault2"></label>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="listview-title mt-1">Bảo mật</div>
        <ul class="listview image-listview text mb-2 inset">
            <li>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseElevent" aria-expanded="true" aria-controls="collapseElevent">
                                Cập nhật mật khẩu
                            </button>
                        </h2>
                        <div id="collapseElevent" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row p-1">
                                    <div class="col-lg-9">
                                        <div class="row mb-3">
                                            <div class="col-lg-2 ">
                                                <label class="mb-1" for="">Mật khẩu cũ</label>
                                            </div>
                                            <div class="col-lg-3">
                                                <input v-model="changepassword.old_password" type="password"
                                                placeholder="Nhập mật khẩu cũ" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-lg-2 ">
                                                <label class="mb-1" for="">Mật khẩu mới</label>
                                            </div>
                                            <div class="col-lg-3">
                                                <input v-model="changepassword.new_password" type="password"
                                                placeholder="Nhập mật khẩu mới" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-lg-2 ">
                                                <label class="mb-1" for="">Nhập lại Mật khẩu mới </label>
                                            </div>
                                            <div class="col-lg-3">
                                                <input v-model="changepassword.confirm_password" type="password"
                                                placeholder="Nhập lại mật khẩu mới" class="form-control">
                                            </div>
                                        </div>
                                        <button v-on:click="changePass()" class="btn btn-primary w-100">
                                            <h4 class="m-0 text-white">Cập nhật</h4>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </li>
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Xác thực 2 bước
                        </div>
                        <div class="form-check form-switch ms-2">
                            <input class="form-check-input" type="checkbox" id="SwitchCheckDefault3">
                            <label class="form-check-label" for="SwitchCheckDefault3"></label>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Dăng xuất tất cả thiết bị</div>
                    </div>
                </a>
            </li>
        </ul>


    </div>
    <!-- * App Capsule -->


    <!-- App Bottom Menu -->
    <!-- <div class="appBottomMenu">
        <a href="index.html" class="item">
            <div class="col">
                <ion-icon name="pie-chart-outline"></ion-icon>
                <strong>Overview</strong>
            </div>
        </a>
        <a href="app-pages.html" class="item">
            <div class="col">
                <ion-icon name="document-text-outline"></ion-icon>
                <strong>Pages</strong>
            </div>
        </a>
        <a href="app-components.html" class="item">
            <div class="col">
                <ion-icon name="apps-outline"></ion-icon>
                <strong>Components</strong>
            </div>
        </a>
        <a href="app-cards.html" class="item">
            <div class="col">
                <ion-icon name="card-outline"></ion-icon>
                <strong>My Cards</strong>
            </div>
        </a>
        <a href="app-settings.html" class="item active">
            <div class="col">
                <ion-icon name="settings-outline"></ion-icon>
                <strong>Settings</strong>
            </div>
        </a>
    </div> -->
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
                        Authorization: 'Bearer ' + localStorage.getItem("token_tai_xe")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.$router.push('/tai-xe-chay-dich-vu/dang-nhap-tai-xe')
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
.accordion {
    border: none !important;
}

.accordion-header {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.custom-icon {
    background-color: rgb(4, 125, 239);
    color: white;
    /* Màu icon */
    padding: 10px;
    /* Đệm cho đẹp */
    border-radius: 50%;
    /* Bo tròn nếu muốn tròn */
    font-size: 20px;
}

/* Màu nền khi được bật */
.form-check-input:checked {
    background-color: rgb(4, 125, 239) !important;
    border-color: rgb(4, 125, 239) !important;
}

/* Màu thanh trượt (nút tròn) */
.form-check-input:checked::before {
    background-color: #fff;
}

/* Thêm hiệu ứng mềm mại */
.form-check-input {
    transition: all 0.25s ease;
}
</style>
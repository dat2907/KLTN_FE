<template>
    <!-- <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div> -->
    <!-- * loader -->

    <!-- App Header -->
    <div class="appHeader">
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
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section mt-3 text-center">
            <div class="avatar-section">
                <a href="#">
                    <img src="../../../assets/img/avatar1.jpeg" alt="avatar" class="ava-img">
                    <span class="button">
                        <i class="fa-solid fa-camera custom-icon"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="listview-title mt-1">Thông báo</div>
        <ul class="listview image-listview text inset">
            <li>
                <div class="item">
                    <div class="in">
                        <div>Thông báo
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
                        <span class="text-muted">Beep</span>
                    </div>
                </a>
            </li>
        </ul>

        <div class="listview-title mt-1">Chỉnh sửa hồ sơ</div>
        <ul class="listview image-listview text inset">
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Thay đổi Username</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Cập nhật E-mail</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Cập nhật số điện thoại</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Địa chỉ</div>
                        <span class="text-muted">Chỉnh sửa</span>
                    </div>
                </a>
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
                <a href="#" class="item">
                    <div class="in">
                        <div>Cập nhật mật khẩu</div>
                    </div>
                </a>
            </li>
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Xác thực 2 bước
                        </div>
                        <div class="form-check form-switch ms-2">
                            <input class="form-check-input" type="checkbox" id="" checked />
                            <label class="form-check-label" for=""></label>
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
    <div class="appBottomMenu">
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
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style>
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
    background-color: #007bff !important;
    border-color: #007bff !important;
}

/* Màu viền khi focus */
.form-check-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}

/* Màu thanh trượt (nút tròn) */
.form-check-input:checked::before {
    background-color: #fff;
}

/* Thêm hiệu ứng mềm mại */
.form-check-input {
    transition: all 0.25s ease;
}

.listview-title{
    font-size: 1.1rem;
    font-weight: bold;
    margin: 5px 0;
    color: #000;
}

.ava-img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 5px solid rgb(4, 125, 239);
}
</style>
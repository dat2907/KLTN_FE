<template>
    <div class="modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <!-- profile box -->
                    <div class="profileBox pt-2 pb-2" v-if="isLoggedIn">
                        <div class="image-wrapper">
                            <!-- <img src="../../assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged w36" /> -->
                            <img src="../../../assets/img/ava.jpg" alt="image" class="imaged w36">

                        </div>
                        <div class="in">
                            <strong>{{ userName }}</strong>
                            <div class="text-muted">Khách hàng</div>
                        </div>
                        <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <i class="fa fa-times fa-2x text-white"></i>
                        </a>
                    </div>

                    <!-- profile box when not logged in -->
                    <div class="profileBox pt-2 pb-2" v-else>
                        <div class="image-wrapper">
                            <i class="fa fa-user-circle fa-2x text-primary"></i>
                        </div>
                        <div class="in">
                            <strong>Chưa đăng nhập</strong>
                            <div class="text-muted">Đăng nhập để sử dụng dịch vụ</div>
                        </div>
                        <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <i class="fa fa-times fa-2x text-black"></i>
                        </a>
                    </div>

                    <!-- menu for logged in users -->
                    <div v-if="isLoggedIn">
                        <div class="listview-title mt-1">Danh Mục</div>
                        <ul class="listview flush transparent no-line image-listview">
                            <li>
                                <a href="/client/dat-xe" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-car"></i>
                                    </div>
                                    <div class="in">
                                        Đặt xe
                                    </div>
                                </a>
                            </li>
                            <!-- <li>
                                <a href="/client/profile" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="in">Thông tin cá nhân</div>
                                </a>
                            </li> -->
                            <li>
                                <a href="/client/lich-su-chuyen-xe" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-history"></i>
                                    </div>
                                    <div class="in">Lịch sử chuyến xe</div>
                                </a>
                            </li>
                            <li v-if="isThanhToan">
                                <a href="/client/theo-doi-chuyen-di" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div class="in">Theo dõi chuyến đi</div>
                                </a>
                            </li>
                            <li>
                                <a href="/client/thanh-toan" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-credit-card"></i>
                                    </div>
                                    <div class="in">Thanh Toán</div>
                                </a>
                            </li>
                        </ul>

                        <!-- others for logged in users -->
                        <div class="listview-title mt-1">Khác</div>
                        <ul class="listview flush transparent no-line image-listview">
                            <li>
                                <a href="/client/cai-dat" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-cogs"></i>
                                    </div>
                                    <div class="in">Cài đặt</div>
                                </a>
                            </li>
                            <li>
                                <a href="/client/ho-tro-khach-hang" class="item">
                                    <div class="icon-boxx ">
                                        <i class="fas fa-comment-dots"></i>
                                    </div>
                                    <div class="in">Hỗ trợ</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="item" @click.prevent="logout">
                                    <div class="icon-boxx logout-icon">
                                        <i class="fas fa-sign-out-alt"></i>
                                    </div>
                                    <div class="in">Đăng xuất</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- menu for non-logged in users -->
                    <div v-else>
                        <div class="listview-title mt-1">Tài khoản</div>
                        <ul class="listview flush transparent no-line image-listview">
                            <li>
                                <a href="/client/dang-nhap" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-sign-in-alt"></i>
                                    </div>
                                    <div class="in">Đăng nhập</div>
                                </a>
                            </li>
                            <li>
                                <a href="/client/dang-ky" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-user-plus"></i>
                                    </div>
                                    <div class="in">Đăng ký</div>
                                </a>
                            </li>
                        </ul>

                        <div class="listview-title mt-1">Thông tin</div>
                        <ul class="listview flush transparent no-line image-listview">
                            <li>
                                <a href="/client/gioi-thieu" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="in">Giới thiệu</div>
                                </a>
                            </li>
                            <li>
                                <a href="/client/ho-tro" class="item">
                                    <div class="icon-boxx">
                                        <i class="fas fa-question-circle"></i>
                                    </div>
                                    <div class="in">Trợ giúp</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            isThanhToan: false,
            userName: ''
        }
    },
    mounted() {
        this.checkLoginStatus();
        this.checkThanhToanStatus();
    },
    methods: {
        checkThanhToanStatus() {
            const thanhToan = localStorage.getItem('da_thanh_toan');
            if (thanhToan === 'true') {
                this.isThanhToan = true;
            } else {
                this.isThanhToan = false;
            }
        },
        checkLoginStatus() {
            const token = localStorage.getItem('token_khach_hang');
            if (token) {
                this.isLoggedIn = true;
                this.userName = localStorage.getItem('ten_kh') || 'Người dùng';
            } else {
                this.isLoggedIn = false;
                this.userName = '';
            }
        },
        logout() {
            // Xóa token và thông tin người dùng
            localStorage.removeItem('token_khach_hang');
            localStorage.removeItem('ten_kh');

            // Cập nhật trạng thái đăng nhập
            this.isLoggedIn = false;
            this.userName = '';

            // Đóng sidebar
            document.getElementById('sidebarPanel').classList.remove('show');

            // Chuyển hướng về trang chủ
            this.$router.push('/');

            // Hiển thị thông báo
            if (this.$toast) {
                this.$toast.success('<b>Thông báo</b><span style="margin-top: 5px">Đăng xuất thành công</span>');
            }
        }
    }
};
</script>

<style scoped>
#sidebarPanel .modal-content {
    background: #fff;
    color: #000;
}

.profileBox {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eaeaea;
}

.image-wrapper {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.profileBox .in {
    flex: 1;
}

.sidebar-balance,
.action-group {
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: #fff;
    padding: 15px;
}

.action-group icon {
    color: #fff;
    font-size: 20px;
}

.icon-box {
    color: #fff;
}

.icon-boxx {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease;
}

.logout-icon {
    background: linear-gradient(135deg, #ff5e62, #ff9966);
}

.item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    transition: all 0.2s ease;
}

.item icon-boxx {
    flex-shrink: 0;
}

.item .in {
    margin-left: 12px;
    font-weight: 500;
}

#sidebarPanel .item:hover {
    background-color: rgba(0, 123, 255, 0.1);
    border-radius: 10px;
}

#sidebarPanel .item:hover .icon-boxx {
    transform: scale(1.1);
}

.listview-title {
    padding: 12px 20px 0;
    font-weight: 600;
    font-size: 1rem;
    color: #1e90ff;
}

.badge {
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: white;
    padding: 5px 5px;
    border-radius: 50%;
    font-size: 14px;
}

.text-primary {
    color: #007bff !important;
}
</style>

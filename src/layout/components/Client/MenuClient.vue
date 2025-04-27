<template>
    <div class="modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <!-- profile box -->
                    <div class="profileBox pt-2 pb-2">
                        <div class="image-wrapper">
                            <img src="../../../assets/img/avatar1.jpeg" alt="image" class="imaged w36" />
                        </div>
                        <div class="in">
                            <strong>Tên tài khoản</strong>
                            <div class="text-muted">id:022324124</div>
                        </div>
                    </div>
                    <!-- * profile box -->
                    <!-- balance -->
                    <!-- <div class="sidebar-balance">
                        <div class="listview-title">Tài Khoản</div>
                        <div class="in">
                            <h1 class="amount">500.000đ</h1>
                        </div>
                    </div> -->
                    <!-- * balance -->

                    <!-- action group -->
                    <!-- <div class="action-group">
                        <a href="/client/nap-tien" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-plus"></i>
                                </div>
                                Nạp
                            </div>
                        </a>
                        <a href="/Client/rut-tien" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-arrow-down"></i>
                                </div>
                                Rút
                            </div>
                        </a>
                        <a href="app-cards.html" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-credit-card"></i>
                                </div>
                                Thẻ của tôi
                            </div>
                        </a>
                    </div> -->
                    <!-- * action group -->

                    <!-- menu -->
                    <div class="listview-title mt-1">Danh Mục</div>
                    <!-- <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="index.html" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-chart-pie"></i>
                                </div>
                                <div class="in">
                                    Tổng quan
                                    <span class="badge">10</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="app-pages.html" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="in">Trang</div>
                            </a>
                        </li>
                        <li>
                            <a href="app-components.html" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-th-large"></i>
                                </div>
                                <div class="in">Thành phần</div>
                            </a>
                        </li>
                        <li>
                            <a href="app-cards.html" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-credit-card"></i>
                                </div>
                                <div class="in">Thẻ của tôi</div>
                            </a>
                        </li>
                    </ul> -->
                    <!-- * menu -->

                    <!-- others -->
                    <!-- <div class="listview-title mt-1">Khác</div> -->
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="/client/profile" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <div class="in">Profile</div>
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
                            <a href="/client/thanh-toan" class="item">
                                <div class="icon-boxx ">
                                    <i class="fas fa-comment-dots"></i>
                                </div>
                                <div class="in">Thanh Toán</div>
                            </a>
                        </li>
                        <li>
                            <a href="/Client/theo-doi-chuyen-di" class="item">
                                <div class="icon-boxx ">
                                    <i class="fas fa-comment-dots"></i>
                                </div>
                                <div class="in">Theo dõi chuyến đi</div>
                            </a>
                        </li>
                        <li>
                            <a href="app-login.html" class="item">
                                <div class="icon-boxx">
                                    <i class="fas fa-sign-out-alt"></i>
                                </div>
                                <div class="in">Đăng xuất</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
#sidebarPanel .modal-content {
    background: #fff;
    color: #000;
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
    .icon-box {
        display: flex;
        justify-content: center;
        /* Căn giữa theo chiều ngang */
        align-items: center;
        /* Căn giữa theo chiều dọc */
        color: #fff;
        width: 50px;
        /* hoặc giá trị phù hợp với giao diện bạn */
        height: 50px;
    }
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
    font-size: 20px;
}

.item {
    display: flex;
    align-items: center;
}

.item icon-boxx {
    flex-shrink: 0;
}

.item .in {
    margin-left: 12px;
}

#sidebarPanel .item:hover {
    background-color: rgba(0, 123, 255, 0.1);
    border-radius: 10px;
}

.listview-title {
    padding: 12px 20px 0;
    font-weight: 600;
    font-size: 1rem;
}

.badge {
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: white;
    padding: 5px 5px;
    border-radius: 50%;
    font-size: 14px;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}
</style>

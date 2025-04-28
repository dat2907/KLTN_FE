<template>
    <div class="modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <!-- profile box -->
                    <div class="profileBox pt-2 pb-2">
                        <div class="image-wrapper">
                            <img src="../../../assets/img/BiaClient.png" alt="image" class="imaged w36" />
                        </div>
                        <div class="in">
                            <strong>Admin</strong>
                            <div class="text-muted">id:022324124</div>
                        </div>
                        <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <i class="fa fa-times fa-2x text-black"></i>
                        </a>
                    </div>
                    <!-- * profile box -->
                    <!-- balance -->
                    <div class="sidebar-balance">
                        <div class="listview-title">Tài Khoản</div>
                        <div class="in">
                            <h1 class="amount">0đ</h1>
                        </div>
                    </div>
                    <!-- * balance -->

                    <!-- action group -->
                    <div class="action-group">
                        <a href="index.html" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-plus"></i>
                                </div>
                                Nạp
                            </div>
                        </a>
                        <a href="index.html" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-arrow-down"></i>
                                </div>
                                Rút
                            </div>
                        </a>
                        <!-- <a href="index.html" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                Gửi
                            </div>
                        </a> -->
                    </div>
                    <!-- * action group -->

                    <!-- menu -->
                    <div class="listview-title mt-1">Tùy Chọn</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="khach-hang" class="item">
                                <div class="icon-boxx">
                                    <i class="fa-solid fa-user-tie"></i>
                                </div>
                                <div class="in">
                                    Thông tin khách hàng
                                    <span class="badge"></span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="ma-giam-gia" class="item">
                                <div class="icon-boxx">
                                    <i class="fa-solid fa-ticket-simple"></i>
                                </div>
                                <div class="in">Mã Giảm Giá</div>
                            </a>
                        </li>
                        <li>
                            <a href="danh-sach-dat-xe" class="item">
                                <div class="icon-boxx">
                                    <i class="fa-solid fa-list"></i>
                                </div>
                                <div class="in">Danh Sách Đơn Đặt Xe</div>
                            </a>
                        </li>
                        <li>
                            <a href="tai-xe" class="item">
                                <div class="icon-boxx">
                                    <i class="fa-solid fa-bars-progress"></i>
                                </div>
                                <div class="in">Quản Lý Tài Xế</div>
                            </a>
                        </li>
                        <li>
                            <a href="thong-ke" class="item">
                                <div class="icon-boxx">
                                    <i class="fa-solid fa-chart-pie"></i>
                                </div>
                                <div class="in">Thống Kê</div>
                            </a>
                        </li>
                    </ul>
                    <!-- * menu -->

                    <!-- others -->
                    <div class="listview-title mt-1">Khác</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="dang-nhap" class="item">
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
</style>


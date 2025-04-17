<template>
    <div class="container">
        <div class="row">
            <div class="card rounded-4">
                <img src="https://i.pinimg.com/474x/b8/dd/8b/b8dd8bd829ba698fdff1fecc6de29c6d.jpg"
                    class="rounded-4 img-fluid" alt="..." style="height: 400px;">
                <div
                    class="position-absolute top-50 start-0 translate-middle-y fw-bold fs-5 bg-opacity-75 p-3 rounded-end ms-3">
                    <h1><i class="fa-solid fa-clock-rotate-left text-white"></i></h1>
                    <h1 class="text-white">QUẢN LÝ DANH SÁCH ĐƠN ĐẶT XE</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header bg-warning">
                        <h3 class="text-center align-middle">Danh Sách Đơn Đặt Xe<b></b></h3>
                    </div>
                    <div class="card-body">
                        <div class="input-group mt-3 w-100 mb-1">
                            <input type="text" class="form-control search-control border border-1 border-secondary"
                                placeholder="Search...">
                            <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                    class="bx bx-search"></i></span>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm
                                Kiếm</button>
                        </div>
                        <div class="table table-responsive">
                            <table class="table table-bordered ">
                                <thead class="bg-info">
                                    <tr>
                                        <th class="align-middle text-center ">STT</th>
                                        <th class="align-middle text-center ">Mã Đơn</th>
                                        <th class="align-middle text-center">Tên Khách Hàng</th>
                                        <th class="align-middle text-center ">Điểm Đón</th>
                                        <th class="align-middle text-center ">Điểm Đến</th>
                                        <th class="align-middle text-center ">Giá Tiền</th>
                                        <th class="align-middle text-center">Số điện thoại</th>
                                        <th class="align-middle text-center ">Loại Xe</th>
                                        <th class="align-middle text-center ">Ngày Tháng</th>
                                        <th class="align-middle text-center">Trạng thái</th>
                                        <th class="align-middle text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="align-middle text-center">1</td>
                                        <td class="align-middle text-center">VH-1111</td>
                                        <td class="align-middle text-center">Trần Văn Hóa</td>
                                        <td class="align-middle text-center">Cẩm Lệ</td>
                                        <td class="align-middle text-center">New Phương Đông</td>
                                        <td class="align-middle text-center">1.000.000đ</td>
                                        <td class="align-middle text-center">0395677407</td>
                                        <td class="align-middle text-center">Xe Máy</td>
                                        <td class="align-middle text-center">11/04/2025</td>
                                        <td class="align-middle text-center">
                                            <div class="d-flex justify-content-center gap-2">
                                                <button class="btn btn-success me-2">Đang hoạt động</button>
                                                <button class="btn btn-danger">Tạm Ngừng </button>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="d-flex justify-content-center gap-2">
                                                <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#Capnhatkhachhang">Cập nhật</button>
                                                <button class="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#xoaKhachhang"><i class="fa-solid fa-trash"></i>Xóa
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoikhachhang"><i
                                class="fa-solid fa-user-plus"></i>Thêm
                            mới
                            khách hàng</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Capnhatkhachhang -->
        <div class="modal fade" id="Capnhatkhachhang" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Cập nhật thông tin Khách Hàng</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label><b>Họ và tên</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập họ và tên">
                        <label><b>Số điện thoại</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Số điện thoại">
                        <label><b>Email</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Email">
                        <label><b>Tên tài khoản</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Tên tài khoản">
                        <label><b>Mật khẩu</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Mật khẩu">
                        <label><b>Ví Tiền</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập số dư">
                        <label><b>Trạng thái</b></label>
                        <select class="form-control mb-2">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Tạm Ngừng</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Cập nhật thông tin</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal xóa khach hang -->
        <div class="modal fade" id="xoaKhachhang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                </div>
                                <div class="ms-1">
                                    <h6 class="mb-1 text-white">Bạn chắc chắc xóa tài khoản khách hàng này chứ
                                        !!!</h6>
                                    <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi
                                        phục
                                        khi ấn xác nhận
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal Thêm mới khách hàng -->
        <div class="modal fade" id="themmoikhachhang" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Thêm mới Khách Hàng</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label><b>Họ và tên</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập họ và tên">
                        <label><b>Số điện thoại</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Số điện thoại">
                        <label><b>Email</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Email">
                        <label><b>Tên tài khoản</b></label>
                        <input type="text" class="form-control mb-2" placeholder="Nhập Tên tài khoản">
                        <label><b>Mật khẩu</b></label>
                        <input type="text" class="form-control" placeholder="Nhập Mật khẩu">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Thêm thông tin</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>
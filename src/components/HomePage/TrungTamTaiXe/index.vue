<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card rounded-4">
                    <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload-app-img-1-la.727a0272.png&w=3840&q=75"
                        class="rounded-4 img-fluid" alt="...">
                    <div
                        class="position-absolute top-50 end-0 translate-middle-y fw-bold fs-5 bg-opacity-75 p-3 rounded-end ms-3">
                        <h3 class="text-info"><i class="fa-solid fa-house-user"></i> Trung tâm tài xế</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="d-flex justify-content-start">
                <h3 class="me-5">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" href="#">
                        <i class="fa-solid fa-house-user"></i>
                    </a>
                </h3>
                <h3><b class="text-info">Trung tâm tài xế</b></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card rounded-4 position-relative overflow-hidden">
                    <img src="https://i.pinimg.com/736x/b8/1d/20/b81d2091aa65bd21fc787820d837ed75.jpg"
                        class="rounded-4 img-fluid" alt="..." style="height: 400px; object-fit: cover;">

                    <div
                        class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-3">
                        <h3 class="text-center">Cộng đồng tài xế</h3>
                        <h4>
                            <p class="text-center">Làm nên thành công của chúng tôi không thể thiếu những đóng
                                góp của bạn</p>
                        </h4>

                        <button style="width: 80%; 
                                padding: 10px;
                                font-size: 16px;
                                font-weight: bold;
                                border-radius: 8px;
                                text-align: center;
                                transition: all 0.3s ease-in-out;
                                opacity: 0.8;" class="btn btn-info btn-custom mb-2">Đăng ký làm tài xế xe máy</button>
                        <button style="width: 80%; 
                                padding: 10px;
                                font-size: 16px;
                                font-weight: bold;
                                border-radius: 8px;
                                text-align: center;
                                transition: all 0.3s ease-in-out;
                                opacity: 0.8;" class="btn btn-white btn-custom mb-2">Đăng ký làm tài xế taxi</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card rounded-4 position-relative overflow-hidden">
                    <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-1.4168f726.webp&w=1920&q=75"
                        class="rounded-4 img-fluid" alt="..." style="height: 400px; object-fit: cover;">
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <h5 class="text-center"><b class="text-warning">GIA NHẬP CỘNG ĐỒNG TÀI XẾ DN-GRAP</b></h5>
            <h2 class="text-center">Cổng tin tức và hỗ trợ</h2>
            <div class="text-center mb-3">
                <div class="d-flex flex-wrap justify-content-center gap-3">
                    <button @click="showSection('community')" class="btn btn-outline-info btn-custom">Cộng đồng</button>
                    <button @click="showSection('company')" class="btn btn-outline-info btn-custom">Công ty</button>
                    <button @click="showSection('offer')" class="btn btn-outline-info btn-custom">Ưu đãi</button>
                    <button @click="showSection('motorbikeDriver')" class="btn btn-outline-info btn-custom">Tài xế xe
                        máy DN-GRAP</button>
                    <button @click="showSection('taxiDriver')" class="btn btn-outline-info btn-custom">Tài xế taxi
                        DN-GRAP</button>
                    <button @click="showSection('driverManual')" class="btn btn-outline-info btn-custom">Cẩm nang tài
                        xế</button>
                </div>
            </div>
            <!-- giao diện thông tin các nút tương ứng  -->
            <div>
                <!-- giao diện cho nút cộng đòng  -->
                <div v-if="currentSection === 'community'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/21/d8/0f/21d80f7613f7a11206a1504fea307d77.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/474x/9d/38/07/9d3807748b647a8b51d7ace673950605.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/474x/58/a8/6b/58a86ba42e73f1410457f127d72bf5aa.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/474x/27/48/27/2748275a2c67902b5b8b87eddca11b6c.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- giao diện cho nút Công ty  -->
                <div v-if="currentSection === 'company'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- giao diện cho nút Ưu đãi -->
                <div v-if="currentSection === 'offer'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- giao diện cho nút Tài xế xe máy DN-GRAP  -->
                <div v-if="currentSection === 'motorbikeDriver'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- giao diện cho nút Tài xế taxi DN-GRAP -->
                <div v-if="currentSection === 'taxiDriver'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- giao diện cho nút Cẩm nang tài xế -->
                <div v-if="currentSection === 'driverManual'" class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow-lg border-0 rounded-4">
                            <div class="card-body p-3">
                                <img src="https://i.pinimg.com/736x/9e/09/41/9e0941d59698273caf79f5ed5cb44f89.jpg"
                                    class="rounded-4 img-fluid w-100" style="height: 200px; object-fit: cover;"
                                    alt="Hình ảnh minh họa">

                                <div class="mt-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <b class="text-muted me-3">28 March 2025</b>
                                        <button class="btn btn-outline-info btn-sm px-3">Mới</button>
                                    </div>
                                    <h3>
                                        <p class="fw-bold text-truncate">
                                            [Xanh Express] Hướng dẫn vận hành dịch vụ giao hàng Xanh Express 2h
                                        </p>
                                    </h3>
                                    <p class="text-truncate">
                                        Quý Đối tác Tài xế thân mến, Nhằm mở rộng dịch vụ, mang đến nhiều lựa chọn cho
                                        Khách...
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer  border-0 text-center">
                                <button class="btn btn-info w-100 btn-custom">Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Phần câu hỏi thường gặp -->
        <div class="row mt-5">
            <h3 class="text-center"><b class="text-warning">CÂU HỎI THƯỜNG GẶP</b></h3>
            <h4 class="text-center"><b>Tìm hiểu sâu hơn về DN-GRAP</b></h4>

            <div class="col-lg-3 col-md-6 mt-3 d-flex">
                <div class="card shadow-lg border-0 rounded-4 text-center p-4 h-100 w-100">
                    <div class="card-body d-flex flex-column">
                        <h1 class="text-primary mb-3"><i class="fa-solid fa-handshake"></i></h1>
                        <h3 class="fw-bold">Đối tác / Doanh nghiệp</h3>
                        <p class="fst-italic text-muted mt-2">
                            Bạn là doanh nghiệp tiên phong tham gia cùng DN-GRAP
                        </p>
                        <a href="#" class="text-decoration-none fw-bold text-info d-inline-block mt-auto">
                            Xem thêm <i class="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-3 d-flex">
                <div class="card shadow-lg border-0 rounded-4 text-center p-4 h-100 w-100">
                    <div class="card-body d-flex flex-column">
                        <h1 class="text-success mb-3"><i class="fa-solid fa-newspaper"></i></h1>
                        <h3 class="fw-bold">Tin tức & ưu đãi</h3>
                        <p class="fst-italic text-muted mt-2">
                            Các hoạt động và chương trình ưu đãi mỗi ngày
                        </p>
                        <a href="#" class="text-decoration-none fw-bold text-info d-inline-block mt-auto">
                            Xem thêm <i class="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-3 d-flex">
                <div class="card shadow-lg border-0 rounded-4 text-center p-4 h-100 w-100">
                    <div class="card-body d-flex flex-column">
                        <h1 class="text-danger mb-3"><i class="fa-solid fa-car"></i></h1>
                        <h3 class="fw-bold">Trung tâm tài xế</h3>
                        <p class="fst-italic text-muted mt-2">
                            Bạn cần tìm công việc đào tạo bài bản, mức lương ổn định
                        </p>
                        <a href="#" class="text-decoration-none fw-bold text-info d-inline-block mt-auto">
                            Xem thêm <i class="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-3 d-flex">
                <div class="card shadow-lg border-0 rounded-4 text-center p-4 h-100 w-100">
                    <div class="card-body d-flex flex-column">
                        <h1 class="text-warning mb-3"><i class="fa-solid fa-life-ring"></i></h1>
                        <h3 class="fw-bold">Trung tâm hỗ trợ</h3>
                        <p class="fst-italic text-muted mt-2">
                            Tìm hiểu chi tiết các chính sách, điều khoản hoạt động của DN-GRAP
                        </p>
                        <a href="#" class="text-decoration-none fw-bold text-info d-inline-block mt-auto">
                            Xem thêm <i class="fa-solid fa-arrow-right ms-1"></i>
                        </a>
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
            currentSection: '', // Biến để lưu tên của phần giao diện hiện tại
        };
    },
    methods: {
        // Hàm này sẽ thay đổi giao diện khi bấm vào các nút
        showSection(section) {
            this.currentSection = section;
        }
    }
}
</script>
<style></style>

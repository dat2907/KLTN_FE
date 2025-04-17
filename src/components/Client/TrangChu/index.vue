<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- phần ảnh slide đầu -->
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://airtechthelong.com.vn/wp-content/uploads/2016/03/tai-hinh-nen-sieu-xe-full-hd-cho-may-tinh-laptop-mien-phi-9.jpg"
                                class="d-block w-100" alt="..." style="height: 600px;">
                        </div>
                        <div class="carousel-item">
                            <img src="https://images5.1000ps.net/images_bikekat/2023/2-Honda/177-SH125i/003-638094704989787829-honda-sh125i.jpg"
                                class="d-block w-100" alt="..." style="height: 500px;">
                        </div>
                        <div class="carousel-item">
                            <img src="https://d29c80i09kxy2a.cloudfront.net/custom/blog-post/original/honda-airblade-160-first-ride-impressions-63115d50b48e3.jpg"
                                class="d-block w-100" alt="..." style="height: 600px;">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <!-- Các dịch vụ -->
        <div class="row mt-5">
            <div class="col-lg-6">
                <h4><b class="text-warning">KHÁM PHÁ</b></h4>
                <h2 class="mt-2">Hệ sinh thái dịch vụ 5 sao</h2>
                <h4>
                    <p class="fw-normal mt-3">Trải nghiệm ngay những chuyến xe không tiếng ồn cùng nhiều ưu đãi</p>
                </h4>
                <button class="btn btn-outline-info rounded-pill me-3" @click="Chuyendoi = 'nguoidung'">Người
                    Dùng</button>
                <button class="btn btn-outline-info rounded-pill" @click="Chuyendoi = 'doanhnghiep'">Doanh
                    Nghiệp</button>
                <!-- Người dùng -->
                <div class="row" v-if="Chuyendoi === 'nguoidung'">
                    <div class="col-lg-6 mt-3">
                        <!-- XE bình thường  -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-taxi-icon.7ffb83a2.webp&w=256&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Car Normal</b>
                            </div>
                            <p class="mt-2 card-text">Trải nghiệm ngay những chuyến xe tiếng ồn cùng nhiều ưu đãi</p>
                            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="#">
                                Xem chi tiết <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <!-- xe cao cấp -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-premium-icon.1ed4ee88.png&w=256&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Car Premium</b>
                            </div>
                            <p class="mt-2 card-text">Trải nghiệm ngay những chuyến xe cao cấp , cùng nhiều ưu đãi</p>
                            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="#">
                                Xem chi tiết <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-3">
                        <!-- xe máy -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-bike-icon.3fe0b7d3.webp&w=256&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Bike</b>
                            </div>
                            <p class="mt-2 card-text">Tiên phong di chuyển phong cách, nhanh chóng an toàn</p>
                            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="#">
                                Xem chi tiết <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <!-- giao hàng -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-express-icon.d162a616.webp&w=256&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Express</b>
                            </div>
                            <p class="mt-2 card-text">Giao hàng siêu tốc với chi phí tối ưu , nhiều voucher khủng</p>
                            <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill">Sắp ra mắt
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Doanh Nghiệp -->
                <div class="row" v-if="Chuyendoi === 'doanhnghiep'">
                    <div class="col-lg-6 mt-3">
                        <!-- XE Partner -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-van-doanh-icon.1aa8833f.webp&w=96&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Car Partner</b>
                            </div>
                            <p class="mt-2 card-text">Dành cho đối tác kinh doanh dịch vụ taxi</p>
                            <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill">Sắp ra mắt
                            </button>
                        </div>
                        <!-- Thẻ doanh nghiệp -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-payment-icon.1b1e3fed.webp&w=96&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Thẻ doanh nghiệp</b>
                            </div>
                            <p class="mt-2 card-text">Ưu đãi thanh toán đặc quyền dành cho doanh nghiệp</p>
                            <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill">Sắp ra mắt
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-3">
                        <!--Ads -->
                        <div class="text-center">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-ads-icon.a16c492a.webp&w=96&q=75"
                                style="height: 100px;" alt="">
                            <div class="mt-2">
                                <b>Ads</b>
                            </div>
                            <p class="mt-2 card-text">Quảng cáo gia tăng nhận diện thương hiệu </p>
                            <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill">Sắp ra mắt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.pinimg.com/736x/8b/a9/6a/8ba96a2503ffd86bd45c298a9e60ca5d.jpg"
                                class="d-block w-100" alt="..." style="height: 700px;">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/736x/b7/c5/d3/b7c5d35f5039dcb0f6a2f2e248e0ddb2.jpg"
                                class="d-block w-100" alt="..." style="height: 700px;">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/736x/35/71/3d/35713d04e681f55396185534d4fd58f7.jpg"
                                class="d-block w-100" alt="..." style="height: 700px;">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <!-- Hành trình của thương hiệu -->
        <div class="container mt-5">
            <div class="row mt-5">
                <h3 class="text-center"><b class="text-warning">HÀNH TRÌNH THƯƠNG HIỆU</b></h3>
                <h1 class="text-center"><b>Cảm ơn bạn đã đồng hành cùng chúng tôi
                        qua những dấu ấn</b></h1>
                <div class="col-lg-3 d-flex flex-column mt-3">
                    <div class="text-center">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAchievement1.3ab6fe29.webp&w=96&q=75"
                            class="rounded-circle" alt="...">
                        <h3 class="mt-3"><b>Chưa có </b></h3>
                        <p class="mt-3">Tài xế tiên phong hành trình chuyển đổi</p>
                    </div>
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                    <div class="text-center mt-5">
                        <h1><i class="fa-solid fa-heart text-danger"></i></h1>
                        <h3 class="mt-3"><b>1.000</b></h3>
                        <p class="mt-3">Hoạt động đẹp cùng cộng đồng</p>
                    </div>
                </div>
                <div class="col-lg-3 d-flex flex-column mt-3">
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                    <div class="text-center mt-5">
                        <h1><i class="fa-solid fa-heart"></i></h1>
                        <h3 class="mt-3"><b>1.000</b></h3>
                        <p class="mt-3">Tài xế Xanh tiên phong hành trình chuyển đổi</p>
                    </div>
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                </div>
                <div class="col-lg-3 d-flex flex-column mt-3">
                    <div class="text-center">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAchievement1.3ab6fe29.webp&w=96&q=75"
                            class="rounded-circle" alt="...">
                        <h3 class="mt-3"><b>1.000</b></h3>
                        <p class="mt-3">Tài xế Xanh tiên phong hành trình chuyển đổi</p>
                    </div>
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                    <div class="text-center mt-5">
                        <h1><i class="fa-solid fa-earth-americas text-primary"></i></h1>
                        <h3 class="mt-3"><b>1</b></h3>
                        <p class="mt-3">Quốc gia được phủ sóng</p>
                    </div>
                </div>
                <div class="col-lg-3 d-flex flex-column mt-3">
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                    <div class="text-center mt-5">
                        <h1><i class="fa-solid fa-globe text-success"></i></h1>
                        <h3 class="mt-3"><b>0 1</b></h3>
                        <p class="mt-3">Doanh nghiệp sử dụng dịch vụ</p>
                    </div>
                    <div class="text-center mt-5">
                        <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                            alt="" style="height: 200px;width: 200px;">
                    </div>
                </div>
            </div>
        </div>
        <!-- Đăng kí gia nhập -->
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6">
                    <h4><b class="text-warning">ĐĂNG KÝ GIA NHẬP</b></h4>
                    <h2 class="mt-2"><b>Cộng đồng tài xế cảu chúng tôi</b></h2>
                    <div class="card-text mt-3">
                        <h5> Chúng tôi xin chào đón các tài xế gia nhập cộng đồng đối tác Tài xế để trở thành những
                            tài xế tiên phong mang sứ mệnh phổ cập trải nghiệm di chuyển điện hoá và lan toả lối sống
                            đến với cộng đồng.</h5>
                    </div>
                    <button class="mt-4 btn btn-info">Ứng tuyển ngay <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="col-lg-6">
                    <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdriver-taxi-register.bb2ac46b.png&w=3840&q=75"
                        style="height: 300px; width: 600px;" alt="">
                </div>
            </div>
        </div>
        <!-- Đăng kí làm nhà sáng tạo -->
        <div class="contaienr mt-5">
            <div class="row">
                <div class="text-center">
                    <h3><b class="text-warning">TRANG CREATOR</b></h3>
                    <h2><b>SÁNG TẠO CÙNG CHÚNG TÔI</b></h2>
                </div>
                <div class="col-lg-4 mt-5">
                    <div class="text-center">
                        <h2><i class="fa-solid fa-eye text-primary"></i></h2>
                        <h1>1.000.000</h1>
                        <h4><b>Lượt xem</b></h4>
                    </div>
                </div>
                <div class="col-lg-4 mt-5">
                    <div class="text-center">
                        <h2><i class="fa-solid fa-video text-danger"></i></h2>
                        <h1>500.000</h1>
                        <h4><b>Nội dung sáng tạo</b></h4>
                    </div>
                </div>
                <div class="col-lg-4 mt-5">
                    <div class="text-center">
                        <h2><i class="fa-solid fa-money-bills text-success"></i></h2>
                        <h1>10.000.000đ</h1>
                        <h4><b>Tiền hoa hồng được xác nhận </b></h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Các chiến dịch -->
        <div class="container mt-5">
            <h2 class="text-center fw-bold">Các chiến dịch đang chạy</h2>
            <div class="d-flex justify-content-center mt-4">
                <div class="position-relative">
                    <!-- Hình ảnh đầu trang -->
                    <img src="https://i.pinimg.com/736x/72/ef/8d/72ef8d35e9b9a1f5370343a169182466.jpg"
                        style="height: 500px; width: 1200px;" alt="">
                    <!-- Khối nội dung -->
                    <div class="w-100 position-absolute start-50 translate-middle-x"
                        style="bottom: -30px; padding: 20px; max-width: 95%;">
                        <div class="p-4 bg-white rounded-3 d-flex justify-content-between ">
                            <b class="card-text ">
                                Là chương trình khuyến khích các nhà sáng tạo nội dung (content creator)
                                trên mạng xã hội giới thiệu và lan tỏa tinh thần lái xe xanh đến cộng đồng thông qua nội
                                dung do chính nhà sáng tạo sản xuất.
                            </b>
                            <button class="btn btn-primary">Tham gia ngay <i
                                    class="fa-solid fa-arrow-right"></i></button>
                        </div>
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
            Chuyendoi: 'nguoidung' // Mặc định là tab Người dùng
        };
    }
}
</script>
<style></style>
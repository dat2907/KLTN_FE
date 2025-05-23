<template>
    <div>
        <div class="hero-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="hero-content">
                            <h1 class="display-4 fw-bold mb-3 animate__animated animate__fadeInUp text-white">Dịch Vụ
                                Vận Chuyển Hiện Đại</h1>
                            <p class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s text-white">Kết
                                nối đơn giản, di chuyển an toàn và tiện lợi với dịch vụ của chúng tôi</p>
                            <div class="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
                                <button class="btn btn-light btn-lg me-3">Khám Phá Ngay</button>
                                <button class="btn btn-outline-light btn-lg">Tìm Hiểu Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="hero-image">
                            <img src="https://i.pinimg.com/736x/d9/3a/d6/d93ad6ac0983814821853f71a975e9f5.jpg"
                                alt="Hero" class="img-fluid rounded-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Các dịch vụ -->
        <div class="services-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="section-header">
                            <span class="text-primary fw-bold text-uppercase">KHÁM PHÁ</span>
                            <h2 class="fs-1 fw-bold mt-2">Hệ sinh thái dịch vụ 5 sao</h2>
                            <p class="lead mt-3">Trải nghiệm ngay những chuyến xe không tiếng ồn cùng nhiều ưu đãi</p>
                        </div>

                        <div class="tab-buttons mt-3 mb-3">
                            <button class="btn btn-tab me-3" :class="{ 'active': Chuyendoi === 'nguoidung' }"
                                @click="Chuyendoi = 'nguoidung'">
                                <i class="fas fa-user me-2"></i>Người Dùng
                            </button>
                            <button class="btn btn-tab" :class="{ 'active': Chuyendoi === 'doanhnghiep' }"
                                @click="Chuyendoi = 'doanhnghiep'">
                                <i class="fas fa-building me-2"></i>Doanh Nghiệp
                            </button>
                        </div>

                        <!-- Người dùng -->
                        <div class="services-container" v-if="Chuyendoi === 'nguoidung'">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <!-- XE bình thường  -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-taxi-icon.7ffb83a2.webp&w=256&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Car Normal</h4>
                                        <p class="service-text">Trải nghiệm ngay những chuyến xe tiếng ồn cùng nhiều ưu
                                            đãi</p>
                                        <a class="service-link" href="#">
                                            Xem chi tiết <i class="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- xe cao cấp -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-premium-icon.1ed4ee88.png&w=256&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Car Premium</h4>
                                        <p class="service-text">Trải nghiệm ngay những chuyến xe cao cấp, cùng nhiều ưu
                                            đãi</p>
                                        <a class="service-link" href="#">
                                            Xem chi tiết <i class="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- xe máy -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-bike-icon.3fe0b7d3.webp&w=256&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Bike</h4>
                                        <p class="service-text">Tiên phong di chuyển phong cách, nhanh chóng an toàn</p>
                                        <a class="service-link" href="#">
                                            Xem chi tiết <i class="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- giao hàng -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-express-icon.d162a616.webp&w=256&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Express</h4>
                                        <p class="service-text">Giao hàng siêu tốc với chi phí tối ưu, nhiều voucher
                                            khủng</p>
                                        <a class="service-link coming-soon" href="#">
                                            Sắp ra mắt
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Doanh Nghiệp -->
                        <div class="services-container" v-if="Chuyendoi === 'doanhnghiep'">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <!-- XE Partner -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-van-doanh-icon.1aa8833f.webp&w=96&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Car Partner</h4>
                                        <p class="service-text">Dành cho đối tác kinh doanh dịch vụ taxi</p>
                                        <button type="button" class="btn btn-sm rounded-pill coming-soon-btn">Sắp ra
                                            mắt</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Thẻ doanh nghiệp -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-payment-icon.1b1e3fed.webp&w=96&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Thẻ doanh nghiệp</h4>
                                        <p class="service-text">Ưu đãi thanh toán đặc quyền dành cho doanh nghiệp</p>
                                        <button type="button" class="btn btn-sm rounded-pill coming-soon-btn">Sắp ra
                                            mắt</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!--Ads -->
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-service-ads-icon.a16c492a.webp&w=96&q=75"
                                                alt="">
                                        </div>
                                        <h4 class="service-title">Ads</h4>
                                        <p class="service-text">Quảng cáo gia tăng nhận diện thương hiệu</p>
                                        <button type="button" class="btn btn-sm rounded-pill coming-soon-btn">Sắp ra
                                            mắt</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-3">
                        <div id="carouselExample" class="carousel slide service-carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://i.pinimg.com/736x/8b/a9/6a/8ba96a2503ffd86bd45c298a9e60ca5d.jpg"
                                        class="d-block w-100" alt="..." loading="lazy">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://i.pinimg.com/736x/b7/c5/d3/b7c5d35f5039dcb0f6a2f2e248e0ddb2.jpg"
                                        class="d-block w-100" alt="..." loading="lazy">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://i.pinimg.com/736x/35/71/3d/35713d04e681f55396185534d4fd58f7.jpg"
                                        class="d-block w-100" alt="..." loading="lazy">
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
            </div>
        </div>

        <!-- Hành trình của thương hiệu -->
        <div class="journey-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class=" fw-bold text-uppercase">HÀNH TRÌNH THƯƠNG HIỆU</h2>
                        <h1 class="display-5 fw-bold">Cảm ơn bạn đã đồng hành cùng chúng tôi qua những dấu ấn</h1>
                    </div>
                </div>

                <div class="row achievement-row">
                    <div class="col-lg-3 d-flex flex-column mb-1">
                        <div class="achievement-card">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAchievement1.3ab6fe29.webp&w=96&q=75"
                                class="achievement-icon" alt="...">
                            <h3 class="mt-3"><b>Chưa có </b></h3>
                            <p class="mt-3">Tài xế tiên phong hành trình chuyển đổi</p>
                        </div>
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                        <div class="achievement-card mt-5">
                            <div class="achievement-icon-wrapper">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3 class="mt-3"><b>1.000</b></h3>
                            <p class="mt-3">Hoạt động đẹp cùng cộng đồng</p>
                        </div>
                    </div>

                    <!-- Dữ liệu các phần khác giữ nguyên -->
                    <div class="col-lg-3 d-flex flex-column mb-1">
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                        <div class="achievement-card mt-5">
                            <div class="achievement-icon-wrapper">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3 class="mt-3"><b>1.000</b></h3>
                            <p class="mt-3">Tài xế Xanh tiên phong hành trình chuyển đổi</p>
                        </div>
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 d-flex flex-column mb-1">
                        <div class="achievement-card">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAchievement1.3ab6fe29.webp&w=96&q=75"
                                class="achievement-icon" alt="...">
                            <h3 class="mt-3"><b>1.000</b></h3>
                            <p class="mt-3">Tài xế Xanh tiên phong hành trình chuyển đổi</p>
                        </div>
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                        <div class="achievement-card mt-5">
                            <div class="achievement-icon-wrapper">
                                <i class="fas fa-earth-americas"></i>
                            </div>
                            <h3 class="mt-3"><b>1</b></h3>
                            <p class="mt-3">Quốc gia được phủ sóng</p>
                        </div>
                    </div>
                    <div class="col-lg-3 d-flex flex-column mb-1">
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                        <div class="achievement-card mt-5">
                            <div class="achievement-icon-wrapper">
                                <i class="fas fa-globe"></i>
                            </div>
                            <h3 class="mt-3"><b>01</b></h3>
                            <p class="mt-3">Doanh nghiệp sử dụng dịch vụ</p>
                        </div>
                        <div class="achievement-image mt-3">
                            <img src="https://www.xanhsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievement-6.8dc5cc34.webp&w=640&q=75"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phần nội dung khác từ trang ban đầu -->
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
<style scoped>
/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, #0062E6, #33AEFF);
    color: white;
    padding: 30px 10px !important;
    margin-top: 0;
}

/* .hero-content {
    padding-right: 30px;
    margin-bottom: 20px !important;
} */

.hero-image img {
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.hero-image img:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Services Section */
.services-section {
    background-color: #f8f9fa;
    padding: 30px 10px !important;

}

.section-header span {
    font-size: 1.1rem;
    letter-spacing: 1.5px;
}

.tab-buttons {
    margin-bottom: 30px;
}

.btn-tab {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: white;
    color: #333;
    border: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-tab.active {
    background: linear-gradient(to right, #0062E6, #33AEFF);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 98, 230, 0.2);
}

.services-container {
    margin-top: 30px;
}

.service-card {
    background: #fff;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: all 0.3s ease;
}

.service-icon img {
    max-width: 100%;
    max-height: 100%;
    transition: all 0.3s ease;
}

.service-card:hover .service-icon img {
    transform: scale(1.1);
}

.service-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #333;
}

.service-text {
    color: #666;
    margin-bottom: 20px;
    flex-grow: 1;
}

.service-link {
    color: #0062E6;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.service-link:hover {
    color: #004db3;
    transform: translateX(5px);
}

.service-link i {
    transition: all 0.3s ease;
}

.service-link:hover i {
    transform: translateX(5px);
}

.coming-soon {
    color: #6c757d;
    cursor: not-allowed;
}

.coming-soon-btn {
    background: #f8f9fa;
    color: #6c757d;
    border: 1px solid #e9ecef;
    padding: 8px 16px;
    font-weight: 600;
    cursor: not-allowed;
}

.service-carousel {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-carousel .carousel-item img {
    height: 550px;
    object-fit: cover;
}

/* Journey Section */
.journey-section {
    background-color: white;
}

.journey-section h2 {
    color: #0062E6;
}

.achievement-row {
    /* margin-top: 50px; */
    padding: 30px 10px !important;

}

.achievement-card {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.achievement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.achievement-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s ease;
}

.achievement-icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(to right, #0062E6, #33AEFF);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 2rem;
    color: white;
}

.achievement-image {
    text-align: center;
    transition: all 0.3s ease;
    
}

.achievement-image img {
    max-width: 100%;
    height: auto;
    /* height: 90vh; */
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.achievement-image:hover img {
    transform: scale(1.05);
}

/* Media Queries */
@media (max-width: 991.98px) {
    .hero-section {
        padding: 60px 0;
    }

    .hero-content {
        padding-right: 0;
        margin-bottom: 40px;
    }

    .service-carousel .carousel-item img {
        height: 400px;
    }
}

@media (max-width: 767.98px) {
    .achievement-row .col-lg-3 {
        margin-bottom: 30px;
    }
}
</style>

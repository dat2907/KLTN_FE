<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card rounded-4">
                    <img src="https://i.pinimg.com/736x/ef/b2/21/efb22136589b09804ebe1e60f44de964.jpg"
                        class="rounded-4 img-fluid" alt="..." style="height: 400px;">
                    <div
                        class="position-absolute top-50 start-0 translate-middle-y fw-bold fs-5 bg-opacity-75 p-3 rounded-end ms-3">
                        <h1> <i class="fa-solid fa-life-ring text-white"></i></h1>
                        <h1 class="text-white">Trung tâm hỗ trợ </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="d-flex justify-content-start">
                <h3 class="me-5">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" href="#">
                        <i class="fa-solid fa-house-user"></i>
                    </a>
                </h3>
                <h3><b class="text-info">Trung tâm hỗ trợ </b></h3>
            </div>
        </div>
        <div class="row mt-5 text-center">
            <h4 class="text-warning fw-bold">TÌM KIẾM</h4>
            <h2 class="fw-bold">Chúng tôi có thể giúp gì cho bạn?</h2>

            <!-- Input tìm kiếm -->
            <div class="col-md-8 mx-auto">
                <div class="input-group shadow-sm rounded-pill overflow-hidden mt-3">
                    <span class="input-group-text bg-white border-0 px-3">
                        <i class="fa-solid fa-search text-muted"></i>
                    </span>
                    <input type="text" class="form-control border-0 shadow-none"
                        placeholder="Tìm kiếm với từ khóa hoặc câu hỏi ..." style="font-size: 16px; padding: 12px;">
                </div>
            </div>

            <!-- Phần button -->
            <div class="col-md-10 mx-auto mt-4">
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Tôi gặp tai nạn/sự cố nghiêm trọng trong chuyến xe
                    </button>
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Di chuyển an toàn cùng bảo hiểm chuyến đi Xanh SM Care
                    </button>
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Tôi nên làm gì khi thấy chuyến xe không an toàn
                    </button>
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Thông tin tài xế và xe không giống trên ứng dụng
                    </button>
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Tài xế có thái độ khiếm nhã, hành vi quấy rối tôi
                    </button>
                    <button class="btn btn-info text-white px-3 py-2 rounded-pill fw-bold">
                        Tài xế lái xe không an toàn
                    </button>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <h4 class="text-warning fw-bold text-center">DANH MỤC</h4>
            <h2 class="fw-bold text-center">Các vấn đề thường gặp</h2>
            <!-- phần nút bấm để hiên thông tin  -->
            <div class="col-lg-4 mt-3 d-flex flex-column mb-3">
                <button class="btn btn-outline-secondaryn category-btn p-2 text-start mt-2 align-middle">
                    <h3>Dành cho khách hàng</h3>
                </button>
                <button class="btn btn-outline-secondaryn category-btn p-2 text-start mt-2 align-middle">
                    <h3>Dành cho tài xế xe máy</h3>
                </button>
                <button class="btn btn-outline-secondaryn category-btn p-2 text-start mt-2 align-middle">
                    <h3>Dành cho tài xế taxi</h3>
                </button>
            </div>
            <!-- Phần hiện thông tin   -->
            <div class="col-lg-8 mt-3">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until
                                the collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
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
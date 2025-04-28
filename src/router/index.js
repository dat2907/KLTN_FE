import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import Login from "../layout/wrapper/Login.vue";

const routes = [
  {
    path: "/",
    component: () => import("../components/HomePage/TrangChu/index.vue"),
  },
  //Home Page
  {
    path: "/homepage/trang-chu",
    component: () => import("../components/HomePage/TrangChu/index.vue"),
  },
  {
    path: "/homepage/trung-tam-ho-tro",
    component: () => import("../components/HomePage/TrungTamHoTro/index.vue"),
  },
  {
    path: "/homepage/trung-tam-tai-xe",
    component: () => import("../components/HomePage/TrungTamTaiXe/index.vue"),
  },

  //Admin
  {
    path: "/admin/khach-hang",
    component: () => import("../components/Admin/KhachHang/index.vue"),
    meta: { layout: "admin" },
  },
  {

    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),
    meta: { layout: "new" },
  },
  {
    path: "/admin/danh-sach-dat-xe",
    component: () => import("../components/Admin/QLDatXe/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/tai-xe",
    component: () => import("../components/Admin/TaiXe/index.vue"),
    meta: { layout: "admin" },
  },   

  {
    path: "/admin/ma-giam-gia",
    component: () => import("../components/Admin/MaGiamGia/index.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/thong-ke",
    component: () => import("../components/Admin/ThongKeKH/index.vue"),
    meta: { layout: "admin" },
  },

  //Client
  {
    path: "/client/trang-chu",
    component: () => import("../components/Client/TrangChu/index.vue"),
    meta: { layout: "client" },
  },

  {
    path: "/client/dang-ky",
    component: () => import("../components/Client/DangKy/index.vue"),
    meta: { layout: "new" },
  },

  {
    path: "/client/dang-nhap",
    component: () => import("../components/Client/DangNhap/index.vue"),
    meta: { layout: "new" },
  },
  {
    path: "/client/profile",
    component: () => import("../components/Client/Profile/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/client/cai-dat",
    component: () => import("../components/Client/CaiDat/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/client/vi-tien",
    component: () => import("../components/Client/ViTien/index.vue"),
    meta: { layout: "client" },
  },

  {
    path: "/client/lich-su-chuyen-xe",
    component: () => import("../components/Client/LichSuChuyenXe/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/client/dat-xe",
    component: () => import("../components/Client/DatXe/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: '/Client/nap-tien',
    component: () => import('../components/Client/ViTien/naptien.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/Client/lich-su-giao-dich',
    component: () => import('../components/Client/ViTien/lichsugiaodich.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/Client/rut-tien',
    component: () => import('../components/Client/ViTien/ruttien.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/Client/theo-doi-chuyen-di',
    component: () => import('../components/Client/Theodoichuyendi/index.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/Client/lich-su-chuyen-xe',
    component: () => import('../components/Client/LichSuChuyenXe/index.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/Client/ho-tro-khach-hang',
    component: () => import('../components/Client/HoTroKhachHang/index.vue'),
    meta: { layout: "client" },
  },
  //taixe
  {
    path: "/taixechaydichvu/profile-taixe",
    component: () =>
      import("../components/TaiXeChayDichVu/ProfileTaiXe/index.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/vi-tien-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/ViTienTaiXe/index.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/nap-tien",
    component: () =>
      import("../components/TaiXeChayDichVu/ViTienTaiXe/nap.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/lich-su-giao-dich",
    component: () =>
      import("../components/TaiXeChayDichVu/ViTienTaiXe/lichsunaprut.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/rut-tien",
    component: () =>
      import("../components/TaiXeChayDichVu/ViTienTaiXe/rut.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/cai-dat",
    component: () =>
      import("../components/TaiXeChayDichVu/CaiDat/index.vue"),
    meta: { layout: "taixe" },
  },
  {
    path: "/taixechaydichvu/dang-ki-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/DangKyTaiXe/index.vue"),
    meta: { layout: "new" },
  },
  {
    path: "/taixechaydichvu/dang-nhap-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/DangNhapTaiXe/index.vue"),
    meta: { layout: "new" },
  },
  {
    path: "/taixechaydichvu/nhan-chuyen-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/NhanChuyenXe/index.vue"),
    meta: { layout: "taixe" },
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

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
  },
  {

    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),

    path: "/admin/danh-sach-dat-xe",
    component: () => import("../components/Admin/QLDatXe/index.vue"),

  },

  {
    path: "/admin/tai-xe",
    component: () => import("../components/Admin/TaiXe/index.vue"),
  },

  {
    path: "/admin/ma-giam-gia",
    component: () => import("../components/Admin/MaGiamGia/index.vue"),
  },

  //Client
  {
    path: "/client/trang-chu",
    component: () => import("../components/Client/TrangChu/index.vue"),
  },

  {
    path: "/client/dang-ky",
    component: () => import("../components/Client/DangKy/index.vue"),
  },

  {
    path: "/client/dang-nhap",
    component: () => import("../components/Client/DangNhap/index.vue"),
  },
  {
    path: "/client/dang-nhap-moi-ne",
    component: () => import("../components/Client/DangNhapMoi/index.vue"),
    meta : {layout : Login}
  },
  {
    path: "/client/profile",
    component: () => import("../components/Client/Profile/index.vue"),
  },
  {
    path: "/client/vi-tien",
    component: () => import("../components/Client/ViTien/index.vue"),
  },

  {
    path: "/client/lich-su-chuyen-xe",
    component: () => import("../components/Client/LichSuChuyenXe/index.vue"),
  },
  {
    path: "/client/dat-xe",
    component: () => import("../components/Client/DatXe/index.vue"),
  },
  {
    path: '/Client/Thanh-toan',
    component: () => import('../components/Client/ViTien/thanhtoan.vue')
  },
  {
    path: '/Client/lich-su-giao-dich',
    component: () => import('../components/Client/ViTien/lichsugiaodich.vue')
  },
  {
    path: '/Client/rut-tien',
    component: () => import('../components/Client/ViTien/ruttien.vue')
  },
  {
    path: '/Client/theo-doi-chuyen-di',
    component: () => import('../components/Client/Theodoichuyendi/index.vue')
  },
  {
    path: '/Client/lich-su-chuyen-xe',
    component: () => import('../components/Client/LichSuChuyenXe/index.vue')
  },
  //TaiXeChayDichVu
  {
    path: "/taixechaydichvu/profile-taixe",
    component: () =>
      import("../components/TaiXeChayDichVu/ProfileTaiXe/index.vue"),
  },
  {
    path: "/taixechaydichvu/vi-tien-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/ViTienTaiXe/index.vue"),
  },
  {
    path: "/taixechaydichvu/dang-ki-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/DangKyTaiXe/index.vue"),
  },
  {
    path: "/taixechaydichvu/dang-nhap-tai-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/DangNhapTaiXe/index.vue"),
  },
  {
    path: "/taixechaydichvu/nhan-chuyen-xe",
    component: () =>
      import("../components/TaiXeChayDichVu/NhanChuyenXe/index.vue"),
  },
  {
    path: '/taixechaydichvu/nhan-chuyen-xe',
    component: () => import('../components/TaiXeChayDichVu/NhanChuyenXe/index.vue')
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

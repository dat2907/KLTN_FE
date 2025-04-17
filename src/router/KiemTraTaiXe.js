import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default function (to, from, next) {
  axios
    .get("http://127.0.0.1:8000/api/kiem-tra-tai-khoan-tai-xe", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token_tai_xe"),
      },
    })
    .then((res) => {
      if (res.data.status) {
        next();
      } else {
        next("/taixechaydichvu/dang-nhap-tai-xe");
        toaster.error(res.data.message);
      }
    });
}

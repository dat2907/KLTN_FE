<template>
    <div class="class">
        <div class="container py-4 mt-1">
            <div class="card shadow-lg border-0 rounded-4 mx-auto" style="max-width: 400px;">
                <div class="card-gradient text-white text-center rounded-top-4 px-0">
                    <h3 class="mb-0 py-2 text-light">Đặt Xe</h3>
                </div>
                <div class="card-body">
                    <div class="row gy-4 gx-5">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-location-dot me-1"></i>Điểm
                                đón</label>
                            <input v-model="client_order.DiaDiemDon" type="text" class="form-control"
                                placeholder="Nhập điểm đón" v-on:blur="timDiaChiDon()">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-location-arrow me-1"></i>Điểm
                                đến</label>
                            <div class="dropdown">
                                <input v-model="client_order.DiaDiemDen" type="text" class="form-control dropdown-toggle"
                                placeholder="Nhập điểm đón" v-on:keyup.enter="timDiaChiDen()" data-bs-toggle="dropdown" aria-expanded="false">
                                <ul class="dropdown-menu">
                                    <template v-for="(value, index) in list_search" :key="index">
                                        <li><a v-on:click="taoToaDo(2, value.lat, value.lon, value.display_name)" class="dropdown-item" href="#">{{ value.display_name }}</a></li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-calendar-days me-1"></i>Ngày &
                                Giờ đặt trước</label>
                            <input v-model="client_order.ThoiGian" type="datetime-local" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-coins me-1"></i>Giá ước
                                tính</label>
                            <input v-model="client_order.GiaTien" type="text" class="form-control"
                                placeholder="Tự động tính" disabled>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label fw-semibold"><i class="fa-solid fa-car me-1"></i>Loại xe</label>
                            <select v-model="client_order.LoaiXe" class="form-select">
                                <option>-- Chọn loại xe --</option>
                                <option value="1">Xe máy</option>
                                <option value="2">Xe 4 chỗ</option>
                                <option value="3">Xe 7 chỗ</option>
                                <option value="4">Xe 4 chỗ LUXURY</option>
                                <option value="5">Xe 7 chỗ LUXURY</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <div id="map" style="height: 250px;"></div>
                        </div>
                        <div class="col-md-12">
                            <button v-on:click="ActionDatXe()" class="btn btn-success w-100 py-2 fw-bold">
                                <i class="fa-solid fa-paper-plane me-1"></i>Đặt xe ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default {
    data() {
        return {
            map: null,
            client_order: {},
            vi_tri_den  : null,
            vi_tri_don  : null,
            list_search : [], 
        }
    },
    mounted() {
        this.mapInit();
        setTimeout(() => {
            this.getVitriHienTai();
        }, 1000);
    },
    methods: {
        mapInit() {
            this.map = L.map('map').setView([16.0471, 108.2068], 13); // VD: Đà Nẵng
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(this.map);
        },

        getVitriHienTai() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                   async (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        this.map.setView([lat, lng], 16);
                        if (this.vi_tri_don) {
                            this.map.removeLayer(this.vi_tri_don);
                        }
                        this.vi_tri_don = L.marker([lat, lng]).addTo(this.map)

                        var address = await this.getAddressFromLatLng(lat, lng);
                        this.client_order.DiaDiemDon = address;
                        if (address) {
                            this.vi_tri_don.bindPopup('<b>Bạn đang ở đây!</b><br>'+ address).openPopup();
                        }
                    },
                    (error) => {
                        this.$toast.error('Không thể lấy vị trí hiện tại. Hãy bật định vị GPS hoặc cho phép quyền truy cập.');
                    }
                );
            }
        },

        async getAddressFromLatLng(lat, lng) {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();

                if (data && data.display_name) {
                    return data.display_name;
                } else {
                    return null;
                }
            } catch (error) {
                return null;
            }
        },

        taoToaDo(type, lat, lng, display_name = null) {
            // Type  = 1 tạo địa điểm đón
            // Type = 2 tạo địa điểm đến
            if(type == 1) {
                this.map.setView([lat, lng], 16);
                if (this.vi_tri_don) {
                        this.map.removeLayer(this.vi_tri_don);
                }
                this.vi_tri_don = L.marker([lat, lng]).addTo(this.map);
            } else {
                if (this.vi_tri_den) {
                    this.map.removeLayer(this.vi_tri_den);
                }
                this.vi_tri_den = L.marker([lat, lng]).addTo(this.map);
                this.client_order.DiaDiemDen = display_name;
            }

            if(this.vi_tri_don && this.vi_tri_den) {
                var toa_do_don = this.vi_tri_don._latlng;
                var toa_do_den = this.vi_tri_den._latlng;
                L.Routing.control({
                    waypoints: [
                        L.latLng(toa_do_don.lat, toa_do_don.lng), 
                        L.latLng(toa_do_den.lat, toa_do_den.lng)
                    ],
                show: false, // ❌ không hiện hướng dẫn
                addWaypoints: false, // ❌ không cho người dùng thêm điểm
                draggableWaypoints: false, // ❌ không kéo waypoint
                routeWhileDragging: false,
                createMarker: () => null // ❌ không tạo marker
                }).addTo(this.map);
            }
        },

        async timDiaChiDon() {
            var address = this.client_order.DiaDiemDon;
            var res = await this.search_dia_chi(address);
            // this.taoToaDo(1, res.lat, res.lng);
        },

        async timDiaChiDen() {
            var address = this.client_order.DiaDiemDen;
            var res = await this.search_dia_chi(address);
            // this.taoToaDo(2, res.lat, res.lng);
        },

        async search_dia_chi(address) {
            const viewbox = '108.1500,16.1200,108.2600,16.0000';
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&viewbox=${viewbox}&bounded=1`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();

            if (data && data.length > 0) {
                this.list_search = data;
                console.log(data);
                
                
                // const firstResult = data[0];
                // const lat = parseFloat(firstResult.lat);
                // const lng = parseFloat(firstResult.lon);
                // return { lat: lat, lng: lng };
            }
            return null;
        },

        ActionDatXe() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dat-xe', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                });
        }
    },
}
</script>
<style>
.container {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgb(253, 253, 253);
}

/* Card chính */
.card {
    border-radius: 20px;
    border: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Header màu cam chủ đạo */
.card .bg-primary {
    background: linear-gradient(135deg, rgb(199, 11, 11), rgb(243, 207, 193));
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

/* Tiêu đề */
.card .bg-primary h3 {
    font-weight: 700;
    font-size: 1.6rem;
}

/* Label form */
.form-label {
    font-weight: 600;
    color: #333;
}

/* Input + Select */
.form-control,
.form-select {
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.card-gradient {
    background: linear-gradient(135deg, #1e90ff, #0066cc);
    /* Gradient xanh */
    color: white;
}

.form-control:focus,
.form-select:focus {
    border-color: rgb(239, 86, 4);
    box-shadow: 0 0 0 0.2rem rgba(239, 86, 4, 0.25);
}

/* Nút đặt xe */
.btn-success {
    background-color: rgb(239, 86, 4);
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    transition: 0.3s;
}

.btn-success:hover {
    background-color: rgb(220, 76, 4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 86, 4, 0.3);
}

/* Bản đồ giả */
.map-placeholder {
    background-color: #f1f3f5;
    height: 250px;
    border-radius: 12px;
    border: 1px dashed #ccc;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
}

/* Responsive padding */
@media (max-width: 576px) {
    .card {
        padding: 10px;
    }

    .card .bg-primary h3 {
        font-size: 1.3rem;
    }

    .btn-success {
        font-size: 0.95rem;
    }
}

body {
    background-color: rgb(255, 255, 255);
    min-height: 100vh;
}
</style>
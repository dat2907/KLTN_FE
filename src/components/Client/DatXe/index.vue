<template>
    <div class="booking-container">
        <div class="booking-card-wrapper">
            <div class="booking-card">
                <div class="booking-header">
                    <h3 class="text-white"><i class="fa-solid fa-car-side me-2"></i>Đặt Xe</h3>
                </div>
                <div class="booking-body mt-2">
                    <div class="row g-4">
                        <div class="col-md-6 mt-1">
                            <div class="form-group">
                                <label class="form-label"><i class="icon fa-solid fa-location-dot me-2"></i>Điểm đón</label>
                                <div class="input-with-icon">
                                    <input v-model="client_order.DiaDiemDon" type="text" class="form-control"
                                        placeholder="Nhập điểm đón" v-on:blur="timDiaChiDon()">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1">
                            <div class="form-group">
                                <label class="form-label"><i class="icon fa-solid fa-location-arrow me-2"></i>Điểm đến</label>
                                <div class="dropdown input-with-icon">
                                    <input v-model="client_order.DiaDiemDen" type="text"
                                        class="form-control dropdown-toggle" placeholder="Nhập điểm đến"
                                        v-on:keyup.enter="timDiaChiDen()" data-bs-toggle="dropdown" aria-expanded="false">
                                    <ul class="dropdown-menu w-100">
                                        <li v-for="(value, index) in list_search" :key="index">
                                            <a v-on:click="taoToaDo(2, value.lat, value.lon, value.display_name)"
                                                class="dropdown-item" href="#">{{ value.display_name }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1">
                            <div class="form-group">
                                <label class="form-label"><i class="icon fa-solid fa-calendar-days me-2"></i>Thời gian đặt</label>
                                <div class="input-with-icon">
                                    <input v-model="client_order.ThoiGian" type="datetime-local" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-1">
                            <div class="form-group">
                                <label class="form-label"><i class="icon fa-solid fa-coins me-2"></i>Giá ước tính</label>
                                <div class="input-with-icon price-display">
                                    <input v-bind:value="formatCurrency(client_order.GiaTien)" type="text" class="form-control"
                                        placeholder="Tự động tính" disabled>
                                    <span class="price-currency">VNĐ</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-1">
                            <div class="form-group">
                                <label class="form-label"><i class="icon fa-solid fa-car me-2"></i>Loại xe</label>
                                <select v-model="client_order.LoaiXe" class="form-select">
                                    <option disabled selected value="">-- Chọn loại xe --</option>
                                    <option v-bind:value="1">Xe máy</option>
                                    <option v-bind:value="2">Xe 4 chỗ</option>
                                    <option v-bind:value="3">Xe 7 chỗ</option>
                                    <option v-bind:value="4">Xe 4 chỗ LUXURY</option>
                                    <option v-bind:value="5">Xe 7 chỗ LUXURY</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <div class="map-container">
                                <div id="map"></div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn-booking" v-on:click="ActionDatXe()" 
                            v-if="client_order.GiaTien"
                            >
                                <i class="fa-solid fa-paper-plane me-2"></i>Đặt xe ngay
                            </button>
                            <button v-else disabled class="btn-booking disabled">
                                <i class="fa-solid fa-paper-plane me-2"></i>Đặt xe ngay
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
import axios from 'axios';

export default {
    data() {
        return {
            map: null,
            client_order: {},
            vi_tri_den: null,
            vi_tri_don: null,
            list_search: [],
            tien_km: 10000,
            routing_control: null
        }
    },
    mounted() {
        this.mapInit();
        // Đặt giá trị mặc định cho thời gian đặt là thời gian hiện tại
        this.client_order.ThoiGian = this.getNowFormatted();
        setTimeout(() => {
            this.getVitriHienTai();
        }, 1000);
    },
    methods: {
        // Hàm định dạng thời gian hiện tại theo định dạng datetime-local (YYYY-MM-DDThh:mm)
        getNowFormatted() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        },

        mapInit() {
            this.map = L.map('map', {
                zoomControl: false // Ẩn nút zoom mặc định
            }).setView([16.0471, 108.2068], 13); // VD: Đà Nẵng
            
            // Thêm nút zoom vào góc dưới bên phải
            L.control.zoom({
                position: 'bottomright'
            }).addTo(this.map);
            
            // Sử dụng cartoDB map tiles thay vì OpenStreetMap mặc định
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap contributors, © CARTO',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(this.map);
            
            // Tùy chỉnh các style của bản đồ để loại bỏ các vòng tròn màu xanh
            const customMapStyle = document.createElement('style');
            customMapStyle.textContent = `
                .leaflet-routing-container {
                    display: none !important;
                }
                .leaflet-routing-alt {
                    display: none !important;
                }
                .leaflet-routing-container-hide {
                    display: none !important;
                }
                .leaflet-marker-icon {
                    border: none !important;
                    background: none !important;
                    box-shadow: none !important;
                }
            `;
            document.head.appendChild(customMapStyle);
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
                        
                        this.vi_tri_don = L.marker([lat, lng]).addTo(this.map);

                        var address = await this.getAddressFromLatLng(lat, lng);
                        this.client_order.DiaDiemDon = address;
                        if (address) {
                            this.vi_tri_don.bindPopup('<div class="custom-popup"><b>Vị trí của bạn</b><p>' + address + '</p></div>', {
                                className: 'custom-popup-wrapper'
                            }).openPopup();
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

        async taoToaDo(type, lat, lng, display_name = null) {
            if (type == 1) {
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

            if (this.vi_tri_don && this.vi_tri_den) {
                var toa_do_don = this.vi_tri_don._latlng;
                var toa_do_den = this.vi_tri_den._latlng;
                
                // Nếu đã có tuyến đường trước đó, xóa đi
                if (this.routing_control) {
                    this.map.removeControl(this.routing_control);
                }
                
                // Cài đặt tuyến đường mới với style tùy chỉnh
                this.routing_control = L.Routing.control({
                    waypoints: [
                        L.latLng(toa_do_don.lat, toa_do_don.lng),
                        L.latLng(toa_do_den.lat, toa_do_den.lng)
                    ],
                    show: false,
                    addWaypoints: false,
                    draggableWaypoints: false,
                    routeWhileDragging: false,
                    createMarker: () => null,
                    lineOptions: {
                        styles: [
                            { color: '#0062E6', opacity: 0.8, weight: 5 }
                        ],
                        extendToWaypoints: true,
                        missingRouteTolerance: 0
                    }
                }).addTo(this.map);

                this.routing_control.on('routesfound', (e) => {
                    const routes = e.routes;
                    const summary = routes[0].summary;
                    this.client_order.GiaTien = parseFloat(this.tien_km) * parseFloat(summary.totalDistance / 1000);
                    this.client_order.SoKm = parseFloat(summary.totalDistance / 1000);
                    
                    // Điều chỉnh viewport để hiển thị cả tuyến đường
                    this.map.fitBounds(L.latLngBounds(
                        L.latLng(toa_do_don.lat, toa_do_don.lng),
                        L.latLng(toa_do_den.lat, toa_do_den.lng)
                    ).pad(0.3));
                });
            }
        },

        formatCurrency(value) {
            if (!value) return "0";
            return Number(value).toLocaleString("vi-VN");
        },

        formatCurrency_text(value) {
            if (!value) return "0";
            return Number(value).toLocaleString("vi-VN").replace(/\./g, ',');
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
            }
            return null;
        },

        ActionDatXe() {
            var payload = {
                DiaDiemDon: {
                    dia_chi: this.client_order.DiaDiemDon,
                    toa_do: {
                        lat: this.vi_tri_don.lat || this.vi_tri_don._latlng.lat,
                        lng: this.vi_tri_don.lng || this.vi_tri_don._latlng.lng
                    }
                },
                DiaDiemDen: {
                    dia_chi: this.client_order.DiaDiemDen,
                    toa_do: {
                        lat: this.vi_tri_den.lat || this.vi_tri_den._latlng.lat,
                        lng: this.vi_tri_den.lng || this.vi_tri_den._latlng.lng
                    }
                },
                LoaiXe: this.client_order.LoaiXe,
                GiaTien: this.client_order.GiaTien,
                SoKm: this.client_order.SoKm
            }

            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dat-xe', payload,{
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
.booking-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #f0f4f8, #e2ebf3);
    padding: 20px 30px !important;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.booking-card-wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.booking-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
}

.booking-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.booking-header {
    background: linear-gradient(135deg, #0062E6, #33AEFF);
    color: white;
    padding: 20px;
    text-align: center;
}

.booking-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
}

.booking-body {
    padding: 20px 25px !important;
}

.form-group {
    margin-bottom: 15px;
}

.form-label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
}

.input-with-icon {
    position: relative;
}

.price-display {
    position: relative;
}

.price-currency {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 0.9rem;
}

.form-control, .form-select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
    border-color: #0062E6;
    box-shadow: 0 0 0 0.25rem rgba(0, 98, 230, 0.25);
    outline: none;
}

.btn-booking {
    display: block;
    width: 100%;
    background: linear-gradient(to right, #0062E6, #33AEFF);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 14px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 98, 230, 0.3);
}

.btn-booking:hover {
    background: linear-gradient(to right, #005ad9, #1a9bff);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 98, 230, 0.35);
}

.btn-booking.disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
}

.map-container {
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

#map {
    width: 100%;
    height: 100%;
}

.dropdown-menu {
    max-height: 250px;
    overflow-y: auto;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
    padding: 8px 10px;
    border-radius: 5px;
    white-space: normal;
    transition: all 0.2s;
}

.dropdown-item:hover {
    background-color: #f0f4f8;
    color: #0062E6;
}

/* Custom markers */
.custom-div-icon {
    background: none;
    border: none;
}

.custom-marker {
    width: 30px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    transform: translate(-50%, -100%);
}

.pickup-marker {
    color: #0062E6;
}

.dropoff-marker {
    color: #FF4500;
}

/* Custom popup */
.custom-popup {
    padding: 10px;
    min-width: 200px;
}

.custom-popup b {
    display: block;
    margin-bottom: 5px;
    color: #0062E6;
}

.custom-popup p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
}

.custom-popup-wrapper .leaflet-popup-content-wrapper {
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.custom-popup-wrapper .leaflet-popup-tip {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 576px) {
    .booking-container {
        padding: 20px 10px;
    }
    
    .booking-header {
        padding: 15px;
    }
    
    .booking-body {
        padding: 20px 15px;
    }
    
    .btn-booking {
        padding: 12px;
    }
}

.icon{
    font-size: 1.2rem;
}
</style>
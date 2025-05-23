    <template>
        <div class="container text-center">
            <h2 class="">Trạng thái Chuyến đi</h2>
            <h4 class="status-container">Trạng thái chuyến đi: <span id="status">{{ tripStatus }}</span></h4>
            <!-- Bản đồ Realtime -->
            <div id="map" class="map-container">
                <h4>Map ở đây</h4>
            </div>

            <!-- Trạng thái chuyến đi -->
            <!-- <div class="status-container">
                <h4>Trạng thái chuyến đi: <span id="status">{{ tripStatus }}</span></h4>
            </div> -->

            <!-- Các nút điều khiển -->
            <div class="btn-container">
                <div class="btn-content">
                    <button class="btn btn-primary" @click="callDriver">Gọi tài xế</button>
                    <button class="btn btn-success" @click="sendMessage">Nhắn tin</button>
                    <button class="btn btn-danger" @click="cancelTrip">Hủy chuyến</button>
                </div>
                <div class="">
                    <button class="btn btn-info me-2" @click="viewDetails">Xem chi tiết</button>
                </div>
            </div>
        </div>
    </template>

<script>
export default {
    data() {
        return {
            map: null,
            marker: null,
            vehicleMarker: null,
            tripStatus: 'Đang tìm tài xế',
        };
    },
    methods: {
        // Khởi tạo bản đồ
        initMap() {
            const mapOptions = {
                center: { lat: 21.0285, lng: 105.8542 },
                zoom: 14,
            };
            this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            // Vị trí khách hàng
            this.marker = new google.maps.Marker({
                position: { lat: 21.0285, lng: 105.8542 },
                map: this.map,
                title: "Vị trí khách hàng",
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });

            // Vị trí tài xế
            this.vehicleMarker = new google.maps.Marker({
                position: { lat: 21.0290, lng: 105.8550 },
                map: this.map,
                title: "Vị trí tài xế",
                icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            });

            // Di chuyển xe tài xế
            setInterval(() => {
                this.vehicleMarker.setPosition({
                    lat: this.vehicleMarker.getPosition().lat() + 0.0001, // Di chuyển xe mỗi 5 giây
                    lng: this.vehicleMarker.getPosition().lng() + 0.0001,
                });
            }, 5000);
        },

        // Cập nhật trạng thái chuyến đi
        updateTripStatus(status) {
            this.tripStatus = status;
        },

        // Các phương thức xử lý các nút điều khiển
        callDriver() {
            this.updateTripStatus('Đang tìm tài xế');
        },
        sendMessage() {
            this.updateTripStatus('Đang nhắn tin với tài xế');
        },
        cancelTrip() {
            this.updateTripStatus('Chuyến đi đã hủy');
        },
        viewDetails() {
            this.updateTripStatus('Đang xem chi tiết chuyến đi');
        }
    },

    // Khởi động khi component được tạo
    // mounted() {
    //     this.initMap();
    // }
    mounted() {
        // Đảm bảo Google Maps API đã được load
        if (window.google && window.google.maps) {
            this.initMap();
        } else {
            // Nếu chưa load, thêm script và khởi tạo sau khi load xong
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = () => {
                this.initMap();
            };
            document.head.appendChild(script);
        }
    }
};
</script>

<style>
.container {
    margin: 40px 10px;
}
.map-container {
    height: 400px;
    width: 100%;
    margin: 20px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.status-container {
    margin: 20px 0;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
}

.status-container span {
    font-weight: bold;
    color: #007bff;
}

.btn-container {
    margin: 20px 0;
}

.btn-content {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.btn {
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

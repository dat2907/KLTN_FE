    <template>
        <div class="container mt-5 text-center">
            <h2 class="mb-4">Trạng thái Chuyến đi</h2>

            <!-- Bản đồ Realtime -->
            <div id="map">
                <h5>Map ở đây</h5>
            </div>

            <!-- Trạng thái chuyến đi -->
            <div class="status-container">
                <h4>Trạng thái chuyến đi: <span id="status">{{ tripStatus }}</span></h4>
            </div>

            <!-- Các nút điều khiển -->
            <div class="btn-container">
                <button class="btn btn-primary me-2" @click="callDriver">Gọi tài xế</button>
                <button class="btn btn-success me-2" @click="sendMessage">Nhắn tin</button>
                <button class="btn btn-danger me-2" @click="cancelTrip">Hủy chuyến</button>
                <button class="btn btn-info me-2" @click="viewDetails">Xem chi tiết</button>
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
    mounted() {
        this.initMap();
    }
};
</script>

<style>
#map {
    height: 400px;
    width: 100%;
}

.status-container {
    margin-top: 20px;
}

.status-container span {
    font-weight: bold;
}

.btn-container {
    margin-top: 20px;
}
</style>

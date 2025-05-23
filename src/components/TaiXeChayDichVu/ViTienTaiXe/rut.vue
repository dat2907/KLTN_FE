<template>
    <div class="ruttien-wrapper">
        <div class="ruttien-header">
            <h2>Rút Tiền</h2>
        </div>

        <div class="ruttien-card">
            <h5>Thông tin tài khoản</h5>
            <p><strong>Họ tên:</strong> Tên tài khoản</p>
            <p><strong>Số dư:</strong> 500.000 VND</p>
        </div>
        <div class="payment-method-card">
            <div class="d-flex justify-content-between align-items-center">
                <label class="fw-bold mb-2">Phương thức thanh toán</label>
                <button class="btn-gradient btn-sm" @click="toggleDropdown">
                    {{ selectedMethod ? selectedMethod : 'Chọn phương thức' }}
                    <i :class="dropdownVisible ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" class="ms-2"></i>
                </button>
            </div>

            <div v-if="dropdownVisible" class="payment-options mt-3">
                <div class="payment-option" v-for="method in paymentMethods" :key="method"
                    @click="selectMethod(method)">
                    {{ method }}
                </div>
                <button class="btn btn-secondary mt-2" @click="toggleDropdown">Thu gọn</button>
            </div>
        </div>
        <div class="ruttien-card mt-2">
            <label>Số tiền cần rút</label>
            <input type="number" class="ruttien-input" placeholder="Nhập số tiền">

            <button class="ruttien-button">Rút Tiền</button>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            dropdownVisible: false,
            selectedMethod: '',
            paymentMethods: [
                'Ví ZaloPay',
                'Ví ShopeePay',
                'Ví MoMo',
                'Thẻ ATM nội địa (VNPay)'
            ]
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
        selectMethod(method) {
            this.selectedMethod = method;
            this.dropdownVisible = false;
        }
    }
}
</script>
<style scoped>
.ruttien-wrapper {
    max-width: 500px;
    margin: 20px auto;
    padding: 16px;
}

.ruttien-header h2 {
    color: var(--primary-color);
    text-align: center;
}

.ruttien-card {
    background: #fff;
    border-radius: var(--border-radius);
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.ruttien-input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
}

.ruttien-input:hover {
    background: #e9f5ff;
    border-color: #3c67f3;
}

.ruttien-button {
    width: 100%;
    background-color: #007bff;
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

.payment-method-card {
    border-radius: 12px;
    padding: 16px;
    background: #f8f9fa;
}

.payment-option {
    background: #fff;
    padding: 10px 16px;
    margin-bottom: 8px;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: 0.2s;
}

.payment-option:hover {
    background: #e9f5ff;
    border-color: #3c67f3;
}

.btn-gradient {
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    /* Giúp chữ + icon nằm giữa */
    justify-content: center;
    gap: 6px;
    /* Khoảng cách giữa chữ và icon */
    transition: 0.3s;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.btn-gradient:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}
</style>

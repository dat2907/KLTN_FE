<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-lg border-0 rounded-4">
                    <h2 class="mb-2 text-center">Liên Hệ Hỗ trợ</h2>
                    <p class="text-muted text-center mb-2">
                        Nếu bạn cần hỗ trợ hoặc có câu hỏi, vui lòng để lại lời nhắn. Chúng tôi sẽ phản hồi sớm nhất có
                        thể.
                    </p>

                    <div class="mb-2">
                        <label class="form-label">Họ và Tên</label>
                        <input v-model="form.ho_ten" type="text" class="form-control text-input" placeholder="Nhập họ và tên" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Email</label>
                        <input v-model="form.email" type="email" class="form-control text-input"
                            placeholder="Nhập email của bạn" /> 
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Nội dung hỗ trợ</label>
                        <textarea v-model="form.noi_dung" class="form-control text-input" rows="4"
                            placeholder="Nhập nội dung hỗ trợ..."></textarea>
                    </div>

                    <div class="text-end">
                        <button class="btn" @click="submitSupport">Gửi yêu cầu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                ho_ten: '',
                email: '',
                noi_dung: ''
            }
        }
    },
    methods: {
        submitSupport() {
            axios.post('/khach-hang/ho-tro-khach-hang', this.form)
                .then(res => {
                    this.$toast.success("Yêu cầu của bạn đã được gửi!");
                    this.form = { ho_ten: '', email: '', noi_dung: '' };
                })
                .catch(err => {
                    this.$toast.error("Gửi thất bại, vui lòng thử lại.");
                });
        }
    }
}
</script>

<style scoped>
.container{
    padding: 35px 50px;
}
.card {
    border-radius: 1rem;
    background-color: #fff;
    border: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    padding: 30px ;
}

h2 {
    color: #047def;
}

.form-label {
    font-weight: 500;
    color: #333;
}

.form-control {
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
    border-color: #047def;
    box-shadow: 0 0 0 0.2rem rgba(4, 125, 239, 0.25);
}

.btn {
    background-color: #047def;
    border-color: #047def;
    border-radius: 0.5rem;
    padding: 10px 20px;
    /* font-weight: 600; */
    color: #fff;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0369d1;
    border-color: #0369d1;
}

.text-muted {
    color: #6c757d !important;
}
.text-input{
    font-size: 0.8rem ;
}
textarea {
    resize: none;
}
</style>

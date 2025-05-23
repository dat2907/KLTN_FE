<template>
    <footer class="admin-footer">
        <div class="footer-bottom">
            © 2024 Admin Dashboard
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
}
</script>
<style scoped>
.admin-footer {
    background: #2c3e50;
    color: white;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}

.footer-content {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 10px;
}

.footer-section {
    display: flex;
    gap: 20px;
}

.footer-link {
    color: white;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s;
}

.footer-link:hover {
    color: #3498db;
}

.footer-link i {
    font-size: 16px;
}

.footer-bottom {
    text-align: center;
    font-size: 12px;
    color: #95a5a6;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
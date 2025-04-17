<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">

				<li class="nav-item">
					<router-link to="/HomePage/trang-chu">
						<a class="nav-link" href="/admin/tai-xe">
							<div class="parent-icon"><i class="fa-solid fa-id-card"></i>
							</div>
							<div class="menu-title">Trang chủ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/tai-xe">
						<a class="nav-link" href="/admin/tai-xe">
							<div class="parent-icon"><i class="fa-solid fa-id-card"></i>
							</div>
							<div class="menu-title">Tài Xế</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>
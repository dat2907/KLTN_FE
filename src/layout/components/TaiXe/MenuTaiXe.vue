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
					<router-link to="/admin/tai-xe">
						<a class="nav-link" href="/admin/tai-xe">
							<div class="parent-icon"><i class="fa-solid fa-id-card"></i>
							</div>
							<div class="menu-title">Tài Xế</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/dat-xe">
						<a class="nav-link" href="/admin/dat-xe">
							<div class="parent-icon"><i class="fa-solid fa-car"></i>
							</div>
							<div class="menu-title">Đặt Xe</div>
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
<style scoped>
	/* Topbar đen, chữ trắng */
	.nav-container {
	background-color: #000;
	color: white;
	}

	.logo-text {
	color: white;
	font-weight: bold;
	font-size: 20px;
	}

	.navbar-nav .nav-link {
	color: white;
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 10px 15px;
	border-radius: 8px;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
	}

	/* Icon trắng */
	.navbar-nav .nav-link i {
	color: white;
	}

	/* Hover kiểu "radial light effect" */
	.navbar-nav .nav-link::before {
	content: '';
	position: absolute;
	top: var(--y, 50%);
	left: var(--x, 50%);
	width: 0;
	height: 0;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 50%;
	transform: translate(-50%, -50%);
	transition: width 0.4s ease, height 0.4s ease;
	}

	.navbar-nav .nav-link:hover::before {
	width: 200px;
	height: 200px;
	}

	.navbar-nav .nav-link:hover {
	color: #fff;
	z-index: 1;
	}
</style>
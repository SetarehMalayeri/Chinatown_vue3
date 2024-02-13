<template>
	<div class="app container">
		<a href="#">这是一个超链接</a>
	</div>


	<div class="main_content">
		<RouterView></RouterView>
	</div>

	<div class="navigate">
		<RouterLink replace :to="{ name: 'home' }" active-class="active">首页</RouterLink>
		<RouterLink replace :to="{ name: 'party' }" active-class="active">贴吧</RouterLink>
		<RouterLink replace :to="{ name: 'share' }" active-class="active">发布</RouterLink>
		<RouterLink replace :to="{ name: 'message' }" active-class="active">消息</RouterLink>
		<RouterLink replace :to="{ name: 'login' }" active-class="active">登陆</RouterLink>
	</div>
</template>

<script setup lang='ts' name='App'>
	import { ref } from 'vue'
	let a = ref(10)
</script>

<style scoped lang='scss'> 
	.app {
		a {
			color: rgb(196, 196, 196);
		}
	}

	.navigate {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: inline-flex;
		justify-content: center;
		border-radius: 20px;
		padding: 20px 100px;
		background-color: rgba(56, 56, 56, 0.597);
		a {
			margin: 0 10px; 
		}
	}
</style>
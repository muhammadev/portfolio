<template>
	<div class="nav-bar">
		<ul>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/who">Who</router-link>
      <router-link to="/what">What</router-link>
      <router-link to="/how">How</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Navbar"
}
</script>
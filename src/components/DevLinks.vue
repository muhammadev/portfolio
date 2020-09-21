<template>
	<div class="dev-links">
		<ul>
			<a href="https://github.com/muhammadev" target="_blank"><li>Github</li></a>
			<a href="https://linkedin.com/in/mohamed-tarek-b2420118b/" target="_blank"><li>Linkedin</li></a>
			<a href="https://codepen.io/Mohamed-tarek" target="_blank"><li>Codepen</li></a>
		</ul>
	  <div class="copyright">
	    <p><small>&copy; 2020 Muhammad Tarek.</small></p>
	  </div>
	</div>
</template>

<script>
export default {
	name: "DevLinks"
}
</script>

<style lang="scss" scoped>
ul {
	display: inline-block;	
}
.copyright {
	p {
		font-size: unset;
		// color: #aaa;
		position: relative;
		margin-bottom:0;
	}
}
</style>
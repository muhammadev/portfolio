<template>
	<div class="contact">
		<h1>Get In Touch</h1>
		<form action="https://formspree.io/xwkrqzkq" method="POST">
			<input name="name" type="text" placeholder="your name" required />
			<input type="text" name="_replyto" placeholder="your email" required>
			<textarea name="message" rows="5" placeholder="your message" required></textarea>
			<button class="btn btn-special" type="submit">Send</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "Contact"
}
</script>

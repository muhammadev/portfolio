<template>
	<div class="content">
		<div class="title">
			<h1>What Do I Do?</h1>
		</div>
		<div class="body">
			<div class="wrapper">
				<p>
					As you can guess, I'm a web developer specialized in creating responsive, good-looking websites optimized to serve the needs and provide the best user experience through introducing simple yet powerfull functionalities into the website and <strong>NOT</strong> overwhelming it with doesn't-matter, complexed functionalities.
				</p>
				<br />
				<p>Take a look at my work below and then come and see <router-link to="how" tag="button" class="btn btn-sm btn-special">How</router-link> I do them</p>
			</div>
			<div class="wrapper">
				<div class="work-samples">
					<h5>Work Samples</h5>
					<div class="container">
						<div class="project">
							<div class="project-img">
								<img src="../assets/slider.jpg">
							</div>
							<div class="project-details">
								<h2>Slider</h2>
								<p>An Image Slider full of features</p>
								<a href="https://codepen.io/Mohamed-tarek/full/zYrNJQO" class="btn btn-special" target="_blank">Open</a>
							</div>
						</div>
						<div class="project">
							<div class="project-img">
								<img src="../assets/github-users.jpg">
							</div>
							<div class="project-details">
								<h2>Github Users</h2>
								<p>ReactJS Application displaying github users from github's API</p>
								<a href="https://muhammadev.github.io/github-users/" class="btn btn-special" target="_blank">Open</a>
							</div>
						</div>
						<div class="project">
							<div class="project-img">
								<img src="../assets/shoe-go.jpg">
							</div>
							<div class="project-details">
								<h2>Shoe Go</h2>
								<p>Landing Page</p>
								<a href="https://muhammadev.github.io/shoego/" class="btn btn-special" target="_blank">Open</a>
							</div>
						</div>
						<div class="project">
							<div class="project-img">
								<img src="../assets/blog.jpg">
							</div>
							<div class="project-details">
								<h2>Blog</h2>
								<p>Full Stack Blog Project With Node.js</p>
								<a href="https://github.com/muhammadev/blog" class="btn btn-special" target="_blank">Open</a>
							</div>
						</div>
						<div class="project">
							<div class="project-img">
								<img src="../assets/calculator.jpg">
							</div>
							<div class="project-details">
								<h2>Calculator</h2>
								<p>Just Calculator!</p>
								<a href="https://muhammadev.github.io/calculator/" class="btn btn-special" target="_blank">Open</a>
							</div>
						</div>
<!-- 						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
						<div class="project"></div>
 -->					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "What"
}
</script>

<style lang="scss" scoped>
$main-color: #6C63FF;
$main-color-light: rgba(108, 99, 255, .2);
$second-color: #d3d3d3;
$line-width: 5px;
$border-radius: 2px;

.project {
	img {
		width: 100%;
	}
}
.work-samples {
	.container {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	  grid-auto-rows: auto;
	  grid-auto-flow: dense;
	  grid-gap: 50px;
	  padding:0;
	  padding-top:10px;
	  .project {
	    background: rgba(108, 99, 255, .2);
	    border-right: 5px solid $main-color;
	    border-radius: $border-radius;
	    position: relative;
	    text-align: center;
	    position: relative;
	    * {
	      text-shadow: 2px 2px 1px #000;
	    }
	    .project-img {
	      position: absolute;
	      width:100%; height:100%;
	      top:0; left:0;
	      &::after {
	        content: "";
	        position: absolute;
	        width:100%; height:100%;
	        top:0; left:0;
	        background: #000;
	        opacity: .8;
	      }
	      img {
	        border-radius: $border-radius;
	        position: relative;
	        width: 100%; height: 100%;
	        margin: 0;
	        object-fit: cover;
	      }
	    }
	    .project-details {
	      position: relative;
	      height: 300px;
	      display: flex;
	      flex-direction: column;
				justify-content: center;
				color: #fff;
	      h2 {
	        padding: 20px 0;
	        position: absolute;
	        top:0; left:0;
	        width:100%;
	        font-weight: bold;
	        &:before {
	          content: "";
	          position: absolute;
	          top:0; left: 0;
	          width: 80px; height: 3px;
	          background: $main-color;
	          margin: auto;
	          transition: .3s;
	        }
	        &:after {
	          content: "";
	          position: absolute;
	          top:0; left: 0;
	          width: 3px; height: 80px;
	          background: $main-color;
	          margin: auto;
	        }
	      }
	      p {
	        font-size: unset;
	        margin: 10px 0;
	        margin-top: 20px;
	      }
	      a {
	        transition: .3s;
	        width: 100%;
	        height: 40px;
	        line-height: 1.5;
	        position: absolute;
	        bottom: 0;
	        margin:0;
	        background: transparent;
					color: #fff !important;
	        border-radius:0;
	        border-bottom-left-radius: $border-radius;
	        &:after {
	          border-bottom-left-radius: $border-radius;
	          bottom: -1px; left: -1px;
	          width: calc(100% + 2px);
	        }
	        &:hover {
	          &:after {
	            background: $main-color;
	          }
	        }
	      }
	    }
	  }
	}
}
</style>
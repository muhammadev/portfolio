<template>
  <div class="home">
    <div class="row">
      <div class="col-md">
        <div class="content">
          <h3>Hello!</h3>
          <h1>It's Muhammad Tarek</h1>
          <h5>A Curious Web Dev.</h5>
          <div class="wrapper">
            <p><small>You know me?</small></p>
            <router-link to="/contact" tag="button" class="btn btn-sm btn-special" title="lets make something great together!">Contact</router-link>
          </div>
          <div class="wrapper">
            <p><small>You don't? See</small></p>
            <router-link to="/who" tag="button" class="btn btn-sm btn-special">Who Am I</router-link>
          </div>
        </div>
      </div>
      <div class="col-md hello-img">
        <img src="../assets/hello.svg" alt="hello">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home{
  .row {
    margin-bottom: 30px;
    .col-md {
      display: flex;
      align-items: center;
      img {
        position: relative;
        width: 80%;
        left: 20%;
      }
    }
  }
}

h5 {
  margin-bottom: 30px;
}

.wrapper {
  margin:0 !important;
  p {
    margin-right:10px;
    margin-bottom:15px;
    display: inline-block;
  }
}
</style>
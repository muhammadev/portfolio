<template>
  <div class="home">
    <div class="row">
      <div class="col-md">
        <div class="content">
          <h3>Hello!</h3>
          <h1>It's Muhammad Tarek</h1>
          <h5>A Curious Web Dev.</h5>
          <div class="wrapper">
            <p><small>if you already know me, then:</small></p>
            <router-link to="/contact" tag="button" class="btn btn-sm btn-special" title="lets make something great together!">Contact</router-link>
          </div>
        </div>
      </div>
      <div class="col-md">
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
      justify-content: flex-end;
      img {
        position: relative;
        width: 80%;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  img {
    width: 100% !important;
    float: unset !important;
  }
}
</style>
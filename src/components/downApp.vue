<template>
  <div class="down_app" v-show="theShow">
    <nav>
      <a class="nav_close" @click="navClose"><i class="iconfont icon-close"></i></a>
      <a class="nav_logo" @click="toDownload">
        <div class="nav_text">
          <p>打开手机淘宝App</p>
          <span>随时随地 想淘就淘</span>
        </div>
      </a>
      <a class="nav_to">打开APP</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "down_app",
  data() {
    return {
      theShow:true
    };
  },
  created() {},
  mounted() {},
  methods: {
    navClose: function() {
      this.theShow = false;
    },
    toDownload: function() {
      this.$router.push("download");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
nav {
  width: 100%;
  display: flex;
  align-items: center;
  height: pr(71);
  background: #fff;
  .nav_close {
    width: 35px;
    height: pr(71);
    line-height: pr(71);
    text-align: center;
    text-decoration: none;
  }
  .nav_logo {
    text-decoration: none;
    display: inline-block;
    flex-grow: 1;
    height: pr(71);
    background: url("../assets/img/logo01.png") no-repeat left center;
    background-size: pr(50) pr(50);
    .nav_text {
      margin-top: pr(11);
      margin-left: pr(60);
      height: pr(50);
      & > p {
        font-size: pr(16);
        height: pr(24);
        line-height: pr(24);
      }
      & > span {
        font-size: pr(12);
        height: pr(18);
        line-height: pr(18);
        color: rgb(102, 102, 102);
        overflow: hidden;
      }
    }
  }
  .nav_to {
    display: inline-block;
    width: pr(90);
    height: pr(71);
    line-height: pr(71);
    font-size: pr(14);
    color: #fff;
    text-decoration: none;
    text-align: center;
    background-image: linear-gradient(
      225deg,
      rgb(254, 86, 10) 3%,
      rgb(255, 153, 1) 100%
    );
  }
}
</style>

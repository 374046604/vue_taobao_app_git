<template>
  <div class="good_mores">
    <div class="good_header">
      <i class="iconfont icon-arrowleft"></i>
      <div class="title">
        <div>App新人可领￥15元通用购物券!</div>
      </div>
      <i class="iconfont icon-cart"></i>
    </div>
    <div class="good_main">
      <swiper class="swiper" loop auto dots-position="center"  height="10rem" :interval="3000" :duration="500">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <a href="#/bannerList"><img :src="item"></a>
        </swiper-item>
      </swiper>
      <div class="main_nav">
        <img src="../assets/img/newyear.jpg" />
      </div>
      <div class="main_context">
        <p class="context_title">{{goodText}}</p>
        <span class="context_yuan">年货价</span><span class="yuan">¥</span><span class="context_newyuan">{{goodNew}}</span>
        <p class="context_p">专柜价<span class="context_oldyuan">¥{{goodOld}}</span></p>
        <div class="context_about">
          <span>快递{{kuaidi}}</span>
          <span>月销量{{sales}}</span>
          <span>{{address}}</span>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperItem } from "vux";
export default {
  name: "good_mores",
  data() {
    return {
      demo04_list: [],
      goodText: "",
      goodNew: 0,
      goodOld: 0,
      kuaidi: 0,
      sales: 0,
      address: ""
    };
  },
  created() {},
  components: {
    Swiper,
    SwiperItem
  },
  mounted() {
    var _this = this;
    console.log(_this.$route.query.id);
    axios({
      method: "get",
      url: "http://127.0.0.1:3000/goods/getMore",
      params: {
        goodId: _this.$route.query.id
      },
      //data:data,
      responseType: "json"
    })
      .then(function(response) {
        _this.demo04_list = response.data[0].goodImg;
        _this.goodText = response.data[0].goodText;
        _this.goodNew = response.data[0].goodNew;
        _this.goodOld = response.data[0].goodOld;
        _this.kuaidi = response.data[0].kuaidi;
        _this.sales = response.data[0].sales;
        _this.address = response.data[0].address;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/goodMores.scss";
</style>

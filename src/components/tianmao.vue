<template>
  <div class="tianmao">
    <div class="new_app_zzc" v-show="newAppShow">
      <div class="new_app">
        <p><i class="iconfont icon-close1" @click="changeNewApp"></i></p>
        <img class="new_app_img" src="../../static/img/20180116144512.png"/>
      </div>
    </div>
    <div class="tianmao_header">
      <div class="header_menu">
        <i class="iconfont icon-menu"></i>
        <i>天猫TMALL</i>
        <i class="is_login">登录</i>
      </div>
      <div class="header_select">
        <div class="select_click">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品</span>
        </div>
      </div>
    </div>
    <div class="tianmao_main">
      <ul class="main_item" >
        <li v-for="(item, index) in itemLi" :key="index">
          <img :src="item.img" />
          <p>{{item.text}}</p>
        </li>
      </ul>
      <swiper class="swiper" loop auto dots-position="right" :interval="3000" :duration="500">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <a href="#"><img :src="item.imgSrc"></a>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperItem } from "vux";
export default {
  name: 'tianmao',
  data () {
    return {
      newAppShow:false,
      itemLi: [
        { img: "/src/assets/img/item01.png", text: "天猫" },
        { img: "/src/assets/img/item02.png", text: "聚划算" },
        { img: "/src/assets/img/item03.png", text: "天猫国际" },
        { img: "/src/assets/img/item04.png", text: "外卖" },
        { img: "/src/assets/img/item05.png", text: "天猫超市" },
        { img: "/src/assets/img/item06.png", text: "充值中心" },
        { img: "/src/assets/img/item07.png", text: "飞猪旅行" },
        { img: "/src/assets/img/item08.png", text: "领金币" },
        { img: "/src/assets/img/item09.png", text: "拍卖" },
        { img: "/src/assets/img/item10.png", text: "分类" }
      ],
      demo04_list: [],
    }
  },
  components:{
    Swiper, SwiperItem 
  },
  created(){
  },
  mounted(){
    this.getBannerLists();
  },
  methods:{
    //修改显示状态
    changeNewApp:function(){
      this.newAppShow=false;
    },
    getBannerLists:function(){
      var _this=this;
      axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/bannerLists',
        //data:data,
        //responseType: 'json',
      })
      .then(function (result) {
        _this.demo04_list=result.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/tianmao.scss";
</style>

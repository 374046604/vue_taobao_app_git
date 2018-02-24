<template>
  <div class="home">
    <header>
      <div class="header_bg">
        <div class="header_main">
          <i class="iconfont icon-sousuo "></i>
          寻找宝贝店铺
        </div>
      </div>
    </header>

    <section class="home_main mescroll" id="mescroll">
    
    <nav v-show="navCloseType">
      <a class="nav_close" @click="navClose"><i class="iconfont icon-close"></i></a>
      <a class="nav_logo" @click="toDownload">
        <div class="nav_text">
          <p>打开手机淘宝App</p>
          <span>随时随地 想淘就淘</span>
        </div>
      </a>
      <a class="nav_to">打开APP</a>
    </nav>
    <div class="main_main">
    <swiper class="swiper" loop auto dots-position="center" :interval="3000" :duration="500">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <a href="#"><img :src="item"></a>
        </swiper-item>
      </swiper>
      <ul class="main_item">
        <li v-for="(item, index) in itemLi" :key="index">
          <img :src="item.img" />
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="main_headline clearfix">
        <div class="headline_logo"></div>
        <swiper auto height="40px" direction="vertical" :interval=2000  class="text-scroll headline_tip" :show-dots="false">
          <swiper-item><p class="headline_item"><span class="badge">热文</span><span>挥泪分享自制钓鲫鱼酒米窝料，错过可惜！</span></p></swiper-item>
          <swiper-item><p class="headline_item"><span class="badge">热文</span><span>挥泪分享自制钓鲫鱼酒米窝料，错过可！</span></p></swiper-item>
          <swiper-item><p class="headline_item"><span class="badge">热文</span><span>挥泪分享自制钓鲫鱼酒米窝料，错过！</span></p></swiper-item>
          <swiper-item><p class="headline_item"><span class="badge">热文</span><span>挥泪分享自制钓鲫鱼酒米窝料，错！</span></p></swiper-item>
          <swiper-item><p class="headline_item"><span class="badge">热文</span><span>挥泪分享自制钓鲫鱼酒米窝料，！</span></p></swiper-item>
        </swiper>
      </div>
      <div class="clear clear02"></div>
      <div class="main_qianggou clearfix">
        <a href="#" class="qianggou01">
          <div class="last_time">
            <span class="h">{{timeH}}</span>
            <span class="dot">:</span>
            <span class="m">{{timeM}}</span>
            <span class="dot">:</span>
            <span class="s">{{timeS}}</span>
          </div>
        </a>
        <a href="#" class="qianggou02"></a>
        <a href="#" class="qianggou03"></a>
        <a href="#" class="qianggou04"></a>
      </div>
      
      <div class="main_like">
        <div class="like_title">猜你喜欢</div>
        <div class="like_text">实时推荐最适合你的宝贝</div>
        <ul class="like_items clearfix">
          <li>
            <img src="../assets/img/img01.jpg" />
            <p>[为你推荐]创意可乐瓶保温杯男女学生水杯304不锈钢子弹头韩版情侣个性杯子</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>38.0</span></div>
          </li>
          <li>
            <img src="../assets/img/img02.jpg" />
            <p>[为你推荐]无印良品天鹅绒四件套短毛珊瑚绒法兰绒秋冬加厚床笠磨毛床上用品</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>216.58</span></div>
          </li>
          <li>
            <img src="../assets/img/img03.jpg" />
            <p>[为你推荐]希尔顿总统套房 日本进口100支全棉 95A++匈牙利鹅绒被羽绒被</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>1650.0</span></div>
          </li>
          <li>
            <img src="../assets/img/img04.jpg" />
            <p>[为你推荐]创意妙刻德国双齿轮打铃闹钟机械外观装饰摆件座钟客厅钟表礼品</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>382.0</span></div>
          </li>
          <li>
            <img src="../assets/img/img05.jpg" />
            <p>[为你推荐]内蒙古锡盟 奶嚼口 稀奶油乌日莫 白奶油 250g两份包邮送100g炒米</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>160.58</span></div>
          </li>
          <li>
            <img src="../assets/img/img06.jpg" />
            <p>[为你推荐]德式不锈钢自动回弹剪刀 强力鸡骨剪家用厨房小工具多功能鱼骨剪</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>65.0</span></div>
          </li>
          <li v-for="(item,index) in pdlist" :key="index">
            <img :src="item.img"/>
            <p>{{item.name}}</p>
            <div><span>¥</span>&nbsp;&nbsp;<span>{{item.rmb}}</span></div>
          </li>
          
        </ul>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
import axios from 'axios'

export default {
  name: "home",
  data() {
    return {
      demo04_list: [
        "/src/assets/img/list01.jpg",
        "/src/assets/img/list02.jpg",
        "/src/assets/img/list03.jpg",
        "/src/assets/img/list04.jpg"
      ],
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
      pdlist: [],
      navCloseType:true,
      timeH:"00",
      timeM:"00",
      timeS:"00"
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {},
  mounted() {
    //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
    //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
    var self = this;
    self.mescroll = new MeScroll("mescroll", {
      //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
      up: {
        callback: self.upCallback, //上拉回调
        //以下参数可删除,不配置
        isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
        //page:{size:8}, //可配置每页8条数据,默认10
        toTop: {
          //配置回到顶部按钮
          src: "/src/assets/img/toTop.png", //默认滚动到1000px显示,可配置offset修改
          //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
          offset: 500
        },
        empty: {
          //配置列表无任何数据的提示
          warpId: "dataList",
          icon: "../assets/img/logo01.png",
          tip: "亲,暂无相关数据哦~"
          //						  	btntext : "去逛逛 >" ,
          //						  	btnClick : function() {
          //						  		alert("点击了去逛逛按钮");
          //						  	}
        }
        //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
        //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
        //						clearId: "dataList",
        //						clearEmptyId: "dataList"
      }
    });
    var commonFun = {
      //得到结束时间
      getEndDate(){
        $.ajax({  
          type: "get",  
          url: "http://127.0.0.1:3000/getData/qiangGouTime",  
          dataType: "jsonp",
          success: function(data){  
            console.log(data);
             setInterval(function(){
                commonFun.countTime(data.time);
             },1000)
          }  
        });  
      },
      //计算时间差
      countTime: function(endDate) {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var str = endDate;
        var endDate = new Date(str);
        var end = endDate.getTime();

        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d, h, m, s;
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
          h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
          m = Math.floor((leftTime / 1000 / 60) % 60);
          s = Math.floor((leftTime / 1000) % 60);
          if(d<10){d='0'+d}
          if(h<10){h='0'+h}
          if(m<10){m='0'+m}
          if(s<10){s='0'+s}
        }
        //将倒计时赋值到div中
        //console.log( d + "天", h + "时",m + "分",s + "秒");
        self.timeH=h;
        self.timeM=m;
        self.timeS=s;
      }
    };
    commonFun.getEndDate();
    
  },
  methods: {
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback: function() {
      console.log('加载数据')
      var self = this;
      //联网加载数据
      axios({
          method: 'get',
          url: 'http://127.0.0.1:3000/getData/getListData',
          params: {
            pageIndex: 1,
            pageSize:4
          },
          //data:data,
          responseType: 'json',
      })
      .then(function (response) {
        self.pdlist.push.apply(self.pdlist,response.data);
        self.mescroll.endSuccess();
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    navClose:function(){
      this.navCloseType=false;
    },
    toDownload:function(){
      this.router.push('download');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/home.scss";
</style>

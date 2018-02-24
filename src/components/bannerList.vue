<template>
  <div class="banner_list">
    <ul class="banner_nav">
        <li class="nav_li" v-for="(item,index) in navOn" :key="item.id"
        @click="addOn(item)" :class="{on:navOnName==item}">{{item}}</li>
    </ul>
    <ul class="banner_menu clearfix">
        <li class="menu_li" :class="'menu_li'+index" v-for="(item,index) in navOn" :key="item.id" v-show="item==navOnName">
            <ul class="munu_box clearfix">
                <li class="box_li" v-for="(i,ind) in listData[index]">
                    <div class="li_img">
                        <img :src="i.imgSrc" />
                    </div>
                    <div class="li_text">
                        <div class="li_title">
                            <img class="logo1" src="../assets/img/nhj.png" />
                            <span>雨虹厨卫柔韧防水套餐</span>
                        </div>
                        <div class="li_icon">
                            <span>{{i.youhui}}</span>
                        </div>
                        <div class="li_yuanold">¥{{i.yuanOld}}</div>
                        <div class="li_yuannew">¥<span>{{i.yuanNew}}</span></div>
                    </div>
                </li>
                <!--<li class="box_li">
                    <div class="li_img">
                        <img src="../assets/img/img02.jpg" />
                    </div>
                    <div class="li_text">
                        <div class="li_title">
                            <img class="logo1" src="../assets/img/nhj.png" />
                            <span>雨虹厨卫柔韧防水套餐</span>
                        </div>
                        <div class="li_icon">
                            <span>每满600减30┊跨店</span>
                        </div>
                        <div class="li_yuanold">¥</div>
                        <div class="li_yuannew">¥<span>999.00</span></div>
                    </div>
                </li>-->
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'banner_list',
  data () {
    return {
        navOnName:'精选',
        navOn:['精选','男装','女装','鞋包','母婴','家居','数码'],
        listData:[[
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ],
        [
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0001.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0002.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0003.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
            {'imgSrc':'/src/assets/img/0004.jpg','title':'雨虹厨卫柔韧防水套餐','youhui':'每满600减30┊跨店','yuanOld':'1699.00','yuanNew':'999.00'},
        ]]
    }
  },
  created(){
  },
  mounted(){
  },
  methods:{
      addOn:function(item){
          this.navOnName=item;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/bannerList.scss";
</style>

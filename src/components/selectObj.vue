<template>
  <div class="select_obj">
    <div class="select_header_box">
      <div class="select_header">
        <div class="select_box">
          <div class="select_default" @click="openOption()">{{option}}</div>
          <ul class="select_option" ref="option">
            <li @click="setOption('店铺')">店铺</li>
            <li @click="setOption('博主')">博主</li>
            <li @click="setOption('小二')">小二</li>
            <li @click="setOption('买卖')">卖家</li>
          </ul>
        </div>
      </div>
      <div class="select_button">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select_obj',
  data () {
    return {
      option: '宝贝'
    }
  },
  created(){
  },
  mounted(){
  },
  methods:{
    setOption:function(i){
      this.$refs.option.style.height=0;
      this.$nextTick(()=> {
        this.option=i;
      });
    },
    openOption:function(){
      this.$refs.option.style.height=130/5.4+'rem';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/selectObj.scss";
</style>

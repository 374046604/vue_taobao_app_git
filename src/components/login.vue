<template>
  <div class="login">
    <div class="login_user">
      <div class="user_img">
        <img :src="userTou"/>
      </div>
      <div class="user_user">
        <input  type="text" v-model="userUser" placeholder="手机号/邮箱号/会员号"/>
      </div>
      <div class="user_psw">
        <input  type="text" v-model="userPsw" placeholder="请输入密码"/>
      </div>
      <div class="user_about clearfix">
        <span class="user_left">免费注册</span>
        <span class="user_right">忘记密码</span>
      </div>
    </div>
    <div class="login_btn">
      <button class="user_login" @click="login">登录</button>
      <button class="user_tel">验证短信登录</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { AlertModule } from "vux";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      userUser: "",
      userPsw: "",
      userTou:
        "https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png",
      targetPage: -100
    };
  },
  components: {
    AlertModule
  },
  created() {},
  mounted() {
    this.targetPage = this.$route.query.target;
  },
  methods: {
    login: function() {
      var _this = this;
      if (_this.userUser == "") {
        AlertModule.show({
          title: "温馨提示",
          content: "请输入用户名",
          onShow() {},
          onHide() {}
        });
        return;
      } else if (_this.userPsw == "") {
        AlertModule.show({
          title: "温馨提示",
          content: "请输入密码",
          onShow() {},
          onHide() {}
        });
        return;
      }
      axios({
        method: "post",
        url: "http://127.0.0.1:3000/users/login",
        // params: {
        //   user: this.userUser,
        //   pageSize:this.userPsw
        // },
        data: {
          user: this.userUser,
          psw: this.userPsw
        },
        responseType: "json"
      })
        .then(function(response) {
          if (response.data.type == 1) {
            //设置头像
            _this.userTou = response.data.userImg;
            //存一份数据到vuex
            _this.$store.commit("setUserinfo", { user: _this.userUser, psw: _this.userPsw });
            if (_this.targetPage == 2) {
              _this.$router.push({ path: "test" });
            } else if (_this.targetPage == 3) {
              _this.$router.push({ path: "test" });
            } else if (_this.targetPage == 4) {
              _this.$router.push({ path: "myTaobao" });
            }
          } else {
            AlertModule.show({
              title: "温馨提示",
              content: "用户名或密码输入有误",
              onShow() {},
              onHide() {}
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/login.scss";
</style>
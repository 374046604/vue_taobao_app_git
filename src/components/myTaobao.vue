<template>
  <div class="my_taobao">
    <div class="taobao_header">
        <div class="taobao_user">
            <label for="avatar">
                <img class="userImg" :src="files.length ? files[0].url:oldUser" ref="editImage" />
            </label>
            <file-upload
            extensions="gif,jpg,jpeg,png,webp"
            accept="image/png,image/gif,image/jpeg,image/webp"
            name="avatar"
            class="btn btn-primary"
            post-action="http://127.0.0.1:3000/users/uploadImg"
            :drop="!edit"
            v-model="files"
            @input-filter="inputFilter"
            @input-file="inputFile"
            ref="upload">
            </file-upload>
        </div>
    </div>
    <!--选择图片的时候出来-->
    <div class="user_upload_box" v-show="files.length && edit">
        <!--会生成一个和图片父级的编辑框-->
        <div class="user_img" v-if="files.length"  >
            <img :src="files[0].url" ref="editImage" />
        </div>
        <div>
            <div class="clear" style="height:20px;"></div>
            <flexbox>
                <flexbox-item>
                <x-button type="primary"  @click.native="$refs.upload.clear">取消</x-button>
                </flexbox-item>
                <flexbox-item>
                <x-button type="warn" @click.native="editSave()">确定</x-button>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
    <div class="about_my">
      <span >收藏的宝贝</span>
      <span >收藏的店铺</span>
      <span >我的足记</span>
    </div>
    <group class="cell01">
      <cell is-link title="全部订单" value="查看全部订单">
        <!-- anything -->
      </cell>
    </group>
    <group class="cell02">
      <cell is-link title="购物车" ></cell>
      <cell is-link title="搜索" ></cell>
      <cell is-link title="支付宝" ></cell>
      <cell is-link title="旺旺" ></cell>
    </group>
    <group class="cell03">
      <cell is-link title="我的彩票" ></cell>
      <cell is-link title="我的机票" ></cell>
    </group>
    <group>
      <div class="about_my">
        <span >退出</span>
        <span >意见反馈</span>
        <span >电脑版</span>
      </div>
    </group>
    <down-app class="down_app"></down-app>
  </div>
</template>

<script>
import downApp from "./downApp";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import {
  XButton,
  Flexbox,
  FlexboxItem,
  Group,
  Calendar,
  CellBox,
  Cell
} from "vux";
import FileUpload from "vue-upload-component";
import axios from "axios";
export default {
  name: "my_taobao",
  data() {
    return {
      edit: false,
      cropper: false,
      //用户头像图片
      files: [],

      //默认头像图片
      oldUser: require("../assets/img/touxiang .png"),
      allIndent: "查看全部订单"
    };
  },
  computed: {
    ...mapState(["User"])
  },
  components: {
    FileUpload,
    XButton,
    Flexbox,
    FlexboxItem,
    Group,
    Calendar,
    CellBox,
    Cell,
    downApp
  },
  created() {},
  mounted() {
    var _this = this;
    //未登录 就去登录
    // if(!this.User){
    //   this.$router.push('login');
    // }
    if (this.User) {
      axios({
        method: "get",
        url: "http://127.0.0.1:3000/users",
        //get方式下的参数
        // params: {
        //   pageIndex: self.pageIndex,
        //   pageSize:self.pageSize
        // },
        //post方式下的参数
        //data:data,
        responseType: "json"
      })
        .then(function(res) {
          var result = res.data;
          _this.oldUser = result.result.userImg;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("未登录，亲先登录");
    }
  },
  methods: {
    editSave() {
      this.edit = false;
      let oldFile = this.files[0];
      //获取编辑完成的图片
      let binStr = atob(
        this.cropper
          .getCroppedCanvas()
          .toDataURL(oldFile.type)
          .split(",")[1]
      );
      let arr = new Uint8Array(binStr.length);
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i);
      }
      let file = new File([arr], oldFile.name, { type: oldFile.type });
      //上传方法
      this.$refs.upload.update(oldFile.id, {
        file,
        type: file.type,
        size: file.size,
        active: true
      });
    },
    //添加图片 更新后的执行方法
    inputFile(newFile, oldFile, prevent) {
      //新增头像
      if (newFile && !oldFile) {
        this.$nextTick(function() {
          this.edit = true;
        });
      }
      //删除头像
      if (!newFile && oldFile) {
        this.edit = false;
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      //新增文件
      if (newFile && !oldFile) {
        //判断文件类型
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert("Your choice is not a picture");
          return prevent();
        }
      }
      //更新头像
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file);
        }
      }
    }
  },
  watch: {
    //当监听的名称和变量名相同 监听变量名
    edit(value) {
      if (value) {
        this.$nextTick(function() {
          if (!this.$refs.editImage) {
            return;
          }
          //生成一个背景透明的编辑框
          let cropper = new Cropper(this.$refs.editImage, {
            aspectRatio: 1 / 1,
            viewMode: 1
          });
          this.cropper = cropper;
        });
      } else {
        if (this.cropper) {
          this.cropper.destroy();
          this.cropper = false;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/myTaobao.scss";
</style>

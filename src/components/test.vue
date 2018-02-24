<template>
  <div class="test">
    {{$route.query.text}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  data () {
    return {
        title:''
    }
  },
  created(){
  },
  mounted(){
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/common_sass.scss";
@import "../assets/css/page/login.scss";
</style>
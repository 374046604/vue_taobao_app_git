/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue';
import Vuex from 'vuex';
// 告诉 vue “使用” vuex
Vue.use(Vuex);

//声明一个状态数据
const state = {
    isLogin: false,
    //我的淘宝，我的购物车进来就查用户信息
    User:'',
    Psw:''
}
//状态变更 
const mutations = {
    //放着修改数据的方法
    //显示目录
    //登录存用户信息
    setUserinfo(state,data) {
        state.isLogin=true;
        state.User=data.user;
        state.Psw=data.psw;
        console.log(data);
    }
}
//异步的状态变更
const actions = {

}
//可以理解为计算属性 vuex的
const getters = {

}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
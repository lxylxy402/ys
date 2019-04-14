import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: [
        { name: '首页', link: '/home', haveBorder: true, num: 0 },
        { name: '学院概况', link: '/home', haveBorder: true, num: 1 },
        { name: '新闻动态', link: '/new', haveBorder: true, num: 2 },
        { name: '网上报名', link: '/new', haveBorder: true, num: 3 },
        { name: '联系我们', link: '/contactUs', haveBorder: false, num: 4 }
    ],
    chooseLink: 0,
    isShow:false
  },
  mutations: {
    changeChoose(state, num) {
        console.log(num)
        state.chooseLink = num
    },
    showBar(state){
        state.isShow=true
    },
    hideBar(state){
        state.isShow=false;
        }
  },
  actions: {
    showSideBar({commit}){
        commit('showBar')
    },
    hideSideBar({commit}){
        commit('hideBar')
    }
  },
  getters: {
    isShowMethod(state){
        return state.isShow;
        }
    }
})

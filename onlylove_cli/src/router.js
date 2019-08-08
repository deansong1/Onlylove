import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Carousel from "./components/lunbo/Carousel.vue"

//#彼爱旅拍
//（1）登录网页
import Login from "./components/lunbo/Login.vue"
import Toper from "./components/common/Toper.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Toper",component:Toper},
    {path:"/Carousel3",component:Carousel},
    {path:"/Login",component:Login},
    {path:'/',component:HelloContainer},
    
  ]
})

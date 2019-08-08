<template>

<header class="top">
  <!-- 顶部logo栏 -->
  <div class="w-100">
    <div class="logoer">
      <div class="pics">
      <a href=""><img src="../../assets/img/images/ico_home.png" alt=""></a>
      <a href=""><img src="../../assets/img/images/ico_tmall.png" alt=""></a>
      <a href=""><img src="../../assets/img/images/ico_wechat.png" alt=""></a>
      <a href=""><img src="../../assets/img/images/ico_weiwbo.png" alt=""></a>
      </div>
    </div>
  </div>
  <!-- 顶部栏导航栏 -->
  <div class="bot w-100">
    <div class="slogan">
      <a href=""><img src="../../assets/toplogo.png" alt=""></a>
      <a href="javascript:;" @click="l_navi" ><img src="../../assets/mune-btn.png" alt=""></a>
    </div>
  </div>
  <div class="touch" :class="{nav:bool}">
    <ul>
      <li><a href="">探索彼爱</a></li>
      <li><a href="">原创作品</a></li>
      <li><a href="">客片鉴赏</a></li>
      <li><a href="">旅拍短片</a></li>
      <li><a href="">明星选择</a></li>
      <li><a href="">档期预约</a></li>
    </ul>
    <div class="ew">
      <img src="../../assets/ew.png" alt="">
      <p>关注BLOVE官方公众号<br>了解更多资讯</p>
    </div>
  </div>
</header>

</template>

<script>
// import carousel from "../lunbo/Carousel"
export default {
    data(){
        return {bool:false}
    },
    methods:{
        l_navi(){
            if (this.bool==true) {
                this.bool=false;
                document.querySelector(".nav").style.width="0";
                document.querySelector(".nav ul").style.width="0";
                document.querySelector(".nav ul li a").style.width="0";
                document.querySelector(".nav .ew").style.width="0";
                document.querySelector(".nav .ew img").style.width="0";
                document.querySelector(".nav .ew p").style.width="0";
            }else{
                this.bool=true,
                document.querySelector(".touch").style.width="70%";
                document.querySelector(".touch ul").style.width="100%";
                document.querySelector(".touch ul li a").style.width="198px";
                document.querySelector(".touch .ew").style.width="142.5px";
                document.querySelector(".touch .ew img").style.width="100%";
                document.querySelector(".touch .ew p").style.width="100%";
            }
        }
    },
    components:{
      //  carousel
    }
}
</script>
<style scoped>
    /* 顶部logo栏 */
   .logoer{
    position: relative;
    overflow: hidden;
    width: 94%;
    margin: 0 auto;
   }
   .pics{
     float:right;
   }
   .pics a{
     display: inline-block;
     width: 29.63px;height: 22.5px;
     border-right: 1px solid #e5e5e5;
     margin: 2.5px 0 0;
     padding: 0.75px 8.25px;
   }
   .pics a:last-child{
     border-right:0;
   }
   .pics a img{
     width: 15px;height: 13px;
     margin-bottom: 5px;
   }
   /* 顶部导航栏 */
   div.bot{
     margin-bottom: 10px;
     height: 63.75px;
   }
   div.slogan{
      width: 94%;
      margin: 0 auto;
      height: 63.75px;
      display: flex;
      line-height: 63.75px;}
   div.slogan a:first-child img{
     width: 217.5px;height: 37.5px;
     margin: 0 0 0 50px;
   }
   div.slogan a:last-child img{
     width: 30px;height: 18.75px;
    
     margin: 15px 0 0 35px;
    
   }
   div.slogan a:last-child{
     line-height:63.75px;
   }
   /* 左边导航栏 */
   .touch{
     width:70%;
     height: 667px;
     background: rgba(157,31,35,51);
     transition:all 1s ease;
   }
   .nav{
     width:70%;
     height: 667px;
     background: rgba(157,31,35,51);
   }
   .touch ul{
     width:100%;
     height:351.09px;
     list-style:none;
     padding: 15px 0;
   }
   .touch ul a{
     display: block;
     color:#fff;
     width:198px;
     margin:0 auto;
     padding: 15px 0;
     border-bottom:0.5px solid #e5e5e5;
   }
   .ew{
     width: 142.5px;
     height: 210.34px;
     margin:0 auto;
     }
   .ew img{
     width: 142.5px;
     height: 138.84px;
   }
   .ew p{
    font-size:12px;
    padding: 3.75px;
    color:#c5a5a5;
   }
</style>
<template>
    <div class="ousel">
        <!-- 轮播图片-->
    <div  id="pic" class="w-100 carousel" data-ride="carousel">
       <div class="carousel-inner">
           <div class="carousel-item active">
               <a href="">
                   <img class="w-100" src="../../assets/img/csl/lunbo1.jpg" alt=""/>
               </a>
           </div>
           <div class="carousel-item">
               <a href="">
                   <img class="w-100" src="../../assets/img/csl/lunbo2.jpg" alt=""/>
                   </a>  
           </div>
           <div class="carousel-item">
               <a href="">
                   <img class="w-100" src="../../assets/img/csl/lunbo3.jpg" alt=""/>
               </a>
           </div>
           <div class="carousel-item">
               <a href="">
                   <img class="w-100" src="../../assets/img/csl/lunbo4.jpg" alt=""/>
               </a>
           </div>
           <div class="carousel-item">
               <a href="">
                   <img class="w-100" src="../../assets/img/csl/lunbo5.jpg" alt=""/>
               </a>
           </div>
       </div>
        <!-- 轮播指示器-->
        <ul class="carousel-indicators">
            <li data-target="#pic" data-slide-to="0" class="active"></li>
            <li data-target="#pic" data-slide-to="1"></li>
            <li data-target="#pic" data-slide-to="2"></li>
            <li data-target="#pic" data-slide-to="3"></li>
            <li data-target="#pic" data-slide-to="4"></li>
        </ul>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return {}
    },
    components:{
       
    }
}
</script>
<style scoped>
    /*轮播图*/
        .carousel{width:1200px;margin-top:-10px;}
    /* 轮播指示器 */
        .carousel-indicators li{
            width:0.8rem;height: 0.8rem;
            border-radius: 50%;
            background:#fff;
            margin-left: 6px;
            margin-right:6px;
        }
        .carousel-indicators .active{
            background: #004085;
        }
</style>
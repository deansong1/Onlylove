<template>
    <div class="app-login">
        <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{maxlength:10}"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="upwd" type="password"></mt-field>
        <mt-button type="primary" size="large" @click="login">登录</mt-button>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            unameholder:"请输入提示",//用户名提示
            upwdholder:"请输入密码",
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            //功能：完成用户登录操作
            //1.获取用户输入用户名
            var u=this.uname;
            //2.获取用户输入密码
            var p=this.upwd;
            // 3.创建正则表达式验证用户名和密码
            var reg=/^[a-z0-9]{3,12}$/i;
            if (!reg.test(u)) {
                this.$toast("用户名格式不正确");
                return;
                };
            if (!reg.test(p)) {
                this.$toast("密码格式不正确");
                return;
                }
                //6:发送ajax请求 axios
                var url="login";
                var obj={uname:u,upwd:p}
                this.axios.get(url,{params:obj}).then(res=>{
                    //7.获取服务器返回结果17：30
                    console.log(res); 
                    //7.1登录失败
                    //7.2登录成功 跳转商品首页组件
                                   })
            }
            // 3-12 字母数字
            // 4.用户验证失败 提示短消息
            //5.密码验证失败 提示短消息
            // 6.发送ajax请求 请求axios?
            
        },
    components:{
       
    }
}
</script>
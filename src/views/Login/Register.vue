<template>
    <div class="register">
        <div class="content">
            <div class="logo">
                <img src="https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png" alt="">
            </div>
            <input type="text" id="account" placeholder="请输入账号" v-model="account">
            <input type="password" id="password" placeholder="请输入密码" v-model="password">
            <input type="password" id="rePassword" placeholder="再次输入密码" v-model="rePassword">
            <button class="custom-btn" @click="loginAccount">注册</button>
            <button class="custom-btn" @click="returnLogin">返回</button>
        </div>
    </div>
</template>

<script setup lang='ts' name='Register'>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router' 

    let account = ref('')
    let password = ref('')
    let rePassword = ref('')

    //注册
    function loginAccount(){
        //TODO
        console.log('TODO 登陆账号逻辑')
        console.log('账号：', account.value)
        console.log('密码：', password.value)
    }

    //返回登陆界面：编程式路由导航
    const router = useRouter()
    function returnLogin(){
        router.replace({
        // router.push({
            name:'login', 
        })
    }

</script>

<style scoped lang='scss'>
    .register {
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle, #ff6699, #6666ff);
        width: 100vw;
        height: 100vh;
        .content {
            display: flex;
            flex-direction: column;
            width: 250px;
            .logo {
                display: flex;
                justify-content: center;
                img {
                    margin-bottom: 50px;
                    width: 100px;
                    height: auto;
                }
            }
            input {
                margin: 10px 0;
            }
            .custom-btn {
                margin-top: 15px;   
                padding: 5px 20px; 
                border-radius: 10px; 
                background-color: rgb(23, 9, 224);
                color: bisque;
                font-weight: 900;
            }
        }
    }
</style>
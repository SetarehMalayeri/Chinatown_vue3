<template>
    <div class="login">
        <div class="content">
            <div class="logo">
                <img src="https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png" alt="">
            </div>
            <input type="text" id="account" placeholder="请输入账号" v-model="account">
            <input type="password" id="password" placeholder="请输入密码" v-model="password">
            <button class="custom-btn" @click="loginAccount">登陆</button>

            <div class="getAcount">
                <div>忘记密码</div>
                <div class="custom-margin">|</div>
                <div>更多选项</div>
                <div class="custom-margin">|</div> 
                <RouterLink replace :to="{ name: 'register' }">注册</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='Login'>
    import { computed, ref } from 'vue'

    let account = ref('')
    let password = ref('')

    function loginAccount(){
        console.log('TODO 登陆账号逻辑')
        console.log('账号：', account.value)
        console.log('密码：', password.value)
    }

    //TODO 可读可写（计算属性）
    let fullName = computed({
        get(){    
            //TODO 读取缓存账号    
            return account.value
        },
        set(val){
            //TODO 输入类型检查
            account.value = val
        }
    })
</script>

<style scoped lang='scss'>
    .login {
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
                background-color: orange;
                color: bisque;
                font-weight: 900;
            }
            .getAcount {
                margin-top: 50px;
                display: flex;
                justify-content: center;
                .custom-margin {
                    margin: 0 10px;
                    color: rgb(131, 255, 214);
                }
            }
        }
    }
</style>
<template>
<loading v-model:active="isLoading"
        :is-full-page="true"
        color="#0074bd"
        />
    <div>
        <div class="form-login">
            <h2 class="form-heading">
                Hệ Thống Nhận Diện Biển Số Xe
            </h2>
            <label class="lb_login mb-2">Username</label>
            <div class="group-form">
                <input type="text" required v-model="username" />
                <span class="bar-light"></span>
                
            </div>
            <label class="lb_login mb-2">Password</label>
            <div class="group-form">
                <input type="password" required v-model="password" />
                <span class="bar-light"></span>
            </div>
            <p>{{ error }}</p>
            <button @click="login" class="btn btn-primary">
               Đăng nhập
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import router from '../router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'Login',
    components:{
        Loading
    },
    setup() {
        const store = useStore();
        const username = ref('');
        const password = ref('');
        const error = ref('');
        const isLoading = ref(false);
        async function login() {
            this.isLoading = true;
            await axios
                .post('https://api-ql-bai-gui-xe.herokuapp.com/api/login', {
                    username: username.value,
                    password: password.value,
                })
                .then((res) => {
                    sessionStorage.setItem('user', res.data.user.id);
                    sessionStorage.setItem('load', true);
                    sessionStorage.setItem('token', res.data.token);
                    store.commit('GET_ACTIVE',true);
                    this.isLoading = false;
                    router.push({ name: 'Home' });
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });
        }
        return {
            store,
            username,
            password,
            login,
            error,
            isLoading
        };
    },
};
</script>

<style>
.lb_login {
    position: unset;
}
</style>

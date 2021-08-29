<template>
  <div class="row" style="border-bottom: 1px solid #ccc;">
    <div class="col-12 header" v-if="(load || active)">
      <div class="row" style="align-items:center">
        <div class="col-2">
          <router-link class="lg-link" to="/"><img class="img-logo" src="assets/img/logo.png" alt=""></router-link>
        </div>
        <div class="col-8">
          <h2 class="heading">Hệ Thống Giám Sát Bãi Đỗ Xe</h2>
        </div>
        <div class="col-2">
          
          
          <div class="dropdown">
            
            <button class="btn btn-secondary dropdown-toggle drop-custom" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            Xin chào, Admin
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Đổi mật khẩu</a></li>
              <li><button @click="logUot" class="dropdown-item">Đăng xuất</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2 content-menu" v-if="(load || active)">
      <ul class="menu">
        <router-link to="/">
        <li class="menu-item" @click="change()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Hệ thống giám sát
        </li>
        </router-link>
        <router-link to="/data" >
          <li class="menu-item" @click="change()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
              </svg>
              Thống kê lượt ra vào</li>
        </router-link>
       
        <router-link to="/customer">
        <li class="menu-item" @click="change()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
              Vé tháng</li>
        </router-link>
        <router-link to="/overduelist">
        <li class="menu-item" @click="change()">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
              </svg>
              Danh sách quá hạn</li>
        </router-link>
        <router-link to="/blacklist">
        <li class="menu-item" @click="change()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
              Sổ đen</li>
        </router-link>
        <router-link to="/personnel">
        <li class="menu-item" @click="change()">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              Phân quyền</li>
        </router-link>
      </ul>
      
      
    </div>

    <div class="content-right" :class="(load || active) ? ' col-md-10' : 'col-md-12'">
      <router-view/>
    </div>
  </div>
</template>
<script>

import { computed } from "vue";
import { useStore } from "vuex";
// import { ref, onUpdated } from "vue";
import router from "./router";

export default ({
  setup() {
    const store = useStore()
    const load = computed(() => store.getters.active)
    const active =  sessionStorage.getItem('load');
    function logUot(){
      sessionStorage.removeItem('user')
      router.push({ name: 'Login'});
      sessionStorage.removeItem('load');
      store.commit('GET_ACTIVE',false);
      this.active = false;
      // console.log(this.load)
    }
    return{
      store,
      logUot,
      load,
      active
    }
  },
})
</script>

<style>
.header{
  border-bottom: 1px solid #ccc ;
  background: #e3e8ec;
}
.router-link-exact-active .menu-item{
  color: white;
  background-color: #0b5ed7a1;
}
.lg-link{
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
.img-logo{
  max-width: 160px;
}
.heading{
  text-align: center;
}
.drop-custom{
  display: flex;
  align-items: center;
}
.drop-custom > svg{
    width: 24px;
    height: auto;
    margin-right: 16px;

}
.btn-secondary{
  background-color: #0b5ed7a1;
  border-color: #0b5ed7a1;
}
.btn-check:focus+.btn-secondary, .btn-secondary:focus,
.btn-secondary:hover{
  color: var(--primary-color);
  background-color: white;
  border-color: #0b5ed7a1;
}
.content-menu{
  min-height: 900px;
}

</style>

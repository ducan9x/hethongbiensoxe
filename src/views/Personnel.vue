<template>
  <div class="row">
            <div class="col-md-12">
                <h3 class="heading-content">Danh sách nhân viên</h3>
                 <div class="col-md-2">
                     <router-link to="/registerpersonel" class="btn btn-primary">Thêm tài khoản mới</router-link>
                </div>
                <div class="col-md-12 container-table">
                    <table class="table table-hover">
                        <thead>
                      <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">username</th>
                        <th scope="col">password</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(list,index) in listPersonel" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{list.full_name}}</td>
                        <td>{{list.username}}</td>
                        <td>{{list.password}}</td>
                        <td><router-link to="editpersonel" @click="editPerson(list.username)" class="btn btn-info">Sửa</router-link><button class="btn btn-danger delete" @click="personDeleteItem(list.username)"  href="">Xóa</button></td>
                      </tr>
                      
                    </tbody>
                  
                    </table>
                </div>
            </div>

          </div>
</template>

<script>

import { computed } from 'vue';
import { useStore } from "vuex";
export default {
  name:'Personel',
  setup(){
    const store = useStore()
    const listPersonel = computed(() => store.getters.personels)
    function personDeleteItem(personId){
      store.dispatch('deletePerson',personId)
      store.dispatch('getPerson')
    }
    function editPerson(personId){
      store.commit('EDIT_PERSON',personId)
    }
    function getPerson(){
      store.dispatch('getPerson')
    }
    getPerson()

    return {
      store,
      listPersonel,
      personDeleteItem,
      editPerson
    }
  }
}
</script>

<style>
    .delete{
        margin-left: 30px;
    }
</style>

<template>
   <div class="row">
        <div class="col-md-6">
            <h3 class="heading-content">Thêm tài khoản nhân viên</h3>
            <form @submit.prevent="">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Tên</label
                    >
                    <input
                        required
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="full_name"
                    />
                   
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Address</label
                    >
                    <input
                        required
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                         v-model="address"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Phone</label
                    >
                    <input
                        required
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                         v-model="phone"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Mail</label
                    >
                    <input
                        required
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                         v-model="mail"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Password</label
                    >
                    <input
                        required
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                         v-model="password"
                    />
                </div>

                <router-link to="/personnel" class="btn btn-primary" @click="savePerson">Lưu</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import {  ref } from "vue";
import { useStore } from 'vuex'
export default {
    name:'EditPerson',
    setup(){
        const store = useStore()
         
        const person = store.state.listPersonel.edit
        const full_name = ref('');
        const password = ref('');
        const address = ref('');
        const phone = ref('');
        const mail = ref('');
        function load(){
            full_name.value = person[0].full_name,
            password.value = person[0].password,
            address.value = person[0].address,
            phone.value = person[0].phone,
            mail.value = person[0].mail
        }
        load()
        function savePerson(){
          
           
                event.preventDefault();
                const newPerson = {
                    full_name: full_name.value,
                    username: person[0].username,
                    password: password.value,
                    address: address.value,
                    phone: phone.value,
                    mail: mail.value
                };
                
                
                store.dispatch('savePerson',newPerson);

                full_name.value = '',
                password.value = '',
                address.value = '',
                phone.value = '',
                mail.value = ''
            
        }
        return{
            store,
            person,
            full_name,
            address,
            phone,
            mail,
            password,
            load,
            savePerson
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="row">
        <div class="col-md-6">
            <h3 class="heading-content">Thêm tài khoản nhân viên</h3>
            <form >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Tên</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="full_name"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Username</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="username"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Password</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="password"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Address</label
                    >
                    <input
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
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="mail"
                    />
                </div>

                <router-link to="/personnel" @click="addItem" class="btn btn-primary">Đăng ký!</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
    name: 'registerperson',
    setup() {
        const store = useStore();
        const full_name = ref('');
        const username = ref('');
        const password = ref('');
        const address = ref('');
        const phone = ref('');
        const mail = ref('');

        function addItem() {
            if (
                full_name.value.length > 0 &&
                username.value.length > 0 &&
                password.value.length > 0 &&
                address.value.length > 0 &&
                phone.value.length > 0 &&
                mail.value.length > 0 
            ) {
                const newPerson = {
                    full_name: full_name.value,
                    username: username.value,
                    password: password.value,
                    address: address.value,
                    phone: phone.value,
                    mail: mail.value,
                };

                store.dispatch('addPerson', newPerson);
                

                full_name.value = '';
                username.value = '';
                password.value = '';
                address.value = '';
                phone.value = '';
                mail.value = '';
            } else {
                alert('Nhập dữ liệu đầy đủ để thêm');
            }

        }
        return {
            store,
            full_name,
            username,
            password,
            address,
            phone,
            mail,
            addItem,
        };
    },
};
</script>

<style></style>

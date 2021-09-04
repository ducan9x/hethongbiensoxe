<template>
    <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Danh sách đăng ký vé tháng</h3>
            <div class="row" style="justify-content:space-between">
                <div class="col-md-2">
                    <router-link to="/registercustom" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Đăng ký vé tháng
                    </router-link>
                </div>
                <div class="col-md-6">
                    <div class="row" style="justify-content: flex-end;">
                        <div class="col-md-9">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Nhập để tìm kiếm" v-model="search">
                                <button class="btn btn-outline-primary" type="button" id="button-addon2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                        <div class="col-md-3" style="display: flex;justify-content: flex-end;">
                            <button class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                                </svg>
                                Làm mới
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 container-table">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Loại xe</th>
                            <th scope="col">Loại vé</th>
                            <th scope="col">Biển kiểm soát</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(list, index) in listFilterd" :key="list.id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ list.customer_name }}</td>
                            <td>{{ list.type_transport }}</td>
                            <td>{{ list.type_ticket }}</td>
                            <td>{{ list.license_plates }}</td>
                            <td>
                                <router-link to="editcustomer" @click="editCustomer(list.id)" class="btn btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    Sửa
                                </router-link>
                                <button @click="customerDeleteItem(list.id)" class="btn btn-danger ms-3" >
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- <loading v-model:active="isLoading"
        :is-full-page="true"
        color="#0074bd"
        /> -->
</template>

<script>
import { ref,computed} from 'vue';
import { useStore } from 'vuex';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'ListCustomer',
    // components:{
    //     Loading
    // },
    setup() {
        const store = useStore();
        function getData(){
            store.dispatch('getData'); 
        }
        getData()
        const listCustomer = computed(() => store.getters.customers)
        // const isLoading = computed(() => listCustomer.value.length > 0 ? false : true);
        const search = ref('')
        const listFilterd = computed(() => {
          let rs = listCustomer.value.filter(customer => customer.customer_name.includes(search.value)  || customer.license_plates.includes(search.value));
          return rs;
        })

        function editCustomer(customerId){
         store.commit('EDIT_CUSTOMER',customerId)
        }
        function customerDeleteItem(customerId){
        store.dispatch('deleteCustomer',customerId)
    }

        return {
            store,
            search,
            listCustomer,
            editCustomer,
            customerDeleteItem,
            listFilterd,
            // isLoading
        };
    },
};
</script>

<style>
    .delete{
        margin-left: 30px;
    }
</style>

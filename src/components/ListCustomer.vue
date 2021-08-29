<template>
    <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Danh sách đăng ký vé tháng</h3>
            <div class="row" style="justify-content:space-between">
                <div class="col-md-2">
                    <router-link to="/registercustom"
                    class="btn btn-primary"
                        >Đăng ký vé tháng</router-link
                    >
                </div>
                <div class="col-md-4" style="display:flex">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập tên hoặc biển kiểm soát để tìm kiếm..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            v-model="search"
                        />
                        
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
                            <th scope="col"></th>
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
                                <router-link to="editcustomer" @click="editCustomer(list.id)" class="btn btn-info">Sửa</router-link>
                                <button @click="customerDeleteItem(list.id)" class="btn btn-danger delete" href="" >Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <loading v-model:active="isLoading"
        :is-full-page="true"
        color="#0074bd"
        />
</template>

<script>
import { ref,computed} from 'vue';
import { useStore } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'ListCustomer',
    components:{
        Loading
    },
    setup() {
        const store = useStore();
        function getData(){
            store.dispatch('getData'); 
        }
        getData()
        const listCustomer = computed(() => store.getters.customers)
        const isLoading = computed(() => listFilterd.value.length > 0 ? false : true);
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
            
            isLoading
        };
    },
};
</script>

<style>
    .delete{
        margin-left: 30px;
    }
</style>

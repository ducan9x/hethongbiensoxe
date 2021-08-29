<template>
    <div class="row">
        <div class="col-md-6">
            <h3 class="heading-content">Đăng ký vé tháng</h3>
            <div >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Tên</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="name"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Loại xe</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="vehicle"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Loại vé</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="typeCard"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Biển kiểm soát</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="licensePlates"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Màu</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="color"
                    />
                </div>
                <!-- <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Tháng</label
                    >
                    <select
                        class="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div> -->

                <router-link to="/customer" @click="addNewCusTomer()" class="btn btn-primary">Đăng ký!</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from "uuid";
import { useStore } from 'vuex';
export default {
    name: 'registercustom',
    setup(){
      const store = useStore()
      const name = ref('')
      const vehicle = ref('')
      const typeCard = ref('')
      const licensePlates = ref('')
      
      const color = ref('')
      function addNewCusTomer(){
        
                const newCustomer = {
                    id:uuidv4(),
                    color: color.value,
                    customer_name: name.value,
                    type_transport:vehicle.value,
                    type_ticket:typeCard.value,
                    license_plates:licensePlates.value
                };

                store.dispatch('addCustomer', newCustomer);

                color.value = '',
                name.value = '';
                vehicle.value= '';
                typeCard.value= '';
                licensePlates.value= '';
            
      }
      return{
        store,
        name,
        vehicle,
        typeCard,
        licensePlates,
        color,
        addNewCusTomer
      }
    }
};
</script>

<style></style>

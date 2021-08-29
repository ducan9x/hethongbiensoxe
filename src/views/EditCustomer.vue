<template>
    <div class="row">
        <div class="col-md-6">
            <h3 class="heading-content">Chỉnh sửa thông tin</h3>
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

                <router-link to="/customer" @click="addNewCusTomer()" class="btn btn-primary">Lưu</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// import { v4 as uuidv4 } from "uuid";
import { useStore } from 'vuex';
export default {
    name: 'registercustom',
    setup(){
      const store = useStore()
      const customer = store.state.listCustomer.edit
      const name = ref('')
      const vehicle = ref('')
      const typeCard = ref('')
      const licensePlates = ref('')
      const color = ref('')
      function load(){
            name.value = customer[0].customer_name,
            vehicle.value = customer[0].type_transport,
            typeCard.value = customer[0].type_ticket
            licensePlates.value = customer[0].license_plates
            color.value = customer[0].color
        }
        load()
      function addNewCusTomer(){

                const newCustomer = {
                    id: customer[0].id,
                     color: color.value,
                    customer_name: name.value,
                    type_transport:vehicle.value,
                    type_ticket:typeCard.value,
                    license_plates:licensePlates.value
                };

                store.dispatch('saveCustomer', newCustomer);

                color.value = '',
                name.value = '';
                vehicle.value= '';
                typeCard.value= '';
                licensePlates.value= '';
            
      }
      return{
        store,
        load,
        customer,
        name,
        vehicle,
        typeCard,
        color,
        licensePlates,
        addNewCusTomer
      }
    }
};
</script>

<style></style>

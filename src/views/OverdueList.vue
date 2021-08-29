<template>
   <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Danh sách phương tiện để quá thời hạn</h3>
            <div class="row" style="justify-content:space-between">
                <div class="col-md-4 mt-3">
                    <div class="container-picker-time">
                        Thời gian từ
                        <Datepicker class="mt-1 mb-3" v-model="pickTimeStart" />
                        Đến
                        <Datepicker class="mt-1 mb-3" v-model="pickTimeEnd" />
                        <button class="btn btn-primary" style="border-color:white">Tìm kiếm</button>
                        <div style="display:none">{{pickTimeStart}} to {{pickTimeEnd}}</div>
                    </div>
                </div>
                <div class="col-md-8 container-table">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Biển kiểm soát</th>
                                <th scope="col">Ảnh biển kiểm soát</th>
                                <th scope="col">Loại vé</th>
                                <th scope="col">Thời gian gửi</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in 10" :key="index">
                                <th scope="row">{{index++}}</th>
                                <td>XMT-000025</td>
                                <td><img
                                    src="assets/img/bsx.PNG"
                                    alt="ảnh biển số xe vào"
                                />
                                </td>
                                <td>Vé ngày</td>
                                <td>9/5/2021</td>
                                <td>
                                    <router-link to="editcustomer" class="btn btn-info me-2">Chi tiết</router-link>
                                    <button class="btn btn-danger delete" href="" >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vue3-datepicker';
import {ref } from 'vue';
export default {
    name:'OverdueList',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Datepicker
    },
    setup(){
        const pickTimeStart = ref('');
        const pickTimeEnd = ref('');
        return {
            pickTimeStart,
            pickTimeEnd
        }
    }
}
</script>

<style>
    .container-picker-time{
        padding:20px;
        border-radius: 10px;
        color:white;
        background-color: #0074bd;
    }
</style>
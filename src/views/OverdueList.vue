<template>
   <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Danh sách phương tiện để quá thời hạn</h3>
            <div class="row" style="justify-content:flex-end">
                    <div class="col-md-3 form-day-to-day">
                        <label class="me-3">Thời gian từ</label> 
                        <Datepicker class="mt-1 mb-3" v-model="pickTimeStart" />
                    </div>
                    <div class="col-md-3 form-day-to-day">
                        <label class="me-3">Đến</label> 
                        <Datepicker class="mt-1 mb-3" v-model="pickTimeEnd" />
                    </div>
                    <div class="col-md-2 form-day-to-day">
                        <button class="btn btn-primary" style="border-color:white">Tìm kiếm</button>
                        <div style="display:none">{{pickTimeStart}} to {{pickTimeEnd}}</div>
                    </div>
                <div class="col-md-12 container-table">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Biển kiểm soát</th>
                                <th scope="col">Ảnh biển kiểm soát</th>
                                <th scope="col">Loại vé</th>
                                <th scope="col">Thời gian gửi</th>
                                <th scope="col">Hành động</th>
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
                                    <router-link to="editcustomer" class="btn btn-info me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                        Chi tiết
                                        </router-link>
                                    <button class="btn btn-danger">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                        Xóa</button>
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
.form-day-to-day{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-day-to-day label{
    color:black
}
.form-day-to-day input{
    margin: 0 !important;
    padding: 5px;
    border: none
}
</style>
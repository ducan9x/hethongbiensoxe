<template>
   <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Danh sách phương tiện để quá thời hạn</h3>
            <div class="row" style="justify-content:space-between">
                <div class="col-md-12 container-table">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Biển kiểm soát</th>
                                <th scope="col">Phương tiện</th>
                                <th scope="col">Chủ xe</th>
                                <th scope="col">Lý do</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 12" :key="i"> 
                                <th scope="row">{{i++}}</th>
                                <td>XMT-000025</td>
                                <td>Ô tô</td>
                                <td>Nguyễn Văn A</td>
                                <td>Lý do</td>
                                <td>
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

export default {
    name:'BackList',
}
</script>

<style>

</style>
<template>
    <div class="row">
        <div class="col-md-6">
            <div class="row"  style="justify-content: space-between">
                <div class="col-md-12">
                    <h3 class="heading-content">Thống kê</h3>
                </div>
                
            <div class="col-md-2">
                <select class="form-select" v-model="selected">
                    <option>Tất cả</option>
                    <option v-for="item in keyTime" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </div>
            <div class="col-md-6" style="display: flex">
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập biển kiểm soát để tìm kiếm..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        v-model="search.current"
                    />
                    <button @click="searchData()" class="btn btn-primary">Tìm kiếm</button>
                </div>
            </div>
            <div class="col-md-12 container-table">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Giá vé</th>
                            <th scope="col">Biển kiểm soát</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(Vehical, index) in ListVehical"
                            :key="Vehical.id"
                        >
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ Vehical.date }}</td>
                            <td>{{ Vehical.status }}</td>
                            <td>{{ Vehical.card }} đ</td>
                            <td>{{ Vehical.license_plates }}</td>
                            <td>
                                <button @click="getInfor(Vehical.id)" class="btn btn-primary">
                                    Xem thêm
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div class="col-md-6">
            <h3 class="heading-content">Thông tin chi tiết</h3>
            <div v-if="listFilterd.length > 0">
                <div class="row">
                    <div class="col-md-6">
                        <div class="container-img">
                            <h4 class="title-heading-img">
                                {{ listFilterd[0].status }}
                            </h4>
                            <div class="img">
                                <img
                                    :src="listFilterd[0].imgVehicle"
                                    alt="ảnh biển số xe vào"
                                    v-if="listFilterd[0].imgVehicle.length"
                                />
                                <img
                                    src="/assets/img/bsvao.PNG"
                                    alt="ảnh biển số xe vào"
                                    v-else
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="container-img">
                            <h4 class="title-heading-img">
                                Toàn cảnh ảnh {{ listFilterd[0].status }}
                            </h4>
                            <div class="img">
                                <img
                                    :src="listFilterd[0].imgVehicleOverview"
                                    alt="ảnh biển số xe vào"
                                    v-if="
                                        listFilterd[0].imgVehicleOverview.length
                                    "
                                />
                                <img
                                    src="/assets/img/tcvao.PNG"
                                    alt="ảnh toàn cảnh biển số xe vào"
                                    v-else
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-img information">
                    <h3 class="title-heading-img">Thông tin xe vào</h3>
                    <div class="information-content">
                        <p class="lb-information" for="">
                            Thời gian:<span class="data-information">{{
                                listFilterd[0].datetime
                            }}</span>
                        </p>
                        <p class="lb-information" for="">
                            Giá vé:
                            <span class="data-information">{{
                                listFilterd[0].card
                            }}</span>
                        </p>
                        <p class="lb-information" for="">
                            Loại xe:
                            <span class="data-information">{{
                                listFilterd[0].vehicle
                            }}</span>
                        </p>
                    </div>
                    <div class="bsx">
                        <span class="lb-information">Biển số xe:</span>
                        <label for="">{{
                            listFilterd[0].license_plates
                        }}</label>
                    </div>
                    <img
                        class="bsx-img"
                        :src="listFilterd[0].imgLicensePlates"
                        alt="Biển số xe"
                    />
                </div>
                <div class="container-img information">
                    <h3 class="title-heading-img">Thông tin vé</h3>
                    <div class="information-content">
                        <p class="lb-information" for="">
                            Chủ xe:
                            <span class="data-information">{{
                                listFilterd[0].owner
                            }}</span>
                        </p>
                        <p class="lb-information" for="">
                            Địa chỉ:
                            <span class="data-information">{{
                                listFilterd[0].address
                            }}</span>
                        </p>
                        <p class="lb-information" for="">
                            Hết hạn:
                            <span class="data-information">{{
                                listFilterd[0].expired
                            }}</span>
                        </p>
                        <p class="lb-information" for="">
                            Biển số xe đăng ký:
                            <span class="data-information">{{
                                listFilterd[0].license_plates
                            }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed, reactive } from 'vue';
// import { ref } from "vue";
export default {
    name: 'data',
    components: {},
    setup() {
        const store = useStore();

        const search = reactive({
            current: '',
            final: '',
        });
        const selected = ref('Tất cả');

        const listTime = store.getters.datas.reduce((r, a) => {
            r[a.date] = [...(r[a.date] || []), a];
            return r;
        }, {});

        const keyTime = Object.keys(listTime);
        const dataValue = reactive({
            idProduct: -1,
        });
        const ListVehical = computed(() => {
            let rs = store.getters.datas;
            if (selected.value != 'Tất cả')
                rs = rs.filter((e) => e.date == selected.value);
            rs = rs.filter((x) => x.license_plates.includes(search.final));
            return rs;
        });

        function searchData() {
            search.final = search.current;
        }
        const listFilterd = computed(() => {
            return ListVehical.value.filter(
                (datas) => datas.id == dataValue.idProduct
            );
        });
        function getInfor(idData) {
            dataValue.idProduct = idData;
        }
        return {
            store,
            selected,
            search,
            getInfor,
            searchData,
            ListVehical,
            listFilterd,
            keyTime,
        };
    },
};
</script>

<style></style>

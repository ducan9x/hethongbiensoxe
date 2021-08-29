<template>
    <div class="home row">
        <div class="col-md-6" v-if="dataTime.length > 0">
            <h2 class="heading-content" style="text-align:center">
                Thống kê theo giờ
            </h2>
            <Chart :chartData="dataTime" :options="charOptions" />
        </div>
        <div class="col-md-6">
            <h3 class="heading-content">Thống kê</h3>

            <div class="col-md-12 container-table">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Giá vé</th>
                            <th scope="col">Biển kiểm soát</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Vehical in ListVehical" :key="Vehical.id">
                            <th scope="row">{{ stt++ }}</th>
                            <td>{{ Vehical.date }}</td>
                            <td>{{ Vehical.status }}</td>
                            <td>{{ Vehical.card }} đ</td>
                            <td>{{ Vehical.license_plates }}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-6" v-if="dataDate.length > 0">
            <h2 class="heading-content" style="text-align:center">
                Thống kê theo ngày
            </h2>
            <Chart :chartData="dataDate" :options="charOptions" />
        </div>
        <div class="col-md-6" v-if="dataVehicles.length > 0">
            <h2 class="heading-content" style="text-align:center">
                Thống kê các loại xe
            </h2>
            <PieChart :chartData="dataVehicles" :options="charOptions" />
        </div>
    </div>
</template>

<script>
import { reactive,computed} from 'vue';
import { useStore } from 'vuex';
// @ is an alias to /src
// import moment from "moment";
import PieChart from "../components/PieChart";
import Chart from '../components/Chart';

export default {
    name: 'Home',
    components: {
        Chart,
        PieChart
    },
    setup() {
        const store = useStore();

         const stt = 1;
       
        const ListVehical = computed(() => store.getters.datas);
        


        


        const dataDate = reactive([]);
        const dataTime = reactive([]);
        const charOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        const dataLaneIn = store.getters.laneIn.reduce((r, a) => {
            r[a.date] = [...(r[a.date] || []), a];
            return r;
        }, {});
        const dataLaneOut = store.getters.laneOut.reduce((r, a) => {
            r[a.date] = [...(r[a.date] || []), a];
            return r;
        }, {});
        const dt = Object.keys(dataLaneIn)
        for (let i = 0; i < dt.length; i++) {
            const date = dt[i];
            const countIn = dataLaneIn.[dt[i]].length
            const countOut = dataLaneOut.[dt[i]].length
            dataDate.unshift({date, total: {countIn:countIn,countOut:countOut}})
        }


        // Time
        const dataTimeLane = store.getters.datas.reduce((r, a) => {
            r[a.time] = [...(r[a.time] || []), a];
            return r;
        }, {});
        const dataTimeLaneIn = store.getters.laneIn.reduce((r, a) => {
            r[a.time] = [...(r[a.time] || []), a];
            return r;
        }, {});

        const dataTimeLaneOut = store.getters.laneOut.reduce((r, a) => {
            r[a.time] = [...(r[a.time] || []), a];
            return r;
        }, {});
        const dtTime = Object.keys(dataTimeLane)
        for (let i = 1; i < dtTime.length; i++) {
            const date = dtTime[i];
            let countTimeIn = 0
            let countTimeOut = 0
            if(dataTimeLaneIn.[dtTime[i]]){
              countTimeIn = dataTimeLaneIn.[dtTime[i]].length
            }
            if(dataTimeLaneOut.[dtTime[i]]){
              countTimeOut = dataTimeLaneOut.[dtTime[i]].length
            }
            // console.log(i)
            dataTime.unshift({date, total: {countIn:countTimeIn,countOut:countTimeOut}})
        }


        //Vehicle total
        const dataVehicles = reactive([])
        const dataVehicle = ListVehical.value.reduce((r, a) => {
            r[a.vehicle] = [...(r[a.vehicle] || []), a];
            return r;
        }, {});
        const dtVehicle = Object.keys(dataVehicle)
        for (let i = 0; i < dtVehicle.length; i++) {
            const vehicle = dtVehicle[i]
            const vehiclett = dataVehicle.[dtVehicle[i]].length
            dataVehicles.unshift({vehicle, total: vehiclett})
        }

        return {
            store,
            stt,
            ListVehical,
            dataLaneIn,
            dataLaneOut,
            charOptions,
            dataTimeLaneIn,
            dataTimeLaneOut,
            dataTime,
            dataVehicle,
            dataVehicles,
            dataDate,
        };
    },
};
</script>
<style scoped>
.container-table {
    max-height: 364px;
}
</style>

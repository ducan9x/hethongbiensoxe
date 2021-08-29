<script>
import { Pie } from 'vue3-chart-v2';
export default {
    extends: Pie,
    name: 'Chart',
    props: {
        label: {
            type: String,
        },
        chartData: {
            type: Array,
        },
        options: {
            type: Object,
        },
    },
    mounted() {
        const datas = this.chartData.map((d) => d.vehicle).reverse();
        const totalsVehicle = this.chartData.map((d) => d.total).reverse();
        this.renderChart(
            {
                labels: datas,
                datasets: [
                    {
                        label: 'Thống kê loại xe',
                        data: totalsVehicle,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                        ],
                        hoverOffset: 4,
                       
                    },
                ],
            },
            this.options
        );
    },
};
</script>

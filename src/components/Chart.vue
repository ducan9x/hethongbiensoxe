<script>
import { Line } from 'vue3-chart-v2';
export default {
    extends: Line,
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
    mounted(){
       const datas = this.chartData.map((d) => d.date).reverse();
        const totalsIn = this.chartData.map((d) => d.total.countIn).reverse();
        const totalsOut = this.chartData.map((d) => d.total.countOut).reverse();
        this.renderChart(
                  {
                    labels: datas,
                    datasets: [
                        {
                            label: 'Lượt ra',
                            data: totalsOut,
                            backgroundColor:'rgba(37, 189, 255, 0.4)',
                            borderWidth:0,
                            pointBorderWidth:0
                        },
                         {
                            label: 'Lượt vào',
                            data: totalsIn,
                            backgroundColor:'rgba(37, 255, 168, 0.3)',
                            borderWidth:0,
                            pointBorderWidth:0
                        },
                    ]
                }
                ,
                this.options  
            );
    }
    
};
</script>

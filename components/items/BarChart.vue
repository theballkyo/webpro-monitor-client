<script>
// import VueCharts from 'vue-chartjs'
import { Bar, mixins } from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    // console.log(this.data)
    this.renderChart(this.chartData, this.options)
    // this.renderChart({
    //   labels: this.labels,
    //   datasets: [
    //     {
    //       label: 'Data One',
    //       backgroundColor: '#f87979',
    //       data: this.data
    //     }
    //   ]
    // }, {responsive: true, maintainAspectRatio: false})
  },
  watch: {
    data (n, o) {
      
    }
  }
}
</script>

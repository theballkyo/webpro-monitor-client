<template>
  <div>
    <BarChart :chartData="memChartData()" :options="chartOptions()" :height="400" />
    <BarChart :chartData="cpuChartData()" :options="chartOptions()" :height="400" />
    <BarChart :chartData="dbConnChartData()" :options="chartOptions()" :height="400" />
    <BarChart :chartData="dbTableChartData()" :options="chartOptions()" :height="400" />
  </div>
</template>

<script>
import BarChart from "@/components/items/BarChart.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      barColor: [],
      borderColor: []
    };
  },
  computed: {
    ...mapGetters([
      'groupSort'
    ])
  },
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());
      return `rgba(${r()}, ${r()}, ${r()}, 0.75)`;
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ]
        }
      };
    },
    dbConnChartData() {
      const cData = {
        labels: this.groupSort.map(g => g.username),
        datasets: [
          {
            label: "DB Connection",
            backgroundColor: this.barColor,
            borderColor: this.borderColor,
            data: this.groupSort.map(g => g.db_conn)
          }
        ]
      };
      return cData;
    },
    dbTableChartData() {
      const cData = {
        labels: this.groupSort.map(g => g.username),
        datasets: [
          {
            label: "DB Table",
            backgroundColor: this.barColor,
            borderColor: this.borderColor,
            data: this.groupSort.map(g => g.db_table)
          }
        ]
      };
      return cData;
    },
    memChartData() {
      const cData = {
        labels: this.groupSort.map(g => g.username),
        datasets: [
          {
            label: "Memory usage",
            backgroundColor: this.barColor,
            borderColor: this.borderColor,
            data: this.groupSort.map(g => (g.memory_usage / 1048576).toFixed(0))
          }
        ]
      };
      return cData;
    },
    cpuChartData() {
      const cData = {
        labels: this.groupSort.map(g => g.username),
        datasets: [
          {
            label: "CPU usage",
            backgroundColor: this.barColor,
            borderColor: this.borderColor,
            // backgroundColor: "#7e7dd4",
            data: this.groupSort.map(g => g.cpu_usage)
          }
        ]
      };
      return cData;
    }
  },
  async mounted() {
    this.$store.dispatch("startFetch");
  },
  watch: {
    groupSort: function(n, o) {
      this.groupSort.forEach((g, i) => {
        if (!this.barColor[i]) {
          this.barColor[i] = this.randomColor();
          this.borderColor[i] = this.barColor[i].replace("0.2", "1");
        }
      });
    }
  }
};
</script>

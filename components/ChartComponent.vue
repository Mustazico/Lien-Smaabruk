<template>
    <div class="chart-container">
      <highchart :options="computedOptions" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    title: String,
    data: {
      type: Array,
      required: true,
    },
    timestamps: {
        type: Array,
        required: true,
    },
    yAxisTitle: {
      type: String,
      default: 'Verdi' // fallback if none is passed
    },
    color: {
        type: String,
        default: 'rgb(255, 0, 0)', // fallback to red
  },
  seriesName: {
  type: String,
  default: '',
}
  })
  
  const computedOptions = computed(() => ({
    chart: {
      type: 'line',
      animation: false,
    },
    legend: {
      enabled: false,
    },
    title: {
      text: props.title,
    },
    xAxis: {
        type: 'datetime',
        labels: {
        format: '{value:%d-%m %H:%M}',
  },
},
    yAxis: {
      title: {
        text: props.yAxisTitle,
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
  {
    name: props.seriesName || props.title,
    data: props.timestamps.map((timestamp, i) => [
      new Date(timestamp).getTime(),
      props.data[i],
    ]),
    color: props.color,
    lineWidth: 3,
  },
],
  }))
  </script>
  
  
  <style scoped>
  .chart-container {
    width: 90%;
    margin-top: 20px;
  }
  </style>
  
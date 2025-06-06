<template>
    <div class="container">
        <h1>Fjelly Miljø</h1>
        <MeasurementTable
            :headers="['Navn', 'Måling', 'Dato']"
            :data="sensorData"
        />
        <ChartComponent :options="chartOptions" />
    </div>
</template>

<script setup>
import MeasurementTable from '@/components/MeasurementTable.vue';
import ChartComponent from '@/components/ChartComponent.vue';

let data = ref([4.839, 5.241, 6.123, 7.456, 8.789, 9.012, 10.345, 11.678, 12.901, 13.234, 14.567, 15.890]);

let currentCategory = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

const sensorData = [
    { name: 'Batteri spenning', value: '13.815 V', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur stue', value: '4.839 °C', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur ute', value: '15.241 °C', date: '2025-06-06 11:45:32' },
];

const chartOptions = computed(() => ({
    chart: {
        type: 'line',
        animation: false,
    },
    legend: {
        enabled: false,
    },
    title: {
        text: 'Temperatur stue',
    },
    xAxis: {
        categories: currentCategory.value,
    },
    yAxis: {
        title: {
            text: 'Temperatur (°C)',
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
            name: 'Temperatur',
            lineWidth: 3,
            color: 'rgb(255, 0, 0)',
            data: data.value,
        },
    ],
}));
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    font-family: 'Inconsolata', 'sans-serif';
    font-weight: 400;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

h1 {
    font-size: 45px;
    color: #000000;
    font-weight: 400;
    margin-top: 20px;
}
</style>
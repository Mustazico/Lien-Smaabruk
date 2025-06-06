<template>
    <div class="container">
        <h1>Fjelly Miljø</h1>
        <!-- Komponent for tabell av målinger -->
        <MeasurementTable
            :headers="['Navn', 'Måling', 'Dato']"
            :data="sensorData"
        />
        <!-- Komponent for graf -->
        <ChartComponent
            title="Luftfuktighet"
            :data="humidityData"
            :timestamps="humidityTimestamps"
            :yAxisTitle="'Luftfuktighet (%)'"
            :color="'rgb(0, 128, 255)'"
            :seriesName="'Luftfuktighet'"
        />
    </div>
</template>

<script setup>
import MeasurementTable from '@/components/MeasurementTable.vue';
import ChartComponent from '@/components/ChartComponent.vue';

// Data for sensormålinger
const sensorData = [
    { name: 'Batteri spenning', value: '13.815 V', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur stue', value: '4.839 °C', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur ute', value: '15.241 °C', date: '2025-06-06 11:45:32' },
];

const humidityData = ref([70, 65, 80, 75]);

const humidityTimestamps = ref([
  '2025-06-04 12:00',
  '2025-06-04 13:00',
  '2025-06-04 14:00',
  '2025-06-04 15:00'
]);
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
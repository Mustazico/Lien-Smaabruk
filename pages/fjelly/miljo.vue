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
            :data="humidityValues"
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
import { useSensorStore } from '@/stores/sensorStore'

definePageMeta({
  maxLevel: 6
});

const sensorStore = useSensorStore();

// Data for sensormålinger
const sensorData = computed(() =>
  sensorStore.fjellySensorData.map(item => ({
    name: item.name,
    value: item.value + 
    (typeof item.value === 'number' ? (item.name.includes('Temperatur') ? ' °C' : item.name.includes('Luftfuktighet') ? ' % ' : item.name.includes('Batteri') ? ' V' : '') : ''),
    date: item.timestamp
  }))
)

const humidityValues = computed(() =>
  sensorStore.fjellyLuftfuktighetData.map(item => item.value)
)

const humidityTimestamps = computed(() =>
  sensorStore.fjellyLuftfuktighetData.map(item => item.timestamp)
)


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
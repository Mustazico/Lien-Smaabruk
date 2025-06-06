<template>
    <div class="container">
        <h1>Lien småbruk miljø</h1>
        <MeasurementTable
            :headers="['Navn', 'Måling', 'Dato']"
            :data="sensorData"
        />
    </div>
</template>

<script setup>
import MeasurementTable from '@/components/MeasurementTable.vue';

const sensorData = [
    { name: 'Batteri spenning', value: '13.815 V', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur stue', value: '4.839 °C', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur ute', value: '15.241 °C', date: '2025-06-06 11:45:32' },
];
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
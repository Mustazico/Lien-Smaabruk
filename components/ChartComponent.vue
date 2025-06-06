<template>
    <div class="chart-container">
        <highchart :options="options" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    options: Object, // Pass the Highcharts options as a prop
});
</script>

<style scoped>
.chart-container {
    width: 90%;
    margin-top: 20px;
}
</style>
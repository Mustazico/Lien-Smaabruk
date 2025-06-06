<template>
    <div class="container">
        <h1>Fjelly Miljø</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Navn</th>
                    <th>Måling</th>
                    <th>Dato</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in sensorData" :key="index">
                    <td><div class="cell-content">{{ data.name }}</div></td>
                    <td><div class="cell-content">{{ data.value }}</div></td>
                    <td><div class="cell-content">{{ data.date }}</div></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const sensorData = [
    { name: 'Batteri spenning', value: '13.815 V', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur stue', value: '4.839 °C', date: '2025-06-06 11:45:32' },
    { name: 'Temperatur ute', value: '15.241 °C', date: '2025-06-06 11:45:32' }
];
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    font-family: 'Inconsolata', 'sans-serif';
    font-weight: 400;
    margin-top: 20px;
    margin: 0;
    align-items: center;
    flex-direction: column; /* Center content vertically */
    padding: 20px; 
}

h1 {
    font-size: 45px;
    color: #000000;
    font-weight: 400;
    margin-top: 20px;
}

.table {
    width: 70%;
    border: 1px solid #ddd;
    border-collapse: collapse;
}

.table th, .table td {
    padding: 0; 
    text-align: center;
    border: 1px solid #ddd;
}

.table tr {
    background-color: #f9f9f9;
    height: 50px; 
}

.table td {
    height: 50px;
}

.cell-content {
    height: 100%;
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center content vertically */
    justify-content: center; /* Center content horizontally */
}

.table tr:hover {
    background-color: #e0e0e0; 
}
</style>
<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td v-for="(value, key) in row" :key="key">
                        <div class="cell-content">{{ value }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    headers: Array, // Array of column headers
    data: Array,    // Array of row data
});
</script>

<style scoped>
.table-container {
    display: flex;
    justify-content: center;
    width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

.table tr:hover {
    background-color: #e0e0e0;
}
</style>
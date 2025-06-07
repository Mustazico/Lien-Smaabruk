// stores/useSensorStore.ts
import { defineStore } from 'pinia'

export const useSensorStore = defineStore('sensor', () => {
  const fjellySensorData = ref([
    { name: 'Temperatur stue', value: 23.5, timestamp: '2025-06-04 12:00' },
    { name: 'Temperatur ute', value: 18.3, timestamp: '2025-06-04 12:00' },
    { name: 'Luftfuktighet', value: 65, timestamp: '2025-06-04 12:00' },
    { name: 'Batteri', value: 13.7, timestamp: '2025-06-04 12:00' },
  ])

  const fjellyLuftfuktighetData = ref([
    { value: 60, timestamp: '2025-06-04 12:00' },
    { value: 62, timestamp: '2025-06-04 13:00' },
    { value: 58, timestamp: '2025-06-04 14:00' },
    { value: 65, timestamp: '2025-06-04 15:00' },    
    ]);



  // In the future, replace this with an API call
  const fetchSensorData = async () => {
    // Static for now – no action needed
  }

  const updateFjellySensorData = () => {
    const sensor = fjellySensorData.value.find(item => item.name === 'Temperatur stue');
    if (sensor) {
        sensor.value = 25;
        console.log('Sensor data updated:', sensor);
    }
    };

 

  return {
    fjellySensorData,
    fetchSensorData,
    updateFjellySensorData,
    fjellyLuftfuktighetData
  }
})
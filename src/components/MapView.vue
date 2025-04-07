<!-- Контейнер карты -->
<template>
  <div id="map" class="map"></div>
</template>

<script setup>
// Импорт vue + leaflet, L-глобальный объект leaflet
import { onMounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Входящие данные от родителя lat и lng - координаты
const props = defineProps({
  lat: Number,
  lng: Number,
  title: String,
  price: Number
})

// Инициализация карты
let map

// Проверяет наличие координат и инициилизирует карту
onMounted(() => {
  if (props.lat && props.lng) {
    initMap()
  }
})

// Взаимодействие с картой
watch(() => [props.lat, props.lng], ([newLat, newLng]) => {
  if (map) {
    map.setView([newLat, newLng], 15)
  } else {
    initMap()
  }
})

// Создание карты и центрирование по координате
function initMap() {
  map = L.map('map').setView([props.lat, props.lng], 15)

  // Подложка 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  // создание виджета на указанной координате
  const popupContent = `<strong>${props.title}</strong><br/>${props.price} ₽`
  L.marker([props.lat, props.lng])
    .addTo(map)
    .bindPopup(popupContent)
    .openPopup()
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>

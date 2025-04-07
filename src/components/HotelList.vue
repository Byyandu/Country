<!-- компонент отображающий список карточек апартаментов -->
<template>
  <div class="list">
    <!-- работа с массивом hotels из assets -->
    <HotelCard
      v-for="hotel in hotels"
      :key="hotel.id"
      v-bind="hotel"
    />
  </div>
</template>
  
<script setup>
// импорт компонентов hotels из assets и hotelcard
import { hotels } from '../assets/hotels'
import HotelCard from './HotelCard.vue'
</script>
  
<style scoped>
.list {
  max-width: 800px;
  padding: 24px;
}
</style>
  
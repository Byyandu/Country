<template>
  <div class="home">
    <!-- компонент списка апартаментов -->
    <HotelList />
  </div>
</template>
  
<script setup>
// ипорт компонента со списком апартаментов
import HotelList from '../components/HotelList.vue'
</script>
  
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
}
</style>
<!-- карточка апартаментов -->
<template>
  <div class="hotel-card" :class="{ highlight, expired }">

    <img :src="image" alt="hotel photo" class="hotel-image" />
    <!-- информация по букингу -->
    <div class="hotel-info">
      <div class="hotel-header">
        <div class="hotel-header-1">
          <span class="type">{{ type }}</span>
            <h2 class="name">{{ name }} <span v-if="verified" class="verified">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L15.3411 1.23058L17.5922 1.91345L19.6668 3.02236L21.4853 4.51472L22.9776 6.33316L24.0866 8.4078L24.7694 10.6589L25 13L24.7694 15.3411L24.0866 17.5922L22.9776 19.6668L21.4853 21.4853L19.6668 22.9776L17.5922 24.0866L15.3411 24.7694L13 25L10.6589 24.7694L8.4078 24.0866L6.33316 22.9776L4.51472 21.4853L3.02236 19.6668L1.91345 17.5922L1.23058 15.3411L1 13L1.23058 10.6589L1.91345 8.4078L3.02236 6.33316L4.51472 4.51472L6.33316 3.02236L8.4078 1.91345L10.6589 1.23058L13 1Z" fill="#0F67CF"/>
              <path d="M10.7863 12.05L12.6153 8C12.9791 8 13.328 8.14223 13.5853 8.3954C13.8425 8.64858 13.9871 8.99195 13.9871 9.34999V11.15H16.5751C16.7077 11.1485 16.839 11.1754 16.9599 11.2288C17.0809 11.2822 17.1886 11.3609 17.2756 11.4594C17.3626 11.5578 17.4268 11.6737 17.4637 11.799C17.5007 11.9243 17.5095 12.056 17.4896 12.185L16.8586 16.2349C16.8256 16.4496 16.7148 16.6452 16.5467 16.7857C16.3787 16.9263 16.1647 17.0024 15.9441 16.9999H10.7863M10.7863 12.05V16.9999M10.7863 12.05H9.41451C9.17197 12.05 8.93936 12.1448 8.76785 12.3136C8.59635 12.4824 8.5 12.7113 8.5 12.95V16.0999C8.5 16.3386 8.59635 16.5676 8.76785 16.7363C8.93936 16.9051 9.17197 16.9999 9.41451 16.9999H10.7863" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          </h2>
        </div>
        <div class="hotel-header-2">
          <span class="rating">{{ rating }}</span>
          <!-- Кнопка для всплывающей карты -->
          <button class="map-btn" @click="toggleMap">
            {{ showMap ? 'Скрыть карту' : 'Показать на карте' }}
          </button>
          <!-- Всплывающая карта, обращается с данными к компоненту MapView -->
          <LeafletMap 
            v-if="showMap" 
            :lat="lat" 
            :lng="lng" 
            :title="name"
            :price="price"
            class="map-container"
          />
        </div>
      </div>

      <div class="hotel-meta">
        <p class="address">{{ address }}</p>
        <p class="distance">{{ distance }}</p>
      </div>

      <div class="hotel-info-2">
        <div class="hotel-info-3">
          <p class="room-type">{{ roomType }}</p>
          <div class="tags">
            <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="price-section">
          <div class="price">
            <small>за {{ nights }} ночей и {{ guests }} гостя</small>
            <span>{{ price }} ₽</span>
          </div>
          <button class="btn">Подробнее</button>
        </div>
      </div>
    </div>
 </div>
</template>

<script setup>
// импорт пакетов реактивности и карты
import { ref } from 'vue';
import LeafletMap from './MapView.vue';

defineProps({
  image: String,
  type: String,
  name: String,
  address: String,
  distance: String,
  roomType: String,
  tags: Array,
  price: Number,
  nights: Number,
  guests: Number,
  rating: String,
  verified: Boolean,
  expired: Boolean,
  lat: Number,
  lng: Number
})

// логика взаимодействия с картой
const showMap = ref(false);
const toggleMap = () => {
  showMap.value = !showMap.value;
};
</script>


<style scoped>
  .hotel-card {
    display: flex;
    width: 896px;
    height: 258px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: relative;
    overflow: visible;
  }

  .hotel-image {
    width: 290px;
    height: 258px;
    margin-bottom: -62px;
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;
  }

  .hotel-info {
    padding: 16px;
    flex: 1;
  }
  .hotel-header {
    display: flex;
    width: 566px;
    height: 45px;
    justify-content: space-between;
    align-items: center;
  }

  .hotel-header-1 {
    display: flex;
    flex-direction: column;
    width: 236px;
    height: 45px;
    align-items: baseline;
  }

  .type {
    font-size: 14px;
    color: gray;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #0F67CF;
    display: flex;
  }
  .verified svg {
  margin-left: 5px;
  }
  .hotel-header-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
 
  .rating {
    display: flex;
    justify-content: center;
    background-color: #0D9333;
    color: #ffffff;
    width: 35px;
    height: 19px;
    font-weight: 600;
    border-radius: 100px;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .map-btn {
  color: #0F67CF;
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  } 

  .map-btn:hover {
    opacity: 0.5;
  }
  
  
  .hotel-meta {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .hotel-info-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  .hotel-info-3 {
    width: 391px;
    display: flex;
    flex-direction: column;
  }

  .room-type {
    font-weight: 500;
    margin-bottom: 8px;
  }
  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .tag {
    background: #f1f1f1;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
  }

  .price-section {
    display: flex;
    width: 120px;
    justify-content: space-between;
    flex-direction: column;
    
  }
  .price {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 24px;
  }
  .price small {
    color: gray;
    font-size: 12px;
    font-weight: normal;
  }
  .btn {
    background-color: #E3353E;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  .map-container {
  position: absolute;
  left: -200px; 
  top: -50px;
  width: 400px;
  height: 500px;
  z-index: 100;  /* Чтобы карта была поверх других элементов */
  margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
</style>

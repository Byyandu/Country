<!-- html шаблон с контеййнерами шапки тела и футера -->
<template>
  <div class="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>


<script setup>
// импорт компонентов сайта
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
</script>

<!-- компонент шапки сайта -->
<template>
  <header class="header">
    <!-- компонент логотипа -->
    <Logo />
    <nav>
      <!-- заготовка для навигации по другим компонентам -->
      <a href="#">Создать заявку</a>
      <a href="#">Мои заявки</a>
    </nav>
  </header>
</template>
  
<script>
// импорт логотипа и экспорт шапки
  import Logo from '../assets/logo.vue';
  export default {
    name: 'Header',
    components: {
      Logo
    }
  }
</script>

<style scoped>
  .header {
    height: 79px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  nav a {
    text-decoration: none;
    color: #0B1827;
    height: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: right;
    padding: 10px;
  }
</style>
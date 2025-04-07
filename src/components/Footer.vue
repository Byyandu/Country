<!-- компонент нижней части сайта, включающий в себя логотип и информацию о рзработчике сайта -->
<template>
  <footer class="footer">
    <Logo />
    <p>сайт от country</p>
  </footer>
</template>
  
<script>
  import Logo from '../assets/logo.vue';
  export default {
    name: 'Header',
    components: {
      Logo
    }
  }
</script>

<style scoped>
  .footer {
    height: 79px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 14px;
    color: #959DA7;
    padding-right: 40px;
  }
</style>

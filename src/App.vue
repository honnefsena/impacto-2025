<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="home"></main>
  <Footer />
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #fff;
}
</style>

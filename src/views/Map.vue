<template>
  <div class="map">
    <h3 class="title">Mapa do Impacto</h3>
    <img src="/map.png" alt="Mapa" class="map-image">
    <hr>
    <div class="grid-list">
      <div class="grid-item">
        <Badge content="C" size="sm" bgColor="#00838F" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Café da Manhã e Espaço Kids
      </div>
      <div class="grid-item">
        <Badge content="C2" size="sm" bgColor="#E57399" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Espaço Gourmet
      </div>
      <div class="grid-item">
        <Badge content="B1" size="sm" bgColor="#E65125" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Alojamento Feminino
      </div>
      <div class="grid-item">
        <Badge content="B2" size="sm" bgColor="#B71C4A" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Alojamento Masculino
      </div>
      <div class="grid-item">
        <Badge content="B3" size="sm" bgColor="#F0624D" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Salão da Conferência
      </div>
      <div class="grid-item">
        <Badge content="B4" size="sm" bgColor="#FFCC80" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Centro de Convivência/Espaço Teen
      </div>
      <div class="grid-item">
        <Badge content="B5" size="sm" bgColor="#4285B5" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Stands/Podcasts
      </div>
      <div class="grid-item">
        <Badge content="O2" size="sm" bgColor="#9575CD" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Pocket Show
      </div>
      <div class="grid-item">
        <Badge content="D1" size="sm" bgColor="#80CBC4" textColor="#FFF" />
      </div>
      <div class="grid-item">
        Restaurante Oficial
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../components/Badge.vue'

export default {
  name: 'Map',
  components: {
    Badge
  }
}
</script>

<style scoped>
.map {
  padding: 20px;
}

.title {
  color: black;
  text-align: center;
}

.map-image {
  padding: 15px;
  width: 100%;
  height: auto;
}

.grid-list {
  display: grid;
  grid-template-columns: auto 2fr;
  gap: 15px;
  margin-top: 20px;
}

.grid-item {
  display: flex;
  align-items: center;
}
</style> 
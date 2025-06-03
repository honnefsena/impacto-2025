<template>
  <div>
    <div class="next-events">
      <h3>Próximos eventos</h3>
      <div class="now">
        <span class=""></span>
        <div class="agora">QUINTA</div>
      </div>
    </div>
    <div class="events-grid">
      <div class="grid-row">
        <Badge content="Geração Fiel" size="lg" bgColor="#8D6FAF" textColor="#FFF" />
        <Badge content="Espaço 1" size="lg" bgColor="#989898" textColor="#FFF" />
        <Badge content="10:00" size="lg" bgColor="#989898" textColor="#FFF" />
      </div>
      <div class="grid-row">
        <Badge content="Geração Fiel" size="lg" bgColor="#e8e2ef" textColor="#8D6FAF" />
        <Badge content="Espaço 2" size="lg" bgColor="#F2F2F2" textColor="#989898" />
        <Badge content="10:00" size="lg" bgColor="#F2F2F2" textColor="#989898" />
      </div>
      <div class="grid-row">
        <Badge content="Geração Fiel" size="lg" bgColor="#e8e2ef" textColor="#8D6FAF" />
        <Badge content="Espaço 3" size="lg" bgColor="#F2F2F2" textColor="#989898" />
        <Badge content="10:00" size="lg" bgColor="#F2F2F2" textColor="#989898" />
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'

export default {
  name: 'NextEvents',
  components: {
    Badge
  }
}
</script>

<style scoped>
.next-events {
  display: flex;
  justify-content: space-between;  
  padding: 15px;  
}
.next-events h3 {
  font-size: 25px;
  font-weight: 700;
}
.next-events .now {
  color:#E94D24;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.events-grid {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.grid-row {
  display: flex;
  justify-content: space-between;
}
</style> 
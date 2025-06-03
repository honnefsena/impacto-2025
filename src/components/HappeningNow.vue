<template>
  <div>
    <div class="happening-now">
      <h3>Acontecendo<br>no Impacto</h3>
      <div class="now">
        <span class="dot"></span>
        <div class="agora">AGORA</div>
      </div>
    </div>
    <div class="banner-happening-now">
      <img src="/guest-ze_bruno.png" alt="Banner Acontecendo no Impacto" />
    </div>
    <div class="happening-info">
      <Badge 
        content="CELEBRAÇÃO"
        bg-color="#E94D24"
        size="lg"
      />
      <div class="happening-info-content">
        <div class="happening-local">
          <img src="/icon-location.svg" alt="Local" />
          ESPAÇO
        </div>
        <div class="happening-time">
          <img src="/icon-clock.svg" alt="22h00" />
          22h00
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'

export default {
  name: 'HappeningNow',
  components: {
    Badge
  }
}
</script>

<style scoped>
.happening-now {
  display: flex;
  justify-content: space-between;  
  padding: 15px;  
}
.happening-now h3 {
  font-size: 25px;
  font-weight: 700;
}
.happening-now .now {
  color:#E94D24;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.happening-now .dot::after {
  content: '•';
  font-size: 2.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.happening-now .agora {
  padding-top: 8px;
}
.banner-happening-now {
  display: flex;
  justify-content: center;
  align-items: center;
}
.happening-info {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.happening-info-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  font-size: 0.9rem;
}
.happening-info-content img {
  width: 15px;
  height: 15px;
}
</style> 
<template>
  <div class="home">
    <div class="banner">
      <img src="/banner-home.png" alt="Conferência Impacto 2025" />
    </div>
    <div class="blocks">
      <div class="block">
        <div class="block-content">
          <img src="/home-block-weather.png" alt="Nuvens" />
          <h2>26º</h2>
          <p>Santa Rosa - RS</p>
        </div>
      </div>
      <div class="block">
        <div class="block-content">
          <img src="/home-block-counter.png" alt="Contagem regressiva" />
          <h2>{{ daysUntilEvent }}</h2>
          <p>dias para o Impacto</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      daysUntilEvent: 0
    }
  },
  created() {
    this.calculateDaysUntilEvent()
  },
  methods: {
    calculateDaysUntilEvent() {
      const eventDate = new Date('2025-06-19')
      const today = new Date()
      
      // Reset hours to avoid partial day calculations
      today.setHours(0, 0, 0, 0)
      eventDate.setHours(0, 0, 0, 0)
      
      const diffTime = eventDate - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      this.daysUntilEvent = diffDays
    }
  }
}
</script>

<style scoped>
.home {  
  
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blocks {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}
.block {
  width: 167px;
  height: 208px;
  background: url('./home-block-bkg.png') no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  text-align: center;
}
.block h2 {
  font-size: 40px;
  margin: 0;
}
.block p {
  font-size: 0.9rem;
  margin: 0;
}
</style> 
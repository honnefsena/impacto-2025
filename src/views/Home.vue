<template>
  <div class="home">
    <div class="banner">
      <img src="/banner-home.png" alt="Conferência Impacto 2025" />
    </div>
    <div class="blocks">
      <div class="block">
        <div class="block-content">
          <img src="/home-block-weather.png" alt="Nuvens" />
          <h2 v-if="!weather.loading">{{ weather.temperature }}º</h2>
          <div v-else class="loading">...</div>
          <p>{{ weather.city }}</p>
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
    <HappeningNow />
    <hr />
    <NextEvents />
    <p style="width: 100%; height: 100px;">
      
    </p>
  </div>
</template>

<script>
import Badge from '../components/Badge.vue'
import HappeningNow from '../components/HappeningNow.vue'
import NextEvents from '../components/NextEvents.vue'

export default {
  name: 'Home',
  components: {
    Badge,
    HappeningNow,
    NextEvents
  },
  data() {
    return {
      daysUntilEvent: 0,
      weather: {
        temperature: '--',
        city: 'Carregando...',
        loading: true,
        error: false
      },
      weatherUpdateInterval: null,
      userLocation: {
        lat: -27.8707,
        lon: -54.4806
      }
    }
  },
  created() {
    this.calculateDaysUntilEvent()
    this.fetchWeather()
    // Atualiza os dados do clima a cada 30 minutos
    this.weatherUpdateInterval = setInterval(this.fetchWeather, 30 * 60 * 1000)
  },
  beforeUnmount() {
    if (this.weatherUpdateInterval) {
      clearInterval(this.weatherUpdateInterval)
    }
  },
  methods: {
    calculateDaysUntilEvent() {
      const eventDate = new Date('2025-06-19')
      const today = new Date()
      
      today.setHours(0, 0, 0, 0)
      eventDate.setHours(0, 0, 0, 0)
      
      const diffTime = eventDate - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      this.daysUntilEvent = diffDays
    },
    async fetchWeather() {
      try {
        this.weather.loading = true
        this.weather.error = false
        
        const apiKey = '7d60d06ed8ebf9c077f97e09ead45e35'
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.userLocation.lat}&lon=${this.userLocation.lon}&units=metric&appid=${apiKey}`
        )
        
        if (!response.ok) {
          throw new Error('Falha ao buscar dados do clima')
        }
        
        const data = await response.json()
        
        this.weather = {
          temperature: Math.round(data.main.temp),
          city: data.name,
          loading: false,
          error: false
        }
      } catch (error) {
        console.error('Erro ao buscar dados do clima:', error)
        this.weather = {
          temperature: '--',
          city: 'Santa Rosa - RS',
          loading: false,
          error: true
        }
      }
    }
  }
}
</script>

<style scoped>
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
  background: url('/home-block-bkg.png') no-repeat center center;
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
  font-weight: 700;
  margin: 0;
}
.block p {
  font-size: 0.9rem;
  margin: 0;
}
.loading {
  font-size: 40px;
  font-weight: 700;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}
</style> 
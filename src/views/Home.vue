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
    <hr />
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
    <p style="width: 100%; height: 1000px;">
      
    </p>
  </div>
</template>

<script>
import Badge from '../components/Badge.vue'

export default {
  name: 'Home',
  components: {
    Badge
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
        lat: null,
        lon: null
      }
    }
  },
  created() {
    this.calculateDaysUntilEvent()
    this.getUserLocation()
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
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userLocation = {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            }
            this.fetchWeather()
            // Atualiza os dados do clima a cada 30 minutos
            this.weatherUpdateInterval = setInterval(this.fetchWeather, 30 * 60 * 1000)
          },
          (error) => {
            console.error('Erro ao obter localização:', error)
            // Se não conseguir a localização, usa Santa Rosa como padrão
            this.userLocation = {
              lat: -27.8707,
              lon: -54.4806
            }
            this.fetchWeather()
            this.weatherUpdateInterval = setInterval(this.fetchWeather, 30 * 60 * 1000)
          }
        )
      } else {
        // Se o navegador não suportar geolocalização, usa Santa Rosa como padrão
        this.userLocation = {
          lat: -27.8707,
          lon: -54.4806
        }
        this.fetchWeather()
        this.weatherUpdateInterval = setInterval(this.fetchWeather, 30 * 60 * 1000)
      }
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
.happening-now, .next-events {
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
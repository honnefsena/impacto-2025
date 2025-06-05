<template>
  <div class="details">
    <div class="details-header">
      <router-link to="/guests" class="back-arrow" title="Voltar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
      <h2>{{ detail.name }}</h2>
    </div>
    <img v-if="detail.image" :src="`/${detail.image}`" :alt="detail.name" class="detail-image" />
    <p class="detail-description">{{ detail.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      details: [
        // Guests
        { id: 'ze_bruno', name: 'Zé Bruno', image: 'guest-ze_bruno.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'diego_bittencourt', name: 'Diego Bittencourt', image: 'guest-diego_bittencourt.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'jacira_monteiro', name: 'Jacira Monteiro', image: 'guest-jacira_monteiro.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'lierte_soares', name: 'Lierte Soares', image: 'guest-lierte_soares.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'filipe_breder', name: 'Filipe Breder', image: 'guest-filipe_breder.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'raphael_abdalla', name: 'Raphael Abdalla', image: 'guest-raphael_abdalla.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'juliana_ferron', name: 'Juliana Ferron', image: 'guest-juliana_ferron.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'armando_bispo', name: 'Armando Bispo', image: 'guest-armando_bispo.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        // Bands
        { id: 'baruk', name: 'Baruk', image: 'band-baruk.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'alexandre_magnani', name: 'Alexandre Magnani', image: 'band-alexandre_magnani.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'nos_em_um', name: 'Nos em Um', image: 'band-nos_em_um.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'resgate', name: 'Resgate', image: 'band-resgate.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'israel_salazar', name: 'Israel Salazar', image: 'band-israel_salazar.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        // Artists
        { id: 'angela_buj', name: 'Angela Buj', image: 'artist-angela_buj.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
        { id: 'lucas_toledo', name: 'Lucas Toledo', image: 'artist-lucas_toledo.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' }
      ]
    }
  },
  computed: {
    detail() {
      return this.details.find(d => d.id === this.id) || { name: this.id, image: '', description: '' }
    }
  }
}
</script>

<style scoped>
.details {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}
.details-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.back-arrow {
  display: flex;
  align-items: center;
  margin-right: 4px;
  text-decoration: none;
  transition: opacity 0.2s;
}
.back-arrow:hover {
  opacity: 0.7;
}
.details-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}
.detail-image {
  display: block;
  margin: 24px auto 24px auto;
  max-width: 100%;
  border-radius: 12px;
}
.detail-description {
  font-size: 1rem;
  color: #222;
  margin-top: 16px;
  text-align: justify;
}
</style> 
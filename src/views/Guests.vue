<template>
  <div class="guests">
    <!-- TEOLOGIA Section -->
    <section class="section">
      <h3>TEOLOGIA</h3>
      <div class="image-grid">
        <router-link 
          v-for="guest in guests" 
          :key="guest"
          :to="{ name: 'Details', params: { id: guest.replace('guest-', '').replace('.png', '') }}"
          class="image-link"
        >
          <img :src="`/${guest}`" :alt="guest">
        </router-link>
      </div>
    </section>

    <!-- BANDAS Section -->
    <section class="section dark">
      <h3>BANDAS</h3>
      <div class="image-grid">
        <router-link 
          v-for="band in bands" 
          :key="band"
          :to="{ name: 'Details', params: { id: band.replace('band-', '').replace('.png', '') }}"
          class="image-link"
        >
          <img :src="`/${band}`" :alt="band">
        </router-link>
      </div>
    </section>

    <!-- ARTE Section -->
    <section class="section">
      <h3>ARTE</h3>
      <div class="image-grid">
        <router-link 
          v-for="artist in artists" 
          :key="artist"
          :to="{ name: 'Details', params: { id: artist.replace('artist-', '').replace('.png', '') }}"
          class="image-link"
        >
          <img :src="`/${artist}`" :alt="artist">
        </router-link>
      </div>
    </section>

    <!-- AGÊNCIAS Section -->
    <section class="section dark">
      <h3>AGÊNCIAS</h3>
      <div class="image-container">
        <img src="/agencies.png" alt="Agencies">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Guests',
  data() {
    return {
      guests: [
        'guest-ze_bruno.png',
        'guest-diego_bittencourt.png',
        'guest-jacira_monteiro.png',
        'guest-lierte_soares.png',
        'guest-filipe_breder.png',
        'guest-raphael_abdalla.png',
        'guest-juliana_ferron.png',
        'guest-armando_bispo.png'
      ],
      bands: [
        'band-baruk.png',
        'band-alexandre_magnani.png',
        'band-nos_em_um.png',
        'band-resgate.png',
        'band-israel_salazar.png'
      ],
      artists: [
        'artist-angela_buj.png',
        'artist-lucas_toledo.png'
      ]
    }
  }
}
</script>

<style scoped>
.guests {
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.section.dark {
  background-color: #0B0C0C;
  color: #FFF;
  padding: 20px;
  margin: 20px -20px;
}

h3 {
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.image-link {
  display: block;
  width: 100%;
}

.image-link img {
  width: 100%;
  height: auto;
  display: block;
}

.image-container {
  width: 100%;
  padding: 15px 0 60px 0;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}
</style> 
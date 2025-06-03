<template>
  <header class="header">
    <div class="logo-container">
      <img 
        v-show="shouldShowLogo" 
        src="/logo-impacto-2025-light.svg" 
        alt="Logo Impacto" 
        class="logo" 
      />
    </div>
    <div class="icons">
      <button class="icon-btn" @click="$emit('open-notifications')" aria-label="Notificações">
        <img src="/icon-notifications.svg" alt="Notificações" width="28" height="28" />
      </button>
      <button class="icon-btn" @click="$emit('open-profile')" aria-label="Perfil">
        <img src="/icon-profile.svg" alt="Perfil" width="28" height="28" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showLogo: this.$route.name !== 'Home'
    }
  },
  computed: {
    shouldShowLogo() {
      // Se não estiver na Home, sempre mostra a logo
      if (this.$route.name !== 'Home') {
        return true
      }
      // Se estiver na Home, usa a lógica de scroll
      return this.showLogo
    }
  },
  mounted() {
    // Só adiciona o listener de scroll se estiver na Home
    if (this.$route.name === 'Home') {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showLogo = window.scrollY > 170
    }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 26px;
  z-index: 100;
}
.logo {
  width: 180px;
  transition: opacity 0.2s ease-in-out;
}
.icons {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}
.icon-btn {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style> 
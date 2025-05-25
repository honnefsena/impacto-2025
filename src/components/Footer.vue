<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

const items = [
  { to: '/', label: 'Home', icon: '/icon-home.svg', match: /^\/$/ },
  { to: '/schedule', label: 'Programação', icon: '/icon-schedule.svg', match: /^\/schedule/ },
  { to: '/guests', label: 'Convidados', icon: '/icon-guests.svg', match: /^\/guests/ },
  { to: '/map', label: 'Mapa', icon: '/icon-map.svg', match: /^\/map/ },
  { to: '/interactions', label: 'Interações', icon: '/icon-interactions.svg', match: /^\/interactions/ },
]

function isActive(item) {
  return item.match.test(route.path)
}
</script>

<template>
  <footer class="footer">
    <nav class="footer-nav">
      <router-link
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="footer-item"
        :class="{ active: isActive(item) }"
      >
        <img :src="item.icon" :alt="item.label" class="icon" />
        <span>{{ item.label }}</span>
      </router-link>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  background: #F8F8F8;
  padding: 20px 20px;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  box-sizing: border-box;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: #757575;
  font-size: 0.65rem;
  font-weight: 500;
  cursor: pointer;
  gap: 6px;
  flex: 1;
}
.footer-item .icon {
  width: 25px;
  height: 25px;
  margin-bottom: 2px;
  display: block;
}
.footer-item.active,
.footer-item.active span {
  color: #E94F27;
}
.footer-item.active .icon {
  filter: invert(41%) sepia(89%) saturate(749%) hue-rotate(346deg) brightness(97%) contrast(92%);
}
</style> 
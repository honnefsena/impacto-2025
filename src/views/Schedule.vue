<template>
  <div class="schedule">
    <HappeningNow />
    <hr />
    <NextEvents />
  </div>
</template>

<script>
import HappeningNow from '../components/HappeningNow.vue'
import NextEvents from '../components/NextEvents.vue'

export default {
  name: 'Schedule',
  components: {
    HappeningNow,
    NextEvents
  }
}
</script>

<style scoped>
.schedule {
  padding: 20px 15px;  
}
</style> 
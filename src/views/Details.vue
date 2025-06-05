<template>
  <div class="details">
    <h2>{{ id }}</h2>
    <!-- We'll add more content here later -->
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
  }
}
</script>

<style scoped>
.details {
  padding: 20px;
}
</style> 
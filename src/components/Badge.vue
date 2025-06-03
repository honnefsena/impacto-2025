<template>
  <span
    class="badge"
    :class="[`badge-${size}`]"
    :style="{
      backgroundColor: bgColor,
      color: textColor
    }"
  >
    {{ content }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    content: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: '#000000'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  }
}
</script>

<style scoped>
.badge {
  height: 23px;
  display: inline-block;
  border-radius: 8px;
  padding: 4px 8px;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-sm {
  width: 50px;
}

.badge-md {
  width: 90px;
}

.badge-lg {
  width: 32%;
}
</style> 
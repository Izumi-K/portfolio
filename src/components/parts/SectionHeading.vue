<template>
  <h2 class="section-hdg">{{ heading }}</h2>
</template>

<script setup lang="ts">
defineProps<{
  heading: String
}>()
</script>

<style scoped>
h2.section-hdg {
  margin-bottom: 35px;
  padding-bottom: 15px;
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  position: relative;
}

h2.section-hdg::before {
  display: block;
  content: '';
  width: 80px;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #626262;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  h2.section-hdg {
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 2.2rem;
  }
}
</style>
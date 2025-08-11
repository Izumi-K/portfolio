<template>
  <h3 class="section-subhdg">{{ subheading }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  subheading: String
}>()
</script>

<style scoped>
h3.section-subhdg {
  padding-left: 12px;
  font-size: 1.8rem;
  text-align: left;
  font-weight: bold;
  position: relative;
}

h3.section-subhdg::before {
  display: block;
  content: '';
  width: 5px;
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #626262;
}

@media screen and (max-width: 768px) {
  h3.section-subhdg {
    font-size: 1.6rem;
  }
}
</style>
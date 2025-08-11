<template>
  <nav class="nav">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/skill" class="nav-link">Skill</RouterLink>
    <RouterLink to="/project" class="nav-link">Project</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-family: Verdana, Arial, sans-serif;
}

.nav-link {
  display: block;
  padding: 10px;
  min-width: 100px;
  text-align: center;
  border-radius: 15px;
  font-size: 1.5rem;
  color: #1f1f1f;
}

.nav-link:hover {
  background: rgb(82, 82, 82, 0.3);
}

.nav-link.router-link-active {
  background: #ff0044;
  color: #fff;
}

.main-home {
  margin-top: 140px;
}

@media screen and (max-width: 768px) {
  .nav {
    gap: 10px;
  }

  .nav-link {
    min-width: 70px;
  }
}
</style>
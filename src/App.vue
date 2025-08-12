<template>
  <div class="app" id="app">
    <header class="header" :class="'header-' + pageClass">
      <Navigation />
      <p class="bg-title">{{ pageTitle(pageClass) }}</p>
    </header>
    <main :class="'main-' + pageClass">
      <RouterView />
    </main>
    <footer class="footer" :class="'footer-' + pageClass"></footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import {computed } from 'vue'
import { useRouter } from "vue-router";
import Navigation from '@/components/modules/Navigation.vue';

const router = useRouter();

const pageClass = computed<string>(() => {
  const currentPath = router.currentRoute.value.path;
  const formatPath = currentPath.replace(/\//g, '');
  return formatPath === '' ? 'home' : formatPath;
});

function pageTitle(pageClass: string) {
  return pageClass.toUpperCase();
}
</script>

<style scoped>
#app:has(#app main.main-home) {
  overflow: hidden;
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
  background-color: rgb(82, 82, 82, 0.3);
}

.nav-link.router-link-active {
  background: #626262;
  color: #fff;
}

.bg-title {
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  margin: auto;
  text-align: center;
  font-size: 18rem;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  line-height: 1;
  color: #ececec;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  .nav {
    gap: 10px;
  }

  .nav-link {
    min-width: 70px;
  }

  .bg-title {
    font-size: 7rem;
    top: 6px;
  }
}
</style>

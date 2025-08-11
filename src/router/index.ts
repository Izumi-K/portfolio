import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillView from '../views/SkillView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
  ],
})

export default router

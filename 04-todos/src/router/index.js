import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodosView.vue')
    },
    {
      path: '/todo/:id(\\d+)',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/todo/:id(\\d+)/edit',
      name: 'todo-edit',
      component: () => import('../views/TodoEditView.vue')
    },
    {
      path: '/todo/create',
      name: 'todo-create',
      component: () => import('../views/TodoCreateView.vue')
    }
  ]
})

export default router

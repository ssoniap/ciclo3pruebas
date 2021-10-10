import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Actividades from '../views/Actividades.vue';
import Blog from '../views/Blog/Blog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actividades',
    name: 'Actividades',
    component: Actividades
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;

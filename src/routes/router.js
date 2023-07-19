import { createRouter, createWebHistory } from 'vue-router';
import Gallery from '../components/ImageGallery.vue';
import Category from '../components/CategoryGallery.vue';

const routes = [
  {
    path: '/', component: Gallery,
  },
  {  path: '/category', component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Gallery from '../components/ImageGallery.vue';
import Category from '../components/CategoryGallery.vue';
import Fast from '../components/FastApiCrud.vue'

const routes = [
  {
    path: '/', component: Gallery,
  },
  {  
    path: '/category', component: Category,
  },
  {
    path: '/fastApi', component: Fast,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

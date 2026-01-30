import { createRouter, createWebHistory } from '@ionic/vue-router';
import Booklist from '../views/Booklist.vue';
import bookdetail from '../views/bookdetail.vue';
import ProductCard from '../views/ProductCard.vue';
import ProductList from '../views/ProductList.vue';
import BookCard from '../views/BookCard.vue';
const routes = [
  {
    path: '/',
    component: Booklist,
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: Booklist,
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: bookDetail,
  },
  {
    path: '/productcard',
    component: ProductCard,
  },
  {
    path: '/Productlist',
    component: ProductList,
  },
  {
    path: '/bookcard',
    component: BookCard,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

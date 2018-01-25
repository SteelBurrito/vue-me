import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/me/Header';
import AboutMe from '@/components/me/MeDescription';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe,
    },
  ],
});

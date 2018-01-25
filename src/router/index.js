import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/me/HelloWorld';
import Header from '@/components/me/Header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});

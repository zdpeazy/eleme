// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router';
// import store from './store/';
import {routerMode} from './config/env';
import './config/rem';
import FastClick from 'fastclick';
// import App from './App';

// 项目设置fastclick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  model: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPostion = document.body.scrollTop;
      }
      return {x: 0, y: to.meta.savedPostion || 0};
    }
  }
});

/* eslint-disable no-new */
new Vue({
  router
//  store
}).$mount('#app');

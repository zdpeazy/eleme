import App from '../App';

const hello = r => require.ensure([], () => r(require('../components/Hello')), 'hello');

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页城市列表页
    {
      path: '/home',
      component: hello
    }
  ]
}];

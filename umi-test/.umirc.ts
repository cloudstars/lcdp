import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: 'form',
          component: '@/pages/index',
        },
      ],
    },
  ],
});

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
          component: '@/pages/form',
        },
        {
          path: 'workflow',
          component: '@/pages/workflow',
        },
      ],
    },
  ],
});

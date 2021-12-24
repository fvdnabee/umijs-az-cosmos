import { defineConfig } from 'umi';

import { WebpackConfigDumpPlugin } from 'webpack-config-dump-plugin';

export default defineConfig({
  chainWebpack: function (config, { webpack }) {
    // Dump webpack config:
    config
      .plugin('webpack-config-dump-plugin')
      .use(WebpackConfigDumpPlugin, [{ name: 'webpack-dump.txt', depth: 10 }]);
  },

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  webpack5: {},
  // mfsu: {},
});

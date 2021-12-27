import { defineConfig } from 'umi';

export default defineConfig({
  fastRefresh: {},
  mock: {},
  chainWebpack(memo) {
    memo.optimization.splitChunks({
      chunks: 'async',
      name: true
    })
  }
});

import { defineConfig } from '@umijs/max';
import routes from './routes';
import targets from './targets';

const { UMI_ENV } = process.env;

export const baseConfig: Parameters<typeof defineConfig>[0] = {
  styledComponents: {},
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  antd: {
    dark: false,
  },
  access: {},
  mock: false,
  model: {},
  initialState: {},
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx'],
  },
  ignoreMomentLocale: true,
  request: {
    dataField: 'data',
  },
  targets,
  layout: false,
  define: {
    'process.env.UMI_ENV': UMI_ENV,
    'process.env.NODE_ENV': process.env.NODE_ENV,
  },
  fastRefresh: true,
  hash: true,
  // proxy: proxy[UMI_ENV || 'sandbox'],
  reactQuery: {},
  routes,
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
    baseNavigator: false,
  },
  historyWithQuery: {},
  esbuildMinifyIIFE: true,
  npmClient: 'pnpm',
  outputPath: `dist/${UMI_ENV}`,
};

import { defineConfig } from '@umijs/max';
import { baseConfig } from './baseConfig';

const { UMI_ENV } = process.env;

export default defineConfig({
  ...baseConfig,
  define: {
    'UMI_ENV': UMI_ENV,
    'process.env.NODE_ENV': process.env.NODE_ENV,
  },
});

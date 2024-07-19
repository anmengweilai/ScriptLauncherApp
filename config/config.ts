import { defineConfig } from '@umijs/max';
import { baseConfig } from './baseConfig';

export default defineConfig({
  ...baseConfig,
  outputPath: 'dist/default',
});

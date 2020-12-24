import { terser } from 'rollup-plugin-terser'; // 代码压缩
import babel from 'rollup-plugin-babel';
import tslint from 'rollup-plugin-tslint';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'es',
  },
  plugins: [
    babel(),
    terser(),
    postcss({
      extract: true,
      sourceMap: true,
      extensions: ['.less', '.css'],
    }),
    commonjs(),
    typescript(),
    tslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['*.ts', '*.tsx'],
      exclude: ['node_modules/**', '*.js', '*.less', '*.css'],
    }),
    nodeResolve(),
  ],

  external: ['react', 'antd'],
};

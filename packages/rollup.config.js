import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';


export default {
    input: './src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
        babel(),
        postcss({extensions: ['.css', '.less']}),
        typescript()/*,
        tslint()会误解析less,报错，待解决*/
    ],
    external: [
      'react'
    ]
}
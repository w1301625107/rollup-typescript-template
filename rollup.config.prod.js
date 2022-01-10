import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip'
import pkg from './package.json'

const extensions = ['.ts', '.js']
export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'umd',
    name: 'protocol',
  },
  plugins: [
    // strip({ include: ['**/*.js', '**/*.ts'] }),
    replace({
      'process.env.VERSION': JSON.stringify(pkg.version),
    }),
    resolve({
      browser: true,
      extensions,
      // modulesOnly: true,
    }),
    typescript(),
    commonjs(),
    babel({ babelHelpers: 'bundled', extensions }),
    uglify(),
  ],
}

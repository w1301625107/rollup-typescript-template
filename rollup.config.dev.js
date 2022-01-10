import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import pkg  from './package.json'

import typescript from '@rollup/plugin-typescript'
const extensions = ['.ts', '.js']
export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format:'es',
    name:'protocol'
  },
  plugins: [
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
  ],
}

import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';

export default {
 entry: 'src/vendor.ts',
 dest: 'dist/js/vendor.es2015.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   typescript(),
   resolve({ jsnext: true, main: true, browser: true}),
   commonjs()
 ]
}

import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  dest: 'dist/js/main.es2015.js',
  format: 'iife',
  moduleName: 'main',
  sourceMap: false,
  treeshake: true,
  plugins: [
    angular(),
    typescript(),
    // alias({ rxjs: __dirname + '/node_modules/rxjs' }),
    // resolve({ jsnext: true,
    //           main: true,
    //           browser: true })
    // replace({ 'ENVIRONMENT': JSON.stringify( 'production' ) }),
    resolve({ jsnext: true, main: true, module: true }),
    commonjs({
    //  include: 'node_modules/rxjs/**'
    }),
    // cleanup()
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms',
    '@angular/material',
    'angular-in-memory-web-api',
    'rxjs',
    'ng2-ui'
  ],
  globals: {
    '@angular/core' : 'vendor._angular_core',
    '@angular/common' : 'vendor._angular_common',
    '@angular/compiler' : 'vendor._angular_compiler',
    '@angular/http' : 'vendor._angular_http',
    '@angular/platform-browser' : 'vendor._angular_platformBrowser',
    '@angular/platform-browser-dynamic' : 'vendor._angular_platformBrowserDynamic',
    '@angular/router' : 'vendor._angular_router',
    '@angular/forms' : 'vendor._angular_forms',
    '@angular/material' : 'vendor._angular_material',
    'angular-in-memory-web-api' : 'vendor._angular_in_memory_web_api',
    'rxjs' : 'vendor._rxjs',
    'ng2-ui' : 'vendor._ng2_ui'
  },
  onwarn: function ( message ) {
    if ( /at the top level of an ES module, and has been rewritten/.test( message ) ) {
      return;
    }
    console.error( message );
  }
}

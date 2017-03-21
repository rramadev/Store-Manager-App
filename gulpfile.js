var gulp = require('gulp'),
    tsc = require("gulp-typescript"),
    tslint = require('gulp-tslint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatjs = require("gulp-concat-js"),
    sourcemaps = require('gulp-sourcemaps'),
    sysBuilder = require('systemjs-builder'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    runSequence = require('run-sequence'),
    colors  = require('colors'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    cleanCSS = require('gulp-clean-css'),
    tsconfig = require('tsconfig-glob'),
    clean = require('gulp-clean'),
    rollup = require('rollup').rollup,
    rollupTypescript = require('rollup-plugin-typescript'),
    nodeResolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs');

var tscConfig = require('./src/tsconfig.json');

// Clean the app directory
gulp.task('clean:ts', function () {
  return del(['src/**/*.js', 'src/**/*.js.map', '!src/systemjs.config.js']);
});

// Clean the js distribution directory
gulp.task('clean:dist', function () {
  return del('dist/js/**/*');
});

// Clean library directory
// gulp.task('clean:lib', function () {
//   return del('public/lib/**/*');
// });

// Clean test build directory
// gulp.task('clean:tests', function () {
//   return del('tests/js/**/*');
// });

// Lint Typescript
// gulp.task('lint:ts', function() {
//   return gulp.src('src/**/*.ts')
//     .pipe(tslint())
//     .pipe(tslint.report('verbose', { emitError: false }));
// });

// gulp.task('clean:dist', function () {
//   return gulp.src(['./dist/js'], {read: false})
//     .pipe(clean());
// });
//
// gulp.task('clean:ts', function () {
//   return gulp.src(['./src/**/*.js', './src/**/*.js.map'], {read: false})
//     .pipe(clean());
// });

// Compile TypeScript to JS
gulp.task('compile:ts', ['clean:ts'], function () {
  // return gulp
  //   .src(tscConfig.filesGlob)
  //   .pipe(plumber({
  //     errorHandler: function (err) {
  //       console.error('>>> [tsc] Typescript compilation failed'.bold.green);
  //       this.emit('end');
  //     }}))
  //   .pipe(sourcemaps.init())
  //   .pipe(tsc(tscConfig.compilerOptions))
  //   .pipe(sourcemaps.write('.'))
  return gulp
    .src([
        "src/**/*.ts"
    ])
    .pipe(sourcemaps.init())
    .pipe(tsc(tscConfig.compilerOptions))
    // .pipe(tsc({
    //   "target": "es5",
    //   "module": "system",
    //   "moduleResolution": "node",
    //   "sourceMap": true,
    //   "emitDecoratorMetadata": true,
    //   "experimentalDecorators": true,
    //   "removeComments": false,
    //   "noImplicitAny": true,
    //   "suppressImplicitAnyIndexErrors": true,
    //   "skipLibCheck": true,
    //   "types": [ "node", "core-js", "hammerjs", "google-maps" ],
    //   "outFile": "dist/js/main.min.js"
    // }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src'));
});

// Generate systemjs-based builds
gulp.task('bundle:app', ['clean:dist'], function() {
  var builder = new sysBuilder('./', 'src/systemjs.config.js');
  return builder.buildStatic('src/main.js', 'dist/js/main.min.js', { minify: false, sourceMaps: false })
    // .then(function () {
    //   return del(['dist/js/**/*', '!dist/js/app.min.js']);
    // })
    .catch(function(err) {
      console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
    });

  // return gulp.src(["src/**/*.js", "node_modules/systemjs/dist/system.src.js"])
  //   .pipe(sourcemaps.init())
  //     .pipe(concatjs({
  //         "target": "main.min.js",
  //         "entry": "./src/main.js"
  //     }))
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest("./dist/js"));
});

gulp.task('bundle:vendor', function () {
  var builder = new sysBuilder('./', 'src/systemjs.config.js');
  return builder
      .buildStatic('./src/vendor.js', './dist/js/vendor.min.js')
      .catch(function (err) {
          console.log('Vendor bundle error');
          console.log(err);
      });
});

gulp.task('build:rollup', function () {
  return rollup.rollup({
    entry: "./src/main.ts",
    plugins: [
      // nodeResolve({
      //   jsnext: true,
      //   module: true
      // }),
      // commonjs({
      //   include: 'node_modules/rxjs/**',
      // }),
      rollupTypescript()
    ],
  })
    .then(function (bundle) {
      bundle.write({
        format: "iife",
        moduleName: "main",
        dest: "./dist/js/main.bundle.js",
        sourceMap: true
      });
    })
});

gulp.task('build:rollup2', function () {
  return rollup({
    entry: 'src/main.js',
    plugins: [
      nodeResolve({ jsnext: true, main: true, module: true }),
      commonjs()
    ]
  }).then(function (bundle) {
    return bundle.write({
      format: 'iife',
      moduleName: 'main',
      dest: 'dist/js/main.es2015.js'
    });
  });
});

// Minify App bundle
gulp.task('minify:app', function() {
  return gulp
    .src('./dist/js/main.bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/main.bundle.min.js'));
});

// Lint Sass
gulp.task('lint:sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [sass-lint] Sass linting failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

// Compile SCSS to CSS, concatenate, and minify
gulp.task('compile:sass', function () {
  // concat and minify global scss files
  gulp
    .src('app/**/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [sass] Sass global style compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/dist/css'));

  // minify component specific scss files
  // gulp
  //   .src('src/css/component/*.scss')
  //   .pipe(plumber({
  //     errorHandler: function (err) {
  //       console.error('>>> [sass] Sass component style compilation failed'.bold.green);
  //       this.emit('end');
  //     }}))
  //   .pipe(sourcemaps.init())
  //   .pipe(sass({ errLogToConsole: true }))
  //   .pipe(cleanCSS())
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest('public/dist/css/component'));
});

// Concat and minify CSS
gulp.task('minify:css', function() {
  // concat and minify global css files
  gulp
    .src('app/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/dist/css'));

  // minify component css files
  // gulp
  //   .src('src/css/component/*.css')
  //   .pipe(cleanCSS())
  //   .pipe(gulp.dest('public/dist/css/component'));
});

// Copy dependencies
gulp.task('copy:libs', function() {
  gulp.src(['node_modules/rxjs/**/*'])
    .pipe(gulp.dest('public/lib/js/rxjs'));

  // concatenate non-angular2 libs, shims & systemjs-config
  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    // 'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'system.config.js',
  ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/lib/js'));

  // copy source maps
  gulp.src([
    'node_modules/reflect-metadata/Reflect.js.map',
    'node_modules/systemjs/dist/system-polyfills.js.map'
  ]).pipe(gulp.dest('public/lib/js'));

  gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.*'
  ]).pipe(gulp.dest('public/lib/css'));

  return gulp.src(['node_modules/@angular/**/*'])
    .pipe(gulp.dest('public/lib/js/@angular'));
});

// UNUSED
// Copy static assets
gulp.task('copy:assets', function() {
  // return gulp.src(
  //   [
  //     '*.json',
  //     '*.html',
  //     '*.css',
  //     '!*.ts',
  //     '!*.scss'
  //   ],
  //   { base : 'src/**' })
  //   .pipe(gulp.dest('public/dist'))
});

// Update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
  return tsconfig({
    configPath: '.',
    indent: 2
  });
});

// Watch src files for changes, then trigger recompilation
gulp.task('watch:src', function() {
  gulp.watch('src/**/*.ts', ['scripts']);
  gulp.watch('src/**/*.scss', ['styles']);
});

// Run Express, auto rebuild and restart on src changes
gulp.task('serve', ['watch:src'], function () {
  var server = liveServer.new('server.js');
  server.start();

  gulp.watch('server.js', server.start.bind(server));
});

// Compile .ts files unbundled for tests
gulp.task('compile:specs', function() {
  return gulp
    .src([
      "src/**/*.ts",
      "typings/*.d.ts"
    ])
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [tsc] Typescript tests compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(tsc(testTscConfig.compilerOptions))
    .pipe(gulp.dest('tests'));
});

gulp.task('test', ['compile:specs'], function() {
  gulp.watch('src/**/*.ts', ['compile:specs']);
});

// gulp.task('lint', ['lint:ts', 'lint:sass']);

// gulp.task('clean', ['clean:dist:js', 'clean:dist:css', 'clean:lib', 'clean:tests']);

gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('copy', function(callback) {
  runSequence(['clean:lib'], 'copy:libs', callback);
});
gulp.task('scripts', function(callback) {
  runSequence(['clean:dist:js'], 'compile:ts', 'bundle:app', 'minify:js', callback);
});
gulp.task('styles', function(callback) {
  runSequence(['lint:sass', 'clean:dist:css'], ['compile:sass', 'minify:css'], callback);
});
gulp.task('build', function(callback) {
  runSequence('copy', 'scripts', 'styles', callback);
});

gulp.task('default', function(callback) {
  runSequence('build', 'serve', callback);
});

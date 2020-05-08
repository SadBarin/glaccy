
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const filesize = require('gulp-filesize');
const imagemin = require('gulp-imagemin');

//Оптимизация html
function index() {
   return gulp.src('./src/index.html')
      //Размер до оптимизации
      .pipe(filesize())
      //Минификация html
      .pipe(htmlmin({ collapseWhitespace: true }))
      //Выходная папка для html
      .pipe(gulp.dest('./build'))
      //Размер после оптимизации
      .pipe(filesize());
}

//Оптимизация css
function styles() {
   return gulp.src('./src/css/style.css')
      //Размер до оптимизации
      .pipe(filesize())
      //Оптимизация css
      .pipe(cleanCSS({level: 2}))
      //Выходная папка для стилей
      .pipe(gulp.dest('./build/css'))
      //Размер после оптимизации
      .pipe(filesize())
}

//Оптимизация изображений
function img() {
   return gulp.src('src/img/*')
      //Размер до оптимизации
      .pipe(filesize())
      //Оптимизация изображений
      .pipe(imagemin())
      //Выходная папка для изображений
      .pipe(gulp.dest('build/img'))
      //Размер после оптимизации
      .pipe(filesize())
}

//Оптимизация svg
function svg() {
   return gulp.src('src/svg/*')
      //Размер до оптимизации
      .pipe(filesize())
      //Оптимизация изображений
      .pipe(imagemin())
      //Выходная папка для изображений
      .pipe(gulp.dest('build/svg'))
      //Размер после оптимизации
      .pipe(filesize())
}

//Таск вызывающий оптимизацию html
gulp.task('index', index);

//Таск вызывающий оптимизацию styles
gulp.task('styles', styles);

//Таск вызывающий оптимизацию изображений
gulp.task('img', img);

//Таск вызывающий оптимизацию svg
gulp.task('svg', svg);

//Запуск всех тасков сразу
gulp.task('overtask', gulp.parallel('index', 'styles', 'img', 'svg'));
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';

const sassCompiler = gulpSass(sass);

gulp.task('sass', () => {
  return gulp.src('scss/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('minify-js', () => {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-html', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', () => {
  return gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});
gulp.task('default', gulp.parallel('sass', 'minify-css', 'minify-js', 'minify-html', 'imagemin'));
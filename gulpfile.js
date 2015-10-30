const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const mocha = require('gulp-mocha');
const espower = require('gulp-espower');
const electron = require('electron-connect').server.create({port: 30082});

const srcHTML = 'src/**/*.html';
const srcJS = 'src/**/*.{js,jsx}';
const srcTEST = 'test/**/*.js';
const DIST = 'dist';

gulp.task('default', ['build']);

gulp.task('build', ['html', 'js']);

gulp.task('dev', ['build', 'watch'], (done) => {
    electron.start();
    gulp.watch('dist/main/**/*', electron.restart);
    gulp.watch('dist/renderer/**/*', electron.reload);
    done();
});

gulp.task('watch', (done) => {
    gulp.watch(srcHTML, ['html']);
    gulp.watch(srcJS, ['js']);
    done();
});

gulp.task('html', () => {
    return gulp.src(srcHTML)
        .pipe(changed(DIST))
        .pipe(gulp.dest(DIST))
});

gulp.task('js', () => {
    return gulp.src(srcJS)
        .pipe(changed(DIST))
        .pipe(babel())
        .pipe(gulp.dest(DIST))
});

gulp.task('test', ['power-assert', 'build'], () => {
    gulp.src('powered-test/**/*.js')
        .pipe(mocha());
});

gulp.task('power-assert', () => {
    return gulp.src(srcTEST)
        .pipe(babel())
        .pipe(espower())
        .pipe(gulp.dest('powered-test'))
});

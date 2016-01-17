var gulp = require('gulp'),
    shell = require('gulp-shell'),
    browserSync = require('browser-sync').create()

gulp.task('build-tests', shell.task([
  'elm-make test/TestRunner.elm --output dist/test/index.html --warn'
]))

gulp.task('run-tests', ['build-tests'], function () {
  browserSync.reload()
})

gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: "./dist/test"
    }
  });
  gulp.run('run-tests');

  gulp.watch(['src/**/*.elm', 'test/**/*.elm'], ['run-tests'])
});

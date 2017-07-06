// gulp
var gulp = require('gulp');

// plugins
var sass=require('gulp-sass'),
    connect = require('gulp-connect'),
	bourbon = require('node-bourbon'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence');

bourbon.with('sass');

gulp.task("compileSass", function(){
	gulp.src("app/assets/sass/style.scss")
	.pipe(sass({ includePaths: bourbon.includePaths}))
	.pipe(gulp.dest("app/assets/css"))
	.pipe(connect.reload());
});

gulp.task("watch", ["connect"], function(){	            
    gulp.watch(["app/assets/sass/*.*css","app/assets/sass/modules/*.*css"], ["compileSass"]);
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    livereload: true,
    port: 8888
  });
});

gulp.task("default", ["watch"], function(){});


// tasks
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['compileSass','minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
  );
});


// gulp
var gulp = require('gulp');

// plugins
var sass=require('gulp-sass'),
    connect = require('gulp-connect'),
	bourbon = require('node-bourbon');

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

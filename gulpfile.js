// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// const browserSync = require('browser-sync');
// const reload = browserSync.reload;
// const webpack = require("webpack");
// var exec = require('child_process').exec;


// gulp.task(
// 	'styles',
// 	gulp.series((done)  => {
// 		return gulp
// 			.src('./client/src/sass/**/*.scss')
// 			.pipe(
// 				sass({
// 					outputStyle: 'compressed'
// 				}).on('error', sass.logError)
// 			)
// 			.pipe(
// 				autoprefixer({
// 					browsers: ['last 2 versions']
// 				})
// 			)
// 			.pipe(gulp.dest('./client/public/css'))
// 			.pipe(browserSync.stream());
// 	})
// );

// gulp.task(
// 	'webpack:dev',
// 	gulp.series(() => {
// 		return exec('npm run dev:webpack', function(err, stdout, stderr) {
// 			console.log(stdout);
// 			console.log(stderr);
// 			cb(err);
// 		});
// 	})
// );

// gulp.task(
// 	'browser-sync',
// 	gulp.series( async function() {
// 		browserSync.init({
// 			server: './server',
// 			notify: false,
// 			open: false, //change this to true if you want the broser to open automatically
// 			injectChanges: false
// 		});
// 	})
// );

// gulp.task(
// 	'default',
// 	gulp.parallel([
// 		gulp.series([
// 			'webpack:dev',
// 			'styles',
// 			    async function runningWatch() {
// 				gulp.watch('./client/src/sass/**/*', gulp.parallel('styles'));
// 				gulp.watch('./client/public/js/**/*', gulp.parallel('webpack:dev'));
// 				gulp.watch(['./public/**/*', './public/*']).on('change', reload);
// 			}
// 		]),
// 		gulp.series(['browser-sync'])
// 	])
// );

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')

//compile scss into css

function style() {
    //1. where is my scss file
    return gulp.src('./client/src/sass/**/*.scss')
    //2. pass that file through sass compiler
    .pipe(sass(
        {
            outputStyle: 'compressed'
        }
    ))
    //3. where do I save the compiled CSS?
    .pipe(gulp.dest('./client/public/css'))
    //4. Stream changes to all browser
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        proxy: {
            target: 'http://localhost:3000'
        }
    })
    gulp.watch('./client/src/sass/**/*.scss', style)
    // gulp.watch('./*.html').on('change', browserSync.reload)
    // gulp.watch('./client/public/js/**/*.js').on('change', browserSync.reload)

}

exports.style = style;
exports.watch = watch;
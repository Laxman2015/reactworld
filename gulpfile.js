"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect'); //run a local dev server
var open=require('gulp-open'); //open a url in web browser
var browserify=require('browserify'); //bundle js
var reactify=require('reactify'); //transform jsx to js
var source=require('vinyl-source-stream'); // use conventional text stream with gulp
var concat=require('gulp-concat'); //concat files
var lint=require('gulp-eslint'); //Lint js and jsx files

//configuration object
var config={
	port:9005,
	devBaseUrl:'http://localhost',
	paths:{
		html:'./src/*.html',
		js:'./src/**/*.js',
		css: [
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
                "node_modules/bootstrap/dist/css/bootstrap-theme.min.css"
            ],
		dist:'./dist',
		mainJs:'./src/main.js'
	}
}

// start a local development serevr
gulp.task('connect', function(){
	connect.server({
		root:['dist'],
		port: config.port,
		base:config.devBaseUrl,
		livereload:true
	});
});

// open web url
gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html')
		.pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html',function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});
 
gulp.task('js',function(){
	browserify(config.paths.mainJs)
	.transform('reactify',{ presets: ['es2015', 'react'] })	
	.bundle()
	.on('error',console.error.bind(console))
	.pipe(source("bundle.js"))
	.pipe(gulp.dest(config.paths.dist + '/script'))
	.pipe(connect.reload());
});
gulp.task('css',function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist+'/css'));
});

/*gulp.task('lint',function(){
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});*/

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html'])
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default',['html','js','open','css','watch']);
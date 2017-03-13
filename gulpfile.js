var gulp = require("gulp");
//var uglify = require("gulp-uglify");
//var concat = require("gulp-concat");
var sass = require("gulp-sass");
//var minify = require("gulp-minify");
var webserver = require("gulp-webserver");
//var autoprefixer = require('gulp-autoprefixer');
/*gulp.task("compress", function () {
    gulp.src("./index.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist"))
})*/
/*gulp.task("combine", function () {
    gulp.src(["index.js", "index1.js"])
        .pipe(concat("combine.js"))
        .pipe(gulp.dest("combines"))
})*/
gulp.task("scss", function () {
    gulp.src("./scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
})
/*gulp.task("css1", function () {
    gulp.src("./css/style.css")
        .pipe(minify())
        .pipe(gulp.dest("css2"))
})*/
gulp.task('webserver',["start"], function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            port:9090
        }))
})
gulp.task("start",function(){
    gulp.watch("./css/*.scss",["scss"]);
    //gulp.watch("./index.js",["compress"]);
    gulp.watch("./index.html");
})

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            // baseDir: "test",
            index: "/index.html"
            // index: "/resources/views/index.html"
            // index: "/resources/views/index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// gulp.task("js", function() {
//     gulp.src(["js/**/*.js","!js/min/**/*.js"])
//         .pipe(uglify())
//         .pipe(gulp.dest("./js/min"))
//         .pipe(browserSync.reload({stream:true}))
// });

// gulp.task("sass", function() {
//     gulp.watch("_scss/style.scss", function(){
//         gulp.src("_scss/style.scss")
//             .pipe(sass())
//             .pipe(gulp.dest("css"));
//     })
// });


gulp.task("sass", function() {
    gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.reload({stream:true}))
});

// gulp.task("css", function() {
//   gulp.src("./css")
//     .pipe(browserSync.reload({stream:true}))
// });

gulp.task("js", function() {
  gulp.src("public/js/*.js")
      .pipe(browserSync.reload({stream:true}))
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task("default",['browser-sync'],function() {
    gulp.watch("**/*.html", ['bs-reload']);
    gulp.watch("**/*.scss",["sass"]);
    gulp.watch("**/*.js", ["js"]);
    // gulp.watch("**/*.css",["css"]);
    // gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
});

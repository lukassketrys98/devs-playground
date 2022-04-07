const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

gulp.task("sass", () => {
    return gulp.src("styles/*.scss")
        .pipe(sass())
        .pipe(autoprefixer("last 4 version"))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("assets"))
});

gulp.task("watch", () => {
    gulp.watch("styles/**/*.scss", gulp.series("sass"))
});
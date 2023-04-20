import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src("./src/js/main.js", {
            sourcemaps: app.isDev
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Ошибка: <%= error.message %>"
            })))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'main.min.js' //имя выходного файла JS в dest
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js, {
            sourcemaps: app.isDev
        }))
        .pipe(app.plugins.browsersync.stream());
};
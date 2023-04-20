// Отвечаетза норм отображение собранного HTML файла в dist
import fileinclude from "gulp-file-include";
import versionNumber from "gulp-version-number"; // следит за кэшированием в браузере
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // оборачивает картинки (кроме svg) в webpformat с тегом picture
// Копирование html файлов из src в dist
export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Ошибка: <%= error.message %>"
            })))
        .pipe(fileinclude())
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
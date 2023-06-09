import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Ошибка: <%= error.message %>"
            })))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`, //готовый спрайт создаться в папке img/icons/icons.svg
                    // Создавать страницу с перечнем иконок html
                    example: app.isDev
                }
            },
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
};
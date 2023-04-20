/* Плагины */
import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения об ошибках в панель уведомлений
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; // Проверка обновления картинки
import ifPlugin from "gulp-if"; // Условное ветвление

// Экспорт объекта с общими плагинами

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
};
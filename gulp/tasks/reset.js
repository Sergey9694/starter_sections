// Удаление папки с результатом (dist) способ для версии del 7.0.0
// import {
//     deleteAsync
// } from 'del';
// export const reset = () => {
//     return deleteAsync(app.path.clean);
// };

import del from "del";
export const reset = () => {
    return del(app.path.clean);
};
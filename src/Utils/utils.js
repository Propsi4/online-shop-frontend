/* Опис та функції utils.js
Файл utils.js містить функції, які можуть використовуватися в інших компонентах.
Функція get_image(path, dir) приймає два параметри: path - шлях до зображення, dir - папка, в якій знаходиться зображення, за замовчуванням - goods.
Функція get_image(path, dir) повертає зображення, якщо воно існує, або зображення за замовчуванням, якщо зображення не існує.
*/

export const get_image = (path, dir="goods") => {
    try {
        return require(`Images/${dir}/${path}`)
    } catch (error) {
        return require(`Images/default.png`)
    }
}
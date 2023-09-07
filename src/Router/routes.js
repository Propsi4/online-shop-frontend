import Cart from "Pages/Cart";
import App from "../App";
import ViewCategory from "../Pages/ViewCategory";
import store from "../Store/store";
import Server from "Pages/Server";

/* Опис та функції routes.js:
Файл routes.js містить опис маршрутів додатка.
Маршрути використовуються в компоненті router.js.
goods.map - це функція, яка приймає один параметр: category - категорія товарів.
Масив publicRoutes містить об'єкти, які містять два поля: path - шлях до сторінки, element - компонент, який відображається на сторінці.
Функція goods.map створює масив маршрутів, які відповідають категоріям товарів з файлу goods.json.
*/
export const publicRoutes = [
    {path: '/cart', element: <Cart/>},
    ...store.getState().goods.map(category => {
        return {
            path: `/${category.category}`,
            element: <ViewCategory/>
        }
    }),
    {path: '/server', element: <Server/>},
    {path: '/', element: <App/>},
]


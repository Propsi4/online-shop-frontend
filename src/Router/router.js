import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { publicRoutes } from "./routes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

/* Опис та функції компоненту router.js
Компонент router.js - це компонент, який відповідає за маршрутизацію додатка.
Він використовується в компоненті index.js.
Компонент router.js містить два поля: router, export default router.
Поле router містить функцію createBrowserRouter.
Функція createBrowserRouter приймає один параметр: масив маршрутів.
Функція createBrowserRouter повертає компонент Router.
Поле export default router експортує компонент Router.
*/
const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            ...publicRoutes
        ]
    }]
)

export default router
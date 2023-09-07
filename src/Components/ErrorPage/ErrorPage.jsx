import React from 'react'
import { useRouteError } from 'react-router-dom'
import './ErrorPage.css'

/* Опис та функції ErrorPage.jsx:
    Компонент ErrorPage.jsx - це компонент, який відображає сторінку помилки, у випадку її виникнення.
    Функція useRouteError - це функція, яка дозволяє отримати дані про помилку.
*/
const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='error'>
        <h1>Oops!</h1>
        <p>Sorry, something went wrong</p>
        <p>{error.statusText ?? error.message}</p>
    </div>
  )
}

export default ErrorPage
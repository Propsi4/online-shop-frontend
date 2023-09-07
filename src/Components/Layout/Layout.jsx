import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

/* Опис та функції Layout.jsx:
    Компонент Layout.jsx - це компонент, який відображає шапку сайту та відображає дочірні компоненти.
    Містить компонент <Header>, який відображає шапку сайту.
    Містить компонент <Outlet>, який відображає дочірні компоненти.
*/
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout
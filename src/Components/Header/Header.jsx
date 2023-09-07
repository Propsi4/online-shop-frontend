import React from 'react'
import './Header.css'
import logo from '../../logo.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/* Опис та функції Header.jsx:
    Компонент Header.jsx - це компонент, який відображає шапку сайту.
    Функція useSelector - це функція, яка дозволяє отримати дані зі сховища store.
    Функція useNavigate - це функція, яка дозволяє переходити на інші сторінки.
    Містить посилання на головну сторінку, сторінку з усіма товарами, сторінку з корзиною та сторінку з сервером.
*/
const Header = () => {
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const cart_count = cart.length
  return (
    <div className='header'>
        <ul>
            <li onClick={() => {navigate("/")}}><img alt="Logo" className='header__logo' src={logo}></img></li>
            <li onClick={() => {navigate("/")}}>Товари</li>
            <li onClick={() => {navigate("/cart")}}>Корзина - {cart_count}</li>
            <li onClick={() => {navigate("/server")}}>Сервер</li>
        </ul>
    </div>
  )
}

export default Header
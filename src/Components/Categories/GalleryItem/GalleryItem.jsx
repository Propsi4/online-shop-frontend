import React from 'react'
import { get_image } from 'Utils/utils'
import './GalleryItem.css'
import { useDispatch, useSelector } from 'react-redux'

/* Опис та функції GalleryItem.jsx:
    Компонент GalleryItem.jsx - це компонент, який відображає товари в категоріях.
    Функція get_image - це функція, яка дозволяє отримати шлях до зображення товару.
    Функція useSelector - це функція, яка дозволяє отримати дані зі сховища store.
    Функція useDispatch - це функція, яка дозволяє відправити дані в сховище store.
    Функція GalleryItem - це функція, яка приймає параметри show_price, item, show_cart.
    show_price - це параметр, який відображає ціну товару.
    item - це параметр, який містить дані про товар.
    show_cart - це параметр, який відображає кнопку "В корзину".
*/
const GalleryItem = ({show_price, item, show_cart}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const is_in_cart = cart.find(cart_item => cart_item === item)
  return (
    <div className='gallery__item__container'>
    <div className='gallery__item__image'>
        <img alt={item.name} src={get_image(item.image)}/>
    </div>
    <div className='gallery__item__info'>{item.name}</div>
    {show_price ? <div className='gallery__item__desc'>{item.price} грн</div> : null}
    {show_cart && !is_in_cart ? <div className='cart_action' onClick={() => {dispatch({type:"ADD_TO_CART", payload:item})}}>В корзину</div> : null}
    {is_in_cart ? <div className='cart_action' onClick={() => {dispatch({type:"REMOVE_FROM_CART", payload:item})}}>Вилучити з корзини</div> : null}
    </div>
  )
}

export default GalleryItem
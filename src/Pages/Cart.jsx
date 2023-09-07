import GoodsGallery from 'Components/GoodsGallery/GoodsGallery'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'

/* Опис та функції Cart.jsx:
    Компонент Cart.jsx - це сторінка корзини, в якій відображаються всі товари, які були додані в корзину.
    Також тут є форма для оформлення замовлення, яка відправляє дані на сервер.
    Функція useState - це функція, яка дозволяє створити змінну, яка буде зберігати своє значення після перезавантаження сторінки.
    Функція useSelector - це функція, яка дозволяє отримати дані зі сховища store.
    Функція useDispatch - це функція, яка дозволяє відправити дані в сховище store.
    Функція make_order - це функція, яка перевіряє чи всі поля заповнені, якщо так, то відправляє дані на сервер, після отриання відповіді від сервера, виводить повідомлення про успішне оформлення замовлення.
*/
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const total = cart.reduce((acc, item) => {
        return acc + item.price
    }, 0)
    const make_order = async(e) => {
      e.preventDefault()
      if(!name || !phone || !address) {
        alert('Заповніть всі поля')
        return
      }
      if(!cart.length) {
        alert('Ваша корзина порожня')
        return
      }
        const order = {
            name: name,
            phone: phone,
            address: address,
            products: cart
        }
        const response = await fetch('http://localhost:5000/api/add_order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order),
        }).then(res => res.json())
        if(response) {
            alert('Замовлення успішно оформлено')
            dispatch({type: "CLEAR_CART"})
        }
        console.log(response)
    }
  return (
    <div>
        <h1>Корзина</h1>
        <GoodsGallery data={cart} show_cart={false}/>
        <div className='finish_order'>
            <h2>До оплати: {total} грн</h2>
        <input onChange={(e) => {setName(e.target.value)}} value={name} placeholder='Ім`я'/>
        <input onChange={(e) => {setPhone(e.target.value)}} value={phone} placeholder='Телефон'/>
        <input onChange={(e) => {setAddress(e.target.value)}} value={address} placeholder='Адреса'/>
        <button onClick={(e) => {make_order(e)}}>Оплатити</button>
        </div>
    </div>
  )
}

export default Cart
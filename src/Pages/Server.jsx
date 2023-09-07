import React, { useEffect, useState } from 'react'
import './Server.css'

/* Опис та функції Server.jsx:
    Компонент Server.jsx - це компонент, який відображає всі замовлення з бази даних сервера.
    orders - це параметр, який містить дані про всі замовлення.
    Функція fetchData - це функція, яка отримує дані з сервера.
    Функція useEffect - це функція, яка виконується при завантаженні сторінки.
    Функція setInterval - це функція, яка виконується кожні 5 секунд.
    Функція clearInterval - це функція, яка зупиняє виконання функції setInterval.
    Функція fetchData викликається при завантаженні сторінки та кожні 5 секунд для оновлення даних з серверу.
*/
const Server = () => {
    const [orders, setOrders] = useState([])
    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/get_orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    return response
}
    useEffect(() =>{
        fetchData().then((response) => {setOrders(response);})
    const interval = setInterval(() => {
        fetchData().then((response) => {setOrders(response);})
    }, 5000)
        return () => clearInterval(interval)
    },[])
  return (
    <div className='server'>
        {orders.length ? orders.map((order) => {
            return (
                <div className='server__order'>
                    <h2>Замовлення №{order.id}</h2>
                    <h3>Ім`я: {order.name}</h3>
                    <h3>Телефон: {order.phone}</h3>
                    <h3>Адреса: {order.address}</h3>
                    <h3>Товари:</h3>
                    <ul className='products'>
                        {order.products.map((product) => {
                            return (
                                <li>{product.name} - {product.price} грн</li>
                            )
                        })}
                    </ul>
                    <button onClick={() => {fetch(`http://localhost:5000/api/delete_order/${order.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(() => fetchData().then((response) => {setOrders(response);}))}}>Видалити</button>
                </div>
            )
        })
        : <h1>Немає замовлень</h1>
        }
    </div>
  )
}

export default Server
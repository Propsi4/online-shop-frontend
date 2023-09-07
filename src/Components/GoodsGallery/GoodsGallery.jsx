import React from 'react'
import './GoodsGallery.css'
import GalleryItem from 'Components/Categories/GalleryItem/GalleryItem'

/* Опис та функції GoodsGallery.jsx:
    Компонент GoodsGallery.jsx - це компонент, який відображає всі товари в категорії.
    Функція GoodsGallery - це функція, яка приймає параметри data, show_price, show_cart.
    data - це параметр, який містить дані про всі товари в категорії.
    show_price - це параметр, який відображає ціну товару.
    show_cart - це параметр, який відображає кнопку "В корзину".
*/
const GoodsGallery = ({data, show_price = true, show_cart = true}) => {
// Отримуємо абсолютний шлях до папки Images від кореневої директорії

  return (
    <div className='goods-gallery'>
        {data.map((item, index) => {
            return(
                  <GalleryItem key={index} item={item} show_price={show_price} show_cart={show_cart}/>

            )
        })}
    </div>
  )
}

export default GoodsGallery
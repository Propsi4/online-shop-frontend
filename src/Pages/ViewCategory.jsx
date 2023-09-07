import React from 'react'
import GoodsGallery from '../Components/GoodsGallery/GoodsGallery'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

/* Опис та функції ViewCategory.jsx:
    Компонент ViewCategory.jsx - це сторінка категорії, в якій відображаються всі товари, які були додані в цю категорію.
    Функція useSelector - це функція, яка дозволяє отримати дані зі сховища store.
    Функція useLocation - це функція, яка дозволяє отримати дані про поточний шлях.
    Вона містить компонент <GoodsGallery>, який відображає всі товари, які були додані в цю категорію.
*/

const ViewCategory = () => {
    const location = useLocation().pathname.split("/")[1]
    const category = useSelector(state => state.goods).find(item => item.category === location)
    
  return (
    <div>
      {category ? <div><h1>{category.name}</h1>
        <GoodsGallery data={category.articles}/></div> : null}
    </div>
  )
}

export default ViewCategory
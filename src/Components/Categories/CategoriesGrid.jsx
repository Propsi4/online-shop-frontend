import React from 'react'
import './CategoriesGrid.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

/* Опис та функції CategoriesGrid.jsx:
    Компонент CategoriesGrid.jsx - це компонент, який відображає всі категорії товарів, відображається в компоненті App.js.
    Функція useNavigate - це функція, яка дозволяє переходити на інші сторінки.
    Функція useSelector - це функція, яка дозволяє отримати дані зі сховища store.
    categories_list - це масив, який містить всі категорії товарів.
*/
const CategoriesGrid = () => {
  const navigate = useNavigate()
  const goods = useSelector(state => state.goods)
  const categories_list = goods.map(category => {
    return {
      name: category.name,
      link: category.category
    }
  })
  return (
    <div className='categories'>
        {categories_list.map((category, index) => {
          return(
            <div key={index} onClick={(e) => {navigate(category.link)}} className={`category ${(categories_list.length - 1) === index && categories_list.length % 2 === 1 ? "wide" : ""}`}>
                <h3>{category.name}</h3>
            </div>
        )})}
    </div>
  )
}

export default CategoriesGrid
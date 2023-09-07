/* Опис та функції store.js:
Файл store.js містить опис сховища даних, який використовується в Redux.
Redux - це бібліотека для керування станом додатка.
Сховище даних містить два поля: goods - список товарів, cart - список товарів, які додані до кошика.
Сховище даних містить чотири функції: reducer, initialState, store, export default store.
Функція reducer приймає два параметри: state - стан додатка, action - дія, яка виконується над даними.
Функція reducer повертає новий стан додатка.
Функція initialState повертає початкові дані.
Функція store створює сховище даних за допомогою функції createStore.
Функція export default store експортує сховище даних.
SET_GOODS - дія, яка встановлює список товарів.
ADD_TO_CART - дія, яка додає товар до кошика.
REMOVE_FROM_CART - дія, яка видаляє товар з кошика.
CLEAR_CART - дія, яка очищує кошик.
*/
import { createStore } from 'redux';
import data from '../Images/goods.json';
const initialState = {
    goods : JSON.parse(JSON.stringify(data)),
    cart : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item !== action.payload)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}
const store = createStore(reducer)
export default store


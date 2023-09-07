import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import router from './Router/router';
import { Provider } from 'react-redux';
import store from './Store/store';

/*Опис та функції компоненту:
  index.js - це головний файл, який відповідає за рендеринг всього додатку.
  Він викликає функцію ReactDOM.createRoot, яка відповідає за рендеринг всього додатку.
  ReactDOM.createRoot - це функція, яка приймає в якості параметра елемент, в який буде відбуватися рендеринг.
  Блок <Provider> - це компонент, який приймає в якості параметра store, який містить в собі всі дані, які будуть використовуватися в додатку.
  Блок <RouterProvider> - це компонент, який приймає в якості параметра router, який містить в собі всі шляхи, які будуть використовуватися в додатку.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

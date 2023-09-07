import './App.css';
import CategoriesGrid from './Components/Categories/CategoriesGrid';

/* Опис та функції компоненту App.js
Компонент App.js - це головний компонент, який відповідає за відображення інтернет-магазину.
Він відображає заголовок і викликає компонент Categories.js
Блок <Categories> відповідає за відображення категорій товарів, який міститься в компоненті Categories.js
Тег <h1> відповідає за відображення заголовку
*/

function App() {
  return (
    <div className="App">
      <h1>Інтернет-магазин</h1>
      <CategoriesGrid/>
    </div>
  );
}

export default App;

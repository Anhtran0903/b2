
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/cart/Cart';
import Products from './component/cart/Products';
import Exam1 from './component/Exam1';
import Exam2 from './component/Exam2';
import Header from './component/Header';
import CatList from './component/list/CatList';

import Students from './component/Students';
import Home from './page/Home';

import CartHome from './page/CartHome';
import ListHome from './page/ListHome';

function App() {
  return (
  <>
    <HashRouter>



<Routes>
<Route   index element={<Home/>}/>
<Route   path='/cart' element={<CartHome/>}/>
<Route   path='/list' element={<ListHome/>}/>

</Routes>
    </HashRouter>
  </>
  );
}

export default App;

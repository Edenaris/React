
import { createContext, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage'; 
import FirstPage from './components/FirstPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PricePage from './components/PricePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export const isShopingCart = createContext();
export const ShopingObjContext = createContext();


function App() {
  const [isShopingCartOpen, setIsShopingCartOpen] = useState(false);
  const [ShopingObj, setShopingObj] = useState([
    {name:'Big Shot', price:'911', descriptionM:'have a UNLIMITED memory'}
  ]);
  
 

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <isShopingCart.Provider value={{ isShopingCartOpen, setIsShopingCartOpen }}>
        <ShopingObjContext.Provider value={{ ShopingObj, setShopingObj }}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/FirstPage' element={<FirstPage />}></Route>
                <Route path='/PricePage' element={<PricePage/>}></Route>
                <Route path='/AboutPage' element={<AboutPage />}></Route>
                <Route path='/ContactPage' element={<ContactPage />}></Route>
            </Routes>
          </BrowserRouter> 
              
        </ShopingObjContext.Provider>
      </isShopingCart.Provider>
    </div>
  );
}

export default App;
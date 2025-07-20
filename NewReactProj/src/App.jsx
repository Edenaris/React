import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
          <Header />
          <Main />
          <Footer />
        </ShopingObjContext.Provider>
      </isShopingCart.Provider>
    </div>
  );
}

export default App;
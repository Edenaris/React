import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage'; // импортируем твою страницу

export const isShopingCart = createContext();
export const ShopingObjContext = createContext();
export const PageContext = createContext(); // новый контекст для страниц

function App() {
  const [isShopingCartOpen, setIsShopingCartOpen] = useState(false);
  const [ShopingObj, setShopingObj] = useState([
    {name:'Big Shot', price:'911', descriptionM:'have a UNLIMITED memory'}
  ]);
  

  const [currentPage, setCurrentPage] = useState('main'); 

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <isShopingCart.Provider value={{ isShopingCartOpen, setIsShopingCartOpen }}>
        <ShopingObjContext.Provider value={{ ShopingObj, setShopingObj }}>
          <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            
           
            {currentPage === 'first' ? (
              <FirstPage />
            ) : (
              <>
                <Header />
                <Main />
                <Footer />
              </>
            )}
            
          </PageContext.Provider>
        </ShopingObjContext.Provider>
      </isShopingCart.Provider>
    </div>
  );
}

export default App;
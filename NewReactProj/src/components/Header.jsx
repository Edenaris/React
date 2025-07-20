import { useContext } from 'react';
import React from 'react';
import { isShopingCart, ShopingObjContext } from '../App';

const Header = () => {
    const { isShopingCartOpen, setIsShopingCartOpen } = useContext(isShopingCart);
    const { ShopingObj } = useContext(ShopingObjContext);
    
    return (
        <div id='header-container' className='flex justify-center'>
           <header className='w-300 flex justify-between h-12.5 items-center border-b-2 border-slate-200'>
                <div className='flex gap-1 font-dots text-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                    Pricing example
                </div>
                <div className='flex gap-2.5'>
                    <div className='flex gap-2.5'>
                        <button className='relative' onClick={() => setIsShopingCartOpen(!isShopingCartOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                                {ShopingObj.length}
                            </span>
                        </button>
                    </div>
                    <a href="">Features</a>
                    <a href="">Enterprise</a>
                    <a href="">Support</a>
                    <a href="">Pricing</a>
                </div>
           </header>
        </div>  
    );
};

export default Header;
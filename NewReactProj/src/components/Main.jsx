import React, { useEffect, useRef, useState, useContext } from 'react';
import ShopingCart from './ShopingCart';
import { ShopingObjContext } from '../App';

const Main = () => {
    const [cards, setCards] = useState([
        {name:'Free',price:'$0/mo',descriptionU:'10 users included',descriptionM:'2 GB of storage',emailSup:'Email support',button:'Sign up for free'}
    ]);
    
    const { ShopingObj, setShopingObj } = useContext(ShopingObjContext);
    
    const [newCard, setNewCard] = useState({
        name:'',
        price:'',
        descriptionU:'',
        descriptionM:'',
        emailSup:'',
        button:''
    });
    
    const curentTarrif = useRef({
        name:'',
        price:''
    });
    
    const prevTarrif = useRef({
        name:'',
        price:''
    });
    
    function loadCard(newCard){
        setCards([...cards, newCard]);
       
        setNewCard({
            name:'',
            price:'',
            descriptionU:'',
            descriptionM:'',
            emailSup:'',
            button:''
        });
    }
    
    function addToShoppingCart(item) {
        setShopingObj([...ShopingObj, item]);
    }
    
    const [, forceUpdate] = useState({});
    
    function handleChangeTarrif(name, price) {
        prevTarrif.current.name = curentTarrif.current.name;
        prevTarrif.current.price = curentTarrif.current.price;
        curentTarrif.current.name = name;
        curentTarrif.current.price = price;
        forceUpdate({});
    }

    return (
        <>
            <div className='fixed left-2.5 top-2.5 p-2.5 border-1 rounded-md'>
                <h2>Previous tarrif:</h2>
                <span>{prevTarrif.current.name} </span>
                <span>{prevTarrif.current.price}</span>
                <h2>Current tarrif:</h2>
                <span>{curentTarrif.current.name} </span>
                <span>{curentTarrif.current.price}</span>
            </div>
            
            <ShopingCart />
                
            <div className='flex-grow py-5'>
                <main className='w-300 flex flex-col items-center'>
                    <div className='flex flex-col gap-2 w-[350px] pt-3 items-center'>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>Name:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded' 
                                value={newCard.name}
                                onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                                placeholder='Card name'
                            />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>Price:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded' 
                                value={newCard.price}
                                onChange={(e) => setNewCard({...newCard, price: e.target.value})}
                                placeholder='Card price'
                            />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>description Users:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded'
                                value={newCard.descriptionU}
                                onChange={(e) => setNewCard({...newCard, descriptionU: e.target.value})}
                                placeholder='description'
                             />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>description Memory:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded'
                                value={newCard.descriptionM}
                                onChange={(e) => setNewCard({...newCard, descriptionM: e.target.value})}
                                placeholder='description'
                             />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>email Suport:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded'
                                value={newCard.emailSup}
                                onChange={(e) => setNewCard({...newCard, emailSup: e.target.value})}
                                placeholder='email'
                             />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='w-36 text-right'>Button Text:</p>
                            <input 
                                className='border-1 flex-1 px-2 py-1 rounded'
                                value={newCard.button}
                                onChange={(e) => setNewCard({...newCard, button: e.target.value})}
                                placeholder='Button'
                             />
                        </div>
                        <button 
                            onClick={() => loadCard(newCard)} 
                            className='w-2/10 py-2 shadow-md rounded-md border-1 border-slate-200/80 bg-blue-400 flex items-center justify-center'
                        >
                            Add
                        </button>
                    </div>
                    
                    <h1 className='font-dots text-5xl'>Pricing</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, incidunt. Quo ducimus itaque nulla impedit, temporibus dicta nihil non porro.</p>
                    
                    <div id='cards-container' className='grid grid-cols-3 w-300 grid-rows-[320px] gap-y-5 gap-x-2.5 pt-5'>
                        {cards.map((card, idx) => (
                            <div key={idx} className="bg-white shadow-md rounded-lg flex flex-col items-center w-[390px] h-[320px]">
                                <h2 className="text-2xl font-bold p-1 w-full bg-slate-200 flex justify-center">{card.name}</h2>
                                <div className='flex flex-col items-center gap-3.5 py-8'>
                                    <p className="text-xl text-blue-600">{card.price}</p>
                                    <ul className="flex flex-col items-center gap-1 text-gray-700">
                                        <li>{card.descriptionU}</li>
                                        <li>{card.descriptionM}</li>
                                        <li>{card.emailSup}</li>
                                    </ul>
                                </div>  
                                <button 
                                    onClick={() => {
                                        handleChangeTarrif(card.name, card.price);
                                        const newItem = {
                                            name: card.name, 
                                            price: card.price,
                                            descriptionM: card.descriptionM
                                        };
                                        addToShoppingCart(newItem);
                                    }} 
                                    className={`w-9/10 py-2 shadow-md rounded-md border-1 border-slate-200/80 ${card.button === 'Sign up for free' ? 'bg-transparent' : "bg-blue-100"}`}
                                >
                                    {card.button}
                                </button>     
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Main;
import React, {useState, useContext, useRef, useEffect} from 'react';
import { isShopingCart, ShopingObjContext } from '../App';

function ShopingCart() {
    const { isShopingCartOpen, setIsShopingCartOpen } = useContext(isShopingCart);
    const { ShopingObj, setShopingObj } = useContext(ShopingObjContext);
    
    if (!isShopingCartOpen) {
        return null;
    }
    
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });

    const pointRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        const rotateCard = (event) => {
            if (parentRef.current && parentRef.current.contains(event.target)) {
                const cords = pointRef.current?.getBoundingClientRect();
                const cordsPARENT = parentRef.current.getBoundingClientRect();
                
                if (cords) {
                    const differentX = event.clientX - cords.x;
                    const differentY = event.clientY - cords.y;
                    setCoords({x: differentX / 8, y: (differentY / 1.5) * -1});
                }
            } else {
                setCoords({x: 0, y: 0});
            }
        };
        
        document.addEventListener("mousemove", rotateCard);

        return () => {
            document.removeEventListener("mousemove", rotateCard);
        };
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = ShopingObj.filter((_, idx) => idx !== index);
        setShopingObj(updatedCart);
    };
    let sum = 0;
    if (!!ShopingObj.length) {
        const TotalChekc = ShopingObj.map((card) => parseInt(card.price));
        sum = TotalChekc.reduce((El,currentEl)=>(El+currentEl));
    }

    return (
        <div 
            className={`
                fixed top-0 bottom-0 right-0 w-85 bg-gray-200 text-white py-10 overflow-y-auto
                transition-transform duration-300 ease-in-out flex flex-col gap-2.5 items-center
                ${isShopingCartOpen ? 'animation-slide-in' : 'animation-slide-out'}      
            `}
        >
            <button className='text-black absolute right-1 top-1' onClick={() => setIsShopingCartOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button> 
            
            {ShopingObj.map((obj, idx) => (
                <div key={idx} className='w-full flex flex-col h-25 text-black items-center text-center p-2 relative'>
                    <div ref={idx === 0 ? parentRef : null} className='w-full p-5'>
                        <div
                            style={{
                                backgroundColor: 'white',
                                transition: 'linear',
                                transform: `rotateX(${coords.y}deg) rotateY(${coords.x}deg)`
                            }}
                            className={`w-full flex py-3.5 px-1 rounded-tr-md rounded-b-md shadow-sm relative transition-transform duration-100 ease-linear`}
                        >
                            <div className='w-fit px-2 self-start text-left bg-amber-300 rounded-t-sm absolute top-[-25px]'>
                                <div>
                                    <h2 style={{fontFamily: "Chakra Petch, sans-serif"}}>{obj.name}</h2>
                                </div>
                            </div>
                            
                            <div className='w-3/4 flex items-center'>
                                <p className='rainbow-text'>{obj.descriptionM}</p>
                            </div>

                            <div className='w-1/4 flex flex-col gap-2.5 items-center'>
                                <p className='text-xs'>{`$${obj.price}/mo`}</p>
                                <button onClick={() => removeFromCart(idx)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                            
                            {idx === 0 && (
                                <div ref={pointRef} className='rounded-sm absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-between w-[284px] h-[78px] mt-auto'>
                <div className='text-white rounded-xl p-4 shadow-md rainbow-background w-30 h-15 flex items-center text-center'>Total: ${sum}\mo</div>
                <button className="shine-button bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors w-30 h-15">
                    Buy
                </button>
            </div>

        </div>
    );
}

export default ShopingCart;
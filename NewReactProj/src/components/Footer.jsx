import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center'>
            <footer className='flex w-300 gap-70 border-t-2 border-slate-200 h-75 items-center py-10'>
                <div className='flex flex-col text-gray-500 gap-1'>
                    <h5 className='font-bold text-2xl text-black' >Features</h5>
                    <a href="">Features</a>
                    <a href="">Enterprise</a>
                    <a href="">Support</a>
                    <a href="">Pricing</a>
                </div>
                <div className='flex flex-col text-gray-500 gap-1'>
                    <h5 className='font-bold text-2xl text-black'>Resources</h5>
                    <a href="" className=''>Features</a>
                    <a href="">Enterprise</a>
                    <a href="">Support</a>
                    <a href="">Pricing</a>
                </div>
                <div className='flex flex-col text-gray-500 gap-1'>
                    <h5 className='font-bold text-black text-2xl'>About</h5>
                    <a href="">Features</a>
                    <a href="">Enterprise</a>
                    <a href="">Support</a>
                    <a href="">Pricing</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
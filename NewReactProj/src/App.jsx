import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {

  return (
    <div className='min-h-screen flex flex-col items-center'>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App

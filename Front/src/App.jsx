import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

import About from '../pages/About'
import Contact from '../pages/Contact'
import SignatureDishes from '../pages/SignatureDishes'
import Menu from '../pages/Menu'
import { useState } from 'react'



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <Navbar toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Menu Overlay */}
      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}
      <Home/>
      <SignatureDishes/>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default App

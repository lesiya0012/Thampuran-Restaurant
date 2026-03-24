import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SignatureDishes from '../pages/SignatureDishes'
import Menu from '../pages/Menu'
import AssistantButton from '../components/AssistantButton'
import Preloader from '../components/Preloader'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      {/* Loader overlay */}
      {loading && <Preloader />}

     
      {/* ✅ Navbar ONLY after loading */}
      {!loading && (
        <Navbar toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      )}

      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}

      <Home loading={loading} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <AssistantButton/>
      <SignatureDishes/>
      <About/>
      <Contact/>

    </div>
  )
}

export default App
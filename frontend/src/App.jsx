import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Navbar from './components/BottomNavbar'
import Footer from './components/Footer'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Contacts from './components/Contacts'
const App = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-700 to-violet-800 overflow-hidden'>
      <Header></Header>
      <div className="mt-10">
      <Banner></Banner>
      <Navbar></Navbar>
      <About></About>
      <Education></Education>
      <TechStack></TechStack>
      <Contacts></Contacts>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default App

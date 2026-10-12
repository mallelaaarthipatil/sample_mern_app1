import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    <Footer />
    </div>
  )
}
export default App
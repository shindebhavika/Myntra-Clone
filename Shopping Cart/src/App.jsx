import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/shop'

function App() {
  return (
    
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
      </Router>

  )
}

export default App
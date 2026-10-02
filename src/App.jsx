import './App.css'
import Header from './components/Header'
import HomePage from './pages/Home/HomePage'
import OrdersPage from './pages/Order/OrdersPage'
import CartPage from './pages/Cart/CartPage'
import { Routes, Route } from "react-router"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/orders' element={<OrdersPage/>} />
      </Routes>
    </>
  )
}

export default App

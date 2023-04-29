import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import Errorr from './pages/Errorr'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import Success from './pages/Success'


const App = () => {


	return (
		<div className=' font-roboto bg-white-90'>
			<Navbar />
			<Routes>
				<Route path='/' element={<ProductPage />}></Route>
				<Route path='/pdDetail/:id' element={<ProductDetail />}></Route>
				<Route path='/carts' element={<CartPage />}></Route>
				<Route path='/success' element={<Success />}></Route>
				<Route path='*' element={<Errorr />}></Route>
			</Routes>
		</div>
	)
}

export default App
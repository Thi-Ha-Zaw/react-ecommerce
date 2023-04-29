import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import Errorr from './pages/Errorr'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import Success from './pages/Success'


const App = () => {


	const [theme, setTheme] = useState(null);

	useEffect(() => { 
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}else {
			setTheme('light')
		}
	},[])
	
	useEffect(() => { 
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	},[theme])

	return (
		<div className=' font-roboto bg-white-90 dark:bg-dark-bg-body'>
			<Navbar theme={theme} setTheme={setTheme} />
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
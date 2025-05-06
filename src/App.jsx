import React from 'react'
import './App.css'
import ProductListScreen from './Screens/ProductListScreen/ProductListScreen'
import Formulario from './Screens/FormScreen/Formulario'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import DetalleProductoScreen from './Screens/DetalleProductoScreen/DetalleProductoScreen'
import DetalleProductoVacio from './Components/DetalleProductoVacio/DetalleProductoVacio'
import Login from './Screens/LoginScreen/Login'

const App = () => {

	return (
		<div className='main-content'>
			<Navbar></Navbar>
			
			<Routes>
				<Route path='/' element={<Login></Login>}/>	
				<Route path='/registro' element={<Formulario></Formulario>}/>
				<Route path='/Login' element={<Login></Login>}/>
				<Route path='/Home' element={<ProductListScreen></ProductListScreen>}/>
				<Route path="/detalle" element={<DetalleProductoVacio />} />
				<Route path='/detalle/:id' element={<DetalleProductoScreen></DetalleProductoScreen>}/>

			</Routes>
		</div>
	)
}

export default App

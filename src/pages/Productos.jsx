//import React from 'react'
import { Link,Outlet} from 'react-router-dom'
import './Productos.css'
const Productos = () => {
  return (
    <div className='productos'>
        <h2>ESTE ES EL COMPONENTE DE PRODUCTOS</h2>

        <nav>
            <Link to='/male'>Male</Link>
            <Link to='/female'>Female</Link>
        </nav>

        <Outlet/>
      
    </div>
  )
}

export default Productos

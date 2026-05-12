//import React from 'react'
import { Link,Outlet} from 'react-router-dom'
const Productos = () => {
  return (
    <div>
        <h2>este es el componente productos</h2>

        <nav>
            <Link to='/male'>Male</Link>
            <Link to='/female'>Female</Link>
        </nav>

        <Outlet/>
      
    </div>
  )
}

export default Productos

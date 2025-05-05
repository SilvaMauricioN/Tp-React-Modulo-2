import { Link } from 'react-router-dom'
import './DetalleProductoVacio.css'

const DetalleProductoVacio = () => {
  return (
    <div className="detalle-vacio">
      <h2>Seleccione un producto para ver el detalle</h2>
      <Link to="/home" className="detalle-vacio-link">
        Ir a la lista de productos
      </Link>
    </div>
  )
}

export default DetalleProductoVacio
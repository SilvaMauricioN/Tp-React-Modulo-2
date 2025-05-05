import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCart.css';

function ProductCart({ id,nombre, img, precioOriginal, precioFinal, descuento, cantidad }) {
  const [comprado, setEsComprado] = useState(false);

  const handleClickComprar = () => {
    setEsComprado(true);
  };

  return (
    <div className="producto-container">
      <img src={img} className="imagen" />

      <h2 className="titulo">{nombre}</h2>

      <div className="precio-container">
        <span className="precio-original">${precioOriginal}</span>
        <span className="descuento">{descuento}% OFF</span>
      </div>
      <p className="precio-final">${precioFinal}</p>

      <p className="cantidad">Cantidad disponible: {cantidad}</p>

      <Link to={`/detalle/${id}`} className="view-details-button">Ver Detalles</Link>

      <button onClick={handleClickComprar} className="comprar">
        Comprar
      </button>

      {comprado && <p className="mensaje-comprado">Gracias por su compra</p>}
    </div>
  );
}

export default ProductCart
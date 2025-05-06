import React from 'react'
import ProductCart from '../../Components/ProductCart/ProductCart'
import { getProductById } from '../../services/productService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductoCardDetalle from '../../Components/ProductoCardDetalle/ProductoCardDetalle'
import './DetalleProductoScreen.css'

const DetalleProductoScreen = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const res = await getProductById(id)
            if (res) {
                setProduct(res)
            } else {
                setError('Producto no encontrado')
            }
        } catch (err) {
            setError('Error al cargar el producto')
        } finally {
            setLoading(false)
        }
    }

    fetchProduct()
  }, [id])


  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>
  if (!product) return null

  return (
    <div className='Contenedor-detalle'>
        <h1 className='Titulo-detalle'>Detalle de producto </h1>
        <div>
            <ProductoCardDetalle {...product}></ProductoCardDetalle>
        </div>     
    </div>
  )
}
export default DetalleProductoScreen
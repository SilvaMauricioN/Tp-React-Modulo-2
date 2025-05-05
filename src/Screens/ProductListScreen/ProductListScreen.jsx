import React, { useEffect, useState } from 'react'
import ProductCart from '../../Components/ProductCart/ProductCart'
import { getProducts } from '../../services/productService'
import "./ProductListScreen.css"

const ProductListScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getProductList = async () => {
        setLoading(true)

        setTimeout(
            async () => {
                const product_list_response = await getProducts()
                if (product_list_response) {
                    setProducts(product_list_response)
                } else {
                    setError('Error al obtener producto')
                }
                setLoading(false)
            },
            1000
        )
    }

    useEffect(
        () => {
            getProductList()
        },
        []
    )

    let isAdmin = true
    const div_props = {
        className: isAdmin ? 'caja-administrador' : 'caja',
        id: 'caja-especial'
    }

    const componentes = products.map(
        (product) => {
            return <ProductCart
                {...product}
                key={product.id}
                title={''}
                is_admin={isAdmin}
            >
            </ProductCart>
        }
    )

    let content
    if (loading) {
        content = <h2>Cargando...</h2>
    }
    else {
        if (error) {
            content = <h2>{error}</h2>
        }
        else {
            content = componentes
        }
    }

    return (
        <div {...div_props} >
            <h1 className='Titulo_lista'>Lista de Productos</h1>
            <div className='Contenedor_productos'>
                {content}
            </div>
        </div>
    )
}

export default ProductListScreen
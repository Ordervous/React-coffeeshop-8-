import React from 'react'
import { ProductContext } from './ProductContext'
// import ProductDetail from './ProductDetail'
import Card from "react-bootstrap/Card"
import { Link, NavLink } from 'react-router-dom'
import './ProductList.css'
// import { Outlet } from 'react-router-dom'
// import Product from './Product'

function ProductList(props) {

    function productList(products) {
        if (products === null) return
        return products.map((product) =>

            <Card className='cards' key={product.id}>
                <NavLink to={`/view/${product.id}`} key={product.id} >
                    <Card.Img variant="top" src={product.imgurl} />
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {product.artistname} ${product.price}
                        </Card.Text>
                    </Card.Body>
                </NavLink>
            </Card>

        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Artworks</h1>
            <div className='card-container'>
                <ProductContext.Consumer>
                    {({ products }) => (
                        productList(products)
                    )}
                </ProductContext.Consumer>
            </div>
        </>
    )

}

export default ProductList
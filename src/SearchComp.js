import React, { useContext, useState, useEffect } from 'react'
import { ProductContext } from './ProductContext'
// import ProductDetail from './ProductDetail'
import Card from "react-bootstrap/Card"
import { Link, NavLink, useParams } from 'react-router-dom'
import './ProductList.css'
// import { Outlet } from 'react-router-dom'
// import Product from './Product'

function SearchComp(props) {

    let { filterProducts } = useContext(ProductContext)
    const [products, setProducts] = useState([]);


    let params = useParams();

    useEffect(() => {



        async function fetch() {
            await filterProducts(params.filter).then(response => {
                console.log(response)
                setProducts(response)
            })
        }

        fetch();

    }, [params])



    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Artworks</h1>
            <div className='card-container'>
                {
                    products.map((product) =>

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
            </div>
        </>
    )

}

export default SearchComp
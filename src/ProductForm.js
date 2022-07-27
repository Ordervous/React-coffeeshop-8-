import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext'

function ProductForm() {
    let params = useParams()  
    let [product, setProduct] = useState({
        id: params.productId,
        artistname: "",
        born: "",
        piecename: "",
        painted: "",
        imgurl: "",
        price: ""
    })

    let { getProduct, addProduct, updateProduct } = useContext(ProductContext) 
    let navigate = useNavigate()  
    let { id, artistname, born, piecename, painted, imgurl, price } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProduct(id)
                .then((product) => setProduct(product))
        }  
        fetch()
    }, [id])

    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function addOrUpdate() {
        if (id === undefined) {
            return addProduct(product)
        } else {
            return updateProduct(product)
        }
    }  

    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate() 
            .then((product) => 
                navigate(`/products/${product.id}`)
            ) 
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Image src={imgurl} className="img-thumbnail"/>
            <Form.Group className="mb-3" >
                <Form.Label>Artist Name</Form.Label>
                <Form.Control type="text" name="artistname" value={artistname} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Year Born</Form.Label>
                <Form.Control type="text" name="born" value={born} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Name of Piece</Form.Label>
                <Form.Control type="text" name="piecename" value={piecename} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Year Painted</Form.Label>
                <Form.Control type="text" name="painted" value={painted} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" name="imgurl" value={imgurl} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Save</Button>
        </Form>
    )
}

export default ProductForm
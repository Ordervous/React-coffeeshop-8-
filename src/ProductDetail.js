import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'
import { Alert } from "react-bootstrap";
// import axios from "axios";

function ProductDetail(props) {

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()

    useEffect(() => {
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId]);

    let [error, setError] = useState()

    useEffect(() => {
        setError(null)
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((message) => setError(message))
        }
        fetch()
    }, [params.productId, getProduct])

    function errorMessage() {
        return <Alert variant="danger">Stockroom is empty: {error}</Alert>
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }

    function productCard() {
        let { id, artistname, born, piecename, painted, imgurl, price } = product
        return (
            <div>
                <Button className="btn-dark mx-3" onClick={() => navigate(-1)}>Back</Button>
                <Card className="viewcard" key={product.id}>

                    <Card.Img variant="top" src={imgurl} />
                    <Card.Body>
                        <Card.Title>{artistname} {born}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{piecename}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{painted}</Card.Subtitle>
                        <Card.Text>
                            <strong>Price:</strong> <span>${price}</span>
                        </Card.Text>
                        <Link to={`/contactus`} className="btn btn-success mx-3">Buy</Link>
                        <Link to={`/view/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                        <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )

    }


    if (error) return errorMessage()
    if (product === undefined) return loading()
    return product.id !== parseInt(params.productId) ? loading() : productCard()

}

export default ProductDetail

  // const hasFetchedData = useRef(false)

   // useEffect(() => {
    //     if (!hasFetchedData.current) {
    //         const res = axios.get("http://localhost:3002/products");
    //         setProduct(res);
    //         hasFetchedData.current = true;
    //     }
    // }, [])
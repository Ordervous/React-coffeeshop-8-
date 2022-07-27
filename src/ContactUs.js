import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Form, InputGroup } from "react-bootstrap";
import { ProductContext } from './ProductContext'


function ContactUs(props) {
  let [artistname, setName] = useState("unknown")


  useEffect(() => {
    async function getName() {
      const response = await axios.get("http://localhost:3002/products/")
      setName(response.data.artistname)
    }
    getName()
  }, [])

  function Contactform(products) {

    console.log(products)

    if (products === null) return
    return (
      <Form.Select aria-label="Default select example">
        {/* <Form.Control required as="select" name="artistname">
          {products.map(product => (<option key={product.artistname} value={product.artistname}>{product.artistname}</option>))}
        </Form.Control>
        <option>Select Artist</option> */}
        <option>Select Artist</option>

        {products.map((product, i) => (
          <>
          <option key={i}> {product.artistname}</option>
          </>
        ))}
     
     
      </Form.Select>
    )

  }

  return (
    <>
      <h2>Artwork Enquiry </h2>
      <div className="contact">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Number
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <div className='card-container'>
          <ProductContext.Consumer>
            {({ products }) => (
              Contactform(products)
            )}
          </ProductContext.Consumer>
        </div>
        <p>{artistname}</p>
      </div>
    </>
  )

}

export default ContactUs
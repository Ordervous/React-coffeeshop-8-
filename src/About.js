import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function About() {
    return (
        <>
            <Container>
                <h2>About Us</h2>
                <Row className='d-flex align-items-center'>
                    <Col>
                        <p>Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth
                            stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui
                            XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel
                            brooklyn. Blue bottle ennui tbh succulents.</p>
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100"
                            src="https://www.cooeeart.com.au/wp-content/uploads/2022/05/1D_00113.jpg"
                            alt="First slide"
                        />
                    </Col>
                </Row>

            </Container>
            <p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes
                bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. </p>
        </>

    )
}

export default About
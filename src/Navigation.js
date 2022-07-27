import React from "react";
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet, useNavigate } from "react-router-dom"
import Footer from "./Footer";

function Navigation() {

    let navigate = useNavigate();
    function handleSearch(event) {

        if (event.target.value === "") return;

        event.preventDefault();

        navigate(`/${event.target.value}/search`)

        // const { data, setData } = useFetch();
        // return (
        //     <main>
        //         <input
        //             type="text"
        //             placeholder="Type your favorite artist"
        //             value={data.slug}
        //             onChange={(e) => setData({ ...data, slug: e.target.value })}
        //         />
        //         <br />
        //         {data.results.length > 0 ? <ProductList ProductList={data.results[0]} /> : null}
        //     </main>
        // );
        // return (
        //     <MySearch />
        // )
    }



    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <img
                            src="https://t3.ftcdn.net/jpg/04/06/91/92/360_F_406919209_O9Sy4SKu3dVx0mE3RqYfCH5hqMwVWbOk.jpg"
                            width="40"
                            height="30"
                            className="d-inline-block align-center"
                            alt="React Bootstrap logo"
                        /> {' '}
                        <Navbar.Brand className="d-inline-block align-top" >Kirrawee Art Gallery</Navbar.Brand>
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="About" className="nav-link">About</Link>
                        <Link to="/products" className="nav-link">Artwork</Link>
                        <Link to="/new" className="nav-link">Add</Link>
                        <Link to="/contactus" className="nav-link">Contact</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Stack className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <br />
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
            <br />
            <br />
            <br />
                <Footer className="footer" />
            </Stack>
        </>
    )

}

export default Navigation
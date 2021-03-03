import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions';

function Product () {

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Wedevs Assignment - Product CRUD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                        </Nav>
                        <Nav>
                            {
                                auth.authenticate
                                ? <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
                                    <span onClick={ logout }><AiOutlineLogout /> logout</span>
                                </NavDropdown>
                                : null
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">
                <div className="main-container">
                    <ProductForm />
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
 
export default Product;
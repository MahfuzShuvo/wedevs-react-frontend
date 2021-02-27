import React, { Component } from 'react';
import axios from 'axios';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import { apiProducts } from '../../urlConfig';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

class Product extends Component {
    state = {
        products: [],
        loader: false,
        url: apiProducts
    };

    getProducts = async () => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        this.setState({ loader: true });
        const products = await axios.get(this.state.url, config);
        this.setState({ 
            products: products.data,
            loader: false
        });
    };

    componentDidMount() {
        this.getProducts();
    }
    
    render() { 
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
                                    this.props.user
                                    ? <NavDropdown title={this.props.user.name} id="basic-nav-dropdown">
                                        <NavDropdown.Item on><AiOutlineLogout /> logout</NavDropdown.Item>
                                    </NavDropdown>
                                    : null
                                }
                                {/*<Nav.Link href="#"><AiOutlineLogout /> logout</Nav.Link>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="container">
                    <div className="main-container">
                        <ProductForm />
                        <ProductList products={ this.state.products } />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;
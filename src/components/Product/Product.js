import React, { Component } from 'react';
import axios from 'axios';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import { apiProducts, apiLogout } from '../../urlConfig';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

class Product extends Component {
    state = {
        products: [],
        loader: false,
        // urlProduct: apiProducts
    };

    // getProducts = async () => {
    //     const config = {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //         }
    //     }
    //     this.setState({ loader: true });
    //     const products = await axios.get(this.state.urlProduct, config);
    //     this.setState({ 
    //         products: products.data,
    //         loader: false
    //     });
    // };

    // handleLogout () {
    //     const config = {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //         }
    //     };
        
    //     axios.get(apiLogout, config).then (
    //         res => {
    //             this.setState({
    //                 products: [],
    //                 loader: false
    //             });
    //         },
    //         err => {
    //             console.log(err)
    //         }
    //     )
    //     // this.setState({ 
    //     //     products: [],
    //     //     loader: false
    //     // });
    // }

    // componentDidMount() {
    //     if (this.props.user) {
    //         this.getProducts();
    //     }
    // }
    
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
                                        <p onClick={ this.handleLogout }><AiOutlineLogout /> logout</p>
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
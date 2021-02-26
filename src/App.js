import React, { Component } from 'react';
import ProductForm from './components/ProductForm';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#">
                            <h4>Wedevs Assignment - Product CRUD</h4>
                        </a>
                    </li>
                </ul>
                <div className="main-container">
                    <ProductForm />
                    <ProductList />
                </div>
            </div>
        );
    }
}
 
export default App;

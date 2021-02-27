import React, { Component } from 'react';

class ProductList extends Component {
    state = {  }

    render() { 

        const products = this.props.products;

        return (
            <div className="product-data">
                <table className="table table-sm table-bordered mt">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(products => {
                                return (
                                    <tr key={products.id}>
                                        <td>1</td>
                                        <td>{products.title}</td>
                                        <td>{products.image}</td>
                                        <td>{products.price}</td>
                                        <td>{products.description}</td>
                                        <td>
                                            <button type="submit" className="btn btn-sm btn-info action-btn">Edit</button>
                                            <button type="submit" className="btn btn-sm btn-danger action-btn">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default ProductList;
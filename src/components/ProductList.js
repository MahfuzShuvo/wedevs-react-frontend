import React, { Component } from 'react';

class ProductList extends Component {
    state = {  }
    render() { 
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
                        <tr>
                            <td>1</td>
                            <td>Product</td>
                            <td>...</td>
                            <td>50</td>
                            <td>This is dummy data</td>
                            <td>
                                <button type="submit" className="btn btn-sm btn-info action-btn">Edit</button>
                                <button type="submit" className="btn btn-sm btn-danger action-btn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default ProductList;
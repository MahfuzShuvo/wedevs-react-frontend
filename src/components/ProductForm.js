import React, { Component } from 'react';

class ProductForm extends Component {
    state = {  }
    render() { 
        return (
            <form>
                <div className="row product-form">
                    <div className="col-md-3">
                        <div className="mb-3 mt">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Product title" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="mb-3 mt">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" placeholder="Product price" />
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                        <div className="mb-3 mt">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" placeholder="Product description" />
                        </div>
                    </div>
                    
                    <div className="col-md-10">
                        <div className="mb-3 mt">
                            <label className="form-label">Upload Product Image</label>
                            <input type="file" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="mb-3 mt">
                            <button type="submit" className="btn btn-sm btn-primary submit-button">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default ProductForm;
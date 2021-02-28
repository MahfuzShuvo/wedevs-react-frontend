import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById, getAllProducts } from '../../actions';
import { productImagePath } from '../../urlConfig';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ProductList () {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    // const renderDeleteProductModal = () => {

    //     return (
    //         <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>Confirm</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 Are you sure to delete this product?
    //             </Modal.Body>
    //             <Modal.Footer>
    //             <Button variant="danger" onClick={() => setShowDeleteModal(false)}>No</Button>
    //             <Button variant="primary" onClick={ deleteProductConfirm }>Yes</Button>
    //             </Modal.Footer>
    //         </Modal>
    //     );
    // }

    // const deleteProductConfirm = () => {
    //     const payload = {
    //         productId: product._id,
    //       };
    //       console.log(payload)
    //     //   dispatch(deleteProductById(payload));
    //     }
    //     setShowDeleteModal(false);
    // }


    return (
        <div className="product-data">
            <table className="table table-sm table-bordered mt">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', width: '50px' }}>#</th>
                        <th>Title</th>
                        <th style={{ textAlign: 'center' }}>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th style={{ textAlign: 'center', width: '150px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 
                        ? product.products.map(pro => {
                            return (
                                <tr key={pro.id}>
                                    <td style={{ textAlign: 'center' }}>1</td>
                                    <td>{pro.title}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <img src={productImagePath(pro.image)} alt="" style={{ width: '50px' }} />
                                    </td>
                                    <td>{pro.price}</td>
                                    <td>{pro.description}</td>
                                    <td>
                                        <button type="submit" className="btn btn-sm btn-info action-btn"><FaEdit /></button>
                                        <button
                                            className="btn btn-sm btn-danger action-btn"
                                            onClick={() => {
                                                const payload = {
                                                  productId: pro.id,
                                                };
                                                // console.log(payload)
                                                dispatch(deleteProductById(payload));
                                              }}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default ProductList;
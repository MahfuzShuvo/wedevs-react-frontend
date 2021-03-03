import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById, getAllProducts, updateProduct } from '../../actions';
import { productImagePath } from '../../urlConfig';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Form, Modal } from 'react-bootstrap';

function ProductList () {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [image, setImage] = useState('');
    const [productId, setProductId] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const handleProductImage = (e) => {
        let file = e.target.files[0];
        setImage(file);
    }

    const editProductModal = (product) => {
        console.log(product.image)
        setProductId(product.id);
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setPreviewImage(product.image);

        setShowEditModal(true);
    }

    const handleEditProductModalClose = () => {
        setShowEditModal(false)
    }

    const handleEditProduct = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('title', title);
        form.append('description', description);
        form.append('price', price);
        form.append('image', image);
        form.append('_method', 'PUT');

        dispatch(updateProduct(form, productId));
    }

    useEffect(() => {
        if (!product.loading) {
            setShowEditModal(false);
            setTitle('');
            setPrice('');
            setDescription('');
            setImage('');
        }
    }, [product.loading]);


    const renderEditProductModel = () => {
        
        return (
            <Modal show={showEditModal} onHide={ handleEditProductModalClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter product title"
                                // name="title"
                                value={ title }
                                onChange={(e) => setTitle(e.target.value)}
                                // required="required"
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter product price"
                                value={ price }
                                onChange={(e) => setPrice(e.target.value)}
                                // required="required"
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter product description"
                                value={ description }
                                onChange={(e) => setDescription(e.target.value)}
                                // required="required"
                            />
                        </Form.Group>

                        <div>
                            <img src={productImagePath(previewImage)} alt="" style={{ width: '50px' }}/>
                        </div>
                    
                        <Form.Group>
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control 
                                type="file" 
                                // name={ image }
                                onChange={ 
                                    // handleProductImage 
                                    e => {
                                        let files = e.target.files;
                                        if (files.length === 1) {
                                            handleProductImage(e);
                                        } else {
                                            e.target.value = '';
                                        }
                                    }
                                }
                                // required="required"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="submit-button" variant="primary" size="sm" onClick={ handleEditProduct }>update</Button>
                </Modal.Footer>
            </Modal>
        )
    }


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
                        <th style={{ textAlign: 'center', width: '100px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 
                        ? product.products.map((pro, index) => {
                            return (
                                <tr key={pro.id}>
                                    <td style={{ textAlign: 'center' }}>{index+1}</td>
                                    <td>{pro.title}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <img src={productImagePath(pro.image)} alt="" style={{ width: '50px' }} />
                                    </td>
                                    <td>{pro.price}</td>
                                    <td>{pro.description}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button
                                            className="btn btn-sm btn-info action-btn"
                                            onClick={() => editProductModal(pro)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger action-btn"
                                            onClick={() => {
                                                const payload = {
                                                  productId: pro.id,
                                                };
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
            { renderEditProductModel() }
        </div>
    );
}
 
export default ProductList;
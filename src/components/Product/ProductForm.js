import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions';

function ProductForm () {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [show, setShow] = useState(false);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleProductImage = (e) => {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        if (!product.loading) {
            setShow(false);
            setTitle('');
            setPrice('');
            setDescription('');
            setImage('');
        }
    }, [product.loading]);

    const handleAddProduct = (e) => {

        console.log(image)
        const form = new FormData();

        form.append('title', title);
        form.append('description', description);
        form.append('price', price);
        form.append('image', image);

        dispatch(addProduct(form));
        // setShow(false);
    };

    const renderAddProductModel = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter product title"
                                value={ title }
                                onChange={(e) => setTitle(e.target.value)}
                                required="required"
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter product price"
                                value={ price }
                                onChange={(e) => setPrice(e.target.value)}
                                required="required"
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter product description"
                                value={ description }
                                onChange={(e) => setDescription(e.target.value)}
                                required="required"
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.File label="Product Image" name="image" onChange={ handleProductImage } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="submit-button" variant="primary" size="sm" onClick={ handleAddProduct }>save</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
       
        <div className="product-header">
            <h5>Product List</h5>
            <Button variant="primary" size="sm" onClick={ handleShow }>+ Add Product</Button>
            { renderAddProductModel() }
        </div>
    )
}
 
export default ProductForm;
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';

function Register () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const userRegister = (e) => {
        e.preventDefault();
        const user = { name, email, password }
        dispatch(signup(user));
    };

    // const token = window.localStorage.getItem('token');
    // if (token) {
    //     return <Redirect to={`/`} />
    // }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    if (auth.loading) {
        return <p>Loading . . .</p>
    }

    return (
        <Container>
            <Row style={{marginTop: '60px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <div className="signin-content">
                        <h4 className="mb-5 text-center">User Registration</h4>
                        <Form onSubmit={ userRegister }>
                            <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter name"
                                    value={ name }
                                    onChange={(e) => setName(e.target.value)}
                                    required="required"
                                />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email"
                                    value={ email }
                                    onChange={(e) => setEmail(e.target.value)}
                                    required="required"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    value={ password }
                                    onChange={(e) => setPassword(e.target.value)}
                                    required="required"
                                />
                            </Form.Group>

                            <Button className="custom-btn" variant="primary" size="sm" type="submit">Register</Button>
                        </Form>
                        <div className="register-link">
                            <p>Already have an account.</p>
                            <a href="/signin" className="ml-2">Click here</a>
                            <p className="ml-2">to login</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Register;
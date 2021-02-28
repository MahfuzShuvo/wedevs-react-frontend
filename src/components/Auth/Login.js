import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions';
import { Redirect } from 'react-router-dom';

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = { email, password }
        dispatch(login(user));
    };

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }
    
    return (
        <Container>
            <Row style={{marginTop: '60px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <div className="signin-content">
                        <h4 className="mb-5 text-center">User Login</h4>
                        <Form onSubmit={ userLogin }>
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
                            
                            <Button className="custom-btn" variant="primary" size="sm" type="submit">Login</Button>
                        </Form>
                        <div className="register-link">
                            <p>Create an account?</p>
                            <a href="/signup" className="ml-2">Click here</a>
                            <p className="ml-2">to register</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Login;
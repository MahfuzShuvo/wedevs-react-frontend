import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class Register extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Row style={{marginTop: '60px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <div className="signin-content">
                            <h4 className="mb-5 text-center">User Registration</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" />
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
}
 
export default Register;
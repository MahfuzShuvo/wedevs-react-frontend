import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { apiLogin } from '../../urlConfig';

class Login extends Component {
    state = {  }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        const { history } = this.props;

        axios.post(apiLogin, data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                
                history.push("/");
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() { 
        return (
            <Container>
                <Row style={{marginTop: '60px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <div className="signin-content">
                            <h4 className="mb-5 text-center">User Login</h4>
                            <Form onSubmit={ this.handleSubmit }>
                                <Form.Group>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email"
                                        onChange={e => this.email = e.target.value}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password"
                                        onChange={e => this.password = e.target.value}
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
}
 
export default Login;
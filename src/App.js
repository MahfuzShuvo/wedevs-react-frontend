import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Auth/Login';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import PrivateRoute from './components/HOC/PrivateRoute';
import Product from './components/Product/Product';
import axios from 'axios';
import { apiUser } from './urlConfig';

class App extends Component {
    state = {};

    componentDidMount = () => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        axios.get(apiUser, config).then (
            res => {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err)
            }
        )
    };

    render() { 
        return (
            <div>
                <Switch>
                    <PrivateRoute path="/" exact component={ () => <Product user={this.state.user} /> } />

                    <Route path="/signin" component={ Login } />
                    <Route path="/signup" component={ Register } />
                </Switch>
            </div>
            
        );
    }
}
 
export default App;

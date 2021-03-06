import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Product from './components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

function App () {
    
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        } 
        
    }, [auth.authenticate]);

    return (
        <div>
            <Switch>
                <PrivateRoute path="/" exact component={ Product } />

                <Route path="/signin" component={ Login } />
                <Route path="/signup" component={ Register } />
            </Switch>
        </div>
        
    );
}
 
export default App;

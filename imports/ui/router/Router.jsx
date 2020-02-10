import React from 'react';
import App from "../App";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import AuthenticatedRoute from "./AuthenticatedRoute";
import RegisterPage from '../pages/RegisterPage';

const RouterContainer = () => {
    return (
        <Router>
            <AuthenticatedRoute exact path="/protected" component={App} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/" component={LandingPage} />
        </Router>
    );
}

export default RouterContainer;
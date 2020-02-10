import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    console.log(Meteor.userId())
    return (
        <Route {...rest} render={(props) => (
            Meteor.userId() != null
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
}

export default AuthenticatedRoute;
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const User = ({ isLoggedIn, user }) => (
    <Jumbotron>
        <h1>Hi {isLoggedIn ? user : 'anonymous'}</h1>
        <p>This is a sample app with sub-stores.</p>
        <p>There are 3 stores in app. Two of them are initialized on initial route change.</p>
        <p>User data is shared in stories view.</p>
    </Jumbotron>
);

export default User;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Button, Grid } from 'react-bootstrap';
import Loadable from 'react-loadable';

import User from './User';

const Loading = () => <div className="c-loader" />;

const DadJokes = Loadable({
    loader: () => import('@rrsd/dad-joke'),
    loading: Loading
});

const Stories = Loadable({
    loader: () => import('@rrsd/stories'),
    loading: Loading
});


const AppRouter = ({ isLoggedIn, logout, login, thumbnail, user }) => {
    return (
    <Router>
        <Fragment>
            <Navbar>
                <ul className='nav navbar-nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jokes">Jokes</Link></li>
                    <li><Link to="/stories">Stories</Link></li>
                </ul>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        {isLoggedIn ? <Button onClick={logout}>Logout</Button> : <Button onClick={login}>Login</Button>}
                    </Navbar.Form>
                    { thumbnail && <img className='thumbnail navbar-right' src={thumbnail} alt='' /> }
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                <Route exact path="/" render={() => <User isLoggedIn={isLoggedIn} user={user} />} />
                <Route exact path="/jokes" component={DadJokes} />
                <Route path="/stories" component={Stories} />
            </Grid>
        </Fragment>
    </Router>
)};

export default AppRouter;

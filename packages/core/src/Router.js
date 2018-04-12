import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button, Grid } from 'react-bootstrap';
// import Loadable from 'react-loadable';
import PropTypes from 'prop-types';


const Loading = () => <div className="c-loader" />;

// const Home = Loadable({
//     loader: () => import('./routes/Home/index'),
//     loading: Loading
// });

// const About = Loadable({
//     loader: () => import('./routes/About/index'),
//     loading: Loading
// });

const AppRouter = ({ isLoggedIn, logout, login }) => {
    return (
    <Router>
        <Fragment>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Quotes App</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <Link to="/ru">Russian</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/en">English</Link>
                    </NavItem>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        {isLoggedIn ? <Button onClick={logout}>Logout</Button> : <Button onClick={login}>Login</Button>}
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>;
            <Grid>
                <Route exact path="/ru" component={Loading} />
                <Route path="/en" component={Loading} />
            </Grid>
        </Fragment>
    </Router>
)};

export default AppRouter;

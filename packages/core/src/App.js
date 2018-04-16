import React from 'react';
import { Provider, connect } from 'react-redux';

import './App.css';

import AppRouter from './Router';
import store from './store';
import { fetchUser, resetUser } from './store/actionCreators';
import { isLoggedIn, getThumbnail, getUserName } from './store/selectors';

const mapDispatchToProps = {
    login: fetchUser,
    logout: resetUser
};

const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
    thumbnail: getThumbnail(state),
    user: getUserName(state)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);

const App = () => (
    <Provider store={store} >
        <AppContainer />
    </Provider>
);

export default App;

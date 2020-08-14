import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Main} path="/" exact/>
            <Route component={Create} path="/create" />
        </BrowserRouter>
    );
}

export default Routes;
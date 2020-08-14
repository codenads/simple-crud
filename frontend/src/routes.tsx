import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Main} path="/" exact/>
            <Route component={Create} path="/create" />
            <Route component={Read} path="/read" />
            <Route component={Update} path="/update" />
        </BrowserRouter>
    );
}

export default Routes;
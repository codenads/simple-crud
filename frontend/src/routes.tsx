import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Main} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;
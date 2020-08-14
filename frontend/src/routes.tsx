import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form'
import Read from './components/Read';
import Delete from './components/Delete'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route component={Main} path="/" exact/>
                <Route render={() => <Form title="Create a user" textButton="Create"/>} path="/create" />
                <Route component={Read} path="/read" />
                <Route render={() => (
                        <Form title="Update a user" textButton="Update">
                            <label htmlFor="id">Enter your ID</label>
                            <input type="text"/>
                        </Form>
                )} 
                path="/update" />
                <Route component={Delete} path="/delete" />
            </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;
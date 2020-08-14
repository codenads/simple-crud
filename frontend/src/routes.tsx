import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import IDField from './components/IDField';
import Main from './pages/Main';
import Form from './pages/Form'
import Read from './pages/Read';
import Delete from './pages/Delete'


const Routes = () => {
    const [id, setId] = useState('');

    function handleIdChange(value: string) {
        setId(value);
    }

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route component={Main} path="/" exact/>
                <Route render={() => <Form title="Create a user" textButton="Create"/>} path="/create" />
                <Route component={Read} path="/read" />
                <Route render={() => (
                        <Form title="Update a user" textButton="Update" id={id}>
                            <IDField handleIdChange={handleIdChange}/>
                        </Form>
                )} 
                path="/update" />
                <Route component={Delete} path="/delete" />
            </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;
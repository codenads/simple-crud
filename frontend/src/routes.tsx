import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form'
import Read from './components/Read';
import Delete from './components/Delete'
import IDField from './components/IDField';

const Routes = () => {
    const [id, setId] = useState(0);

    function handleIdChange(value: number) {
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
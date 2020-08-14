import React from 'react';

import Header from '../Header';

import '../Create/styles.css'

const Update = () => {
    return (
        <div>
            <Header />
            <main className="container main smaller">
                <h2>Update a user</h2>
                <form>
                    <label htmlFor="id">Insert the ID</label>
                    <input type="text"/>
                    
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"/>

                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" type="text"/>

                    <button type="submit">Update</button>
                </form>
            </main>
        </div>
    );
}

export default Update;
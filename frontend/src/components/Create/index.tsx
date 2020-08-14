import React from 'react';
import Header from '../Header'
import './styles.css'

const Create = () => {
    return (
        <div>
            <Header />
            <main className="container main smaller">
                <h2>Create a user</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"/>

                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" type="text"/>

                    <button type="submit">Sign up</button>
                </form>
            </main>
        </div>
    );
};

export default Create;
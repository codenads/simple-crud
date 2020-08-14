import React from 'react';
import Header from '../Header'
import './styles.css'

const Create = () => {
    return (
        <div>
            <Header />
            <main className="container main">
                <h2>Criar um usuário</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"/>

                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" type="text"/>

                    <button type="submit">Cadastrar</button>
                </form>
            </main>
        </div>
    );
};

export default Create;
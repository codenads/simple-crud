import React from 'react';

import Header from '../Header';
import './styles.css';

const Read = () => {
    return (
        <div>
            <Header />
            <main className="container main smaller">
                <h2>Lista de usuários</h2>
                <ul className="user-list">
                    <li className="user-item">
                        <span>Name</span>
                        <p>Luís Antônio</p>

                        <span>Email</span>
                        <p>codenads@outlook.com</p>

                        <span>Phone</span>
                        <p>(82) 9 9810-3320</p>
                    </li>
                    <li className="user-item">
                        <span>Name</span>
                        <p>Luís Antônio</p>

                        <span>Email</span>
                        <p>codenads@outlook.com</p>
                        
                        <span>Phone</span>
                        <p>(82) 9 9810-3320</p>
                    </li>
                    <li className="user-item">
                        <span>Name</span>
                        <p>Luís Antônio</p>

                        <span>Email</span>
                        <p>codenads@outlook.com</p>
                        
                        <span>Phone</span>
                        <p>(82) 9 9810-3320</p>
                    </li>
                    <li className="user-item">
                        <span>Name</span>
                        <p>Luís Antônio</p>

                        <span>Email</span>
                        <p>codenads@outlook.com</p>
                        
                        <span>Phone</span>
                        <p>(82) 9 9810-3320</p>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Read;
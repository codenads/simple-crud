import React from 'react';
import './styles.css';

const users = [
    {
        name: "Luís",
        email: "codenads@outlook.com",
        phone: "(82) 9 9810-3320",
    },
    {
        name: "Luís",
        email: "codenads@outlook.com",
        phone: "(82) 9 9810-3320",
    },
    {
        name: "Luís",
        email: "codenads@outlook.com",
        phone: "(82) 9 9810-3320",
    },
]

const Read = () => {
    return (
        <div>
            <main className="container main smaller">
                <h2>All users</h2>
                <ul className="user-list">
                    {
                        users.map(user => (
                            <li className="user-item">
                                <span>Name</span>
                                <p>{user.name}</p>

                                <span>Email</span>
                                <p>{user.email}</p>

                                <span>Phone</span>
                                <p>{user.phone}</p>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    );
}

export default Read;
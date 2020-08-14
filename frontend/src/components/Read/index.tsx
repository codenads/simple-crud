import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const Read = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
        })
    },[])

    return (
        <div>
            <main className="container main smaller">
                <h2>All users</h2>
                <ul className="user-list">
                    {
                        users.map(user => (
                            <li key={user.id} className="user-item">
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
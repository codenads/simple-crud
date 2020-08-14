import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Header = () => {

    return (
        <header>
            <nav className="container desktop-nav">
                <Link to="/">simple-crud</Link>
                <ul>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/create">Update</Link></li>
                    <li><Link to="/create">Delete</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
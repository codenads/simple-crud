import React from 'react'

import './styles.css'

const Header = () => {

    return (
        <header>
            <nav className="container desktop-nav">
                <span>simple-crud</span>
                <ul>
                    <li>Create</li>
                    <li>Read</li>
                    <li>Update</li>
                    <li>Delete</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
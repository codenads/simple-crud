import React from 'react';

import Header from '../Header'
import './styles.css'

const Main = () => {
    return (
        <div>
            <Header />
            <main className="container main">
                <div className="inner-container">
                    <h1>Seja bem-vindo ao<br /> SIMPLE-CRUD</h1>
                    <p>As tecnologias utilizadas no <span>backend</span> foram Node.JS em conjunto com <span>Typescript</span>.<br />
                Frontend feito com <span>React.js</span> também em conjunto com <span>Typescript</span>.
                </p>
                </div>
            </main>
        </div>

    );
}

export default Main;
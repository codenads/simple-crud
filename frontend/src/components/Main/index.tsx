import React from 'react';

import './styles.css'

const Main = () => {
    return (
        <main className="container main">
            <div className="inner-container">
                <h1>Seja bem-vindo ao SIMPLE-CRUD</h1>
                <p>As tecnologias utilizadas no <span>backend</span> foram Node.JS em conjunto com <span>Typescript</span>.<br/> 
                Frontend feito com <span>React.js</span> também em conjunto com <span>Typescript</span>.
                </p>
            </div>  
        </main>
    );
}

export default Main;
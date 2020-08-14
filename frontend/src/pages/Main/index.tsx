import React from 'react';
import './styles.css'

const Main = () => {
    return (
        <div>
            <main className="container main">
                <div className="inner-container">
                    <h1>Welcome to<br /> SIMPLE-CRUD</h1>
                    <p>
                        The technologies used in the <span>backend</span> was Node.JS alongside with <span>Typescript</span>.<br />
                        Frontend made with <span>React.js</span>, <span>React-Router-DOM</span> also alongside with <span>Typescript</span>.
                    </p>
                </div>
            </main>
        </div>

    );
}

export default Main;
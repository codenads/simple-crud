import React from 'react';

interface IForm {
    title: string;
    textButton: string;
}

const Form: React.FC<IForm> = (props) => {
    return (
        <div>
            <main className="container main smaller">
                <h2>{props.title}</h2>
                <form>

                    {props.children}

                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"/>

                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" type="text"/>

                    <button type="submit">{props.textButton}</button>
                </form>
            </main>
        </div>
    );
};

export default Form;
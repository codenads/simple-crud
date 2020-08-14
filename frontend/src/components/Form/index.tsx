import React, { useState } from 'react';
import api from '../../services/api'

interface IForm {
    title: string;
    textButton: string;
    id?: number;
}

const Form: React.FC<IForm> = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function clearInputs() {
        setName('');
        setEmail('');
        setPhone('');
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        if(props.children && props.id) {
            api.put(`/users/${props.id}`, {
                name,
                email,
                phone
            }).then(response => alert(response.data.message));
            clearInputs();
        }
        else {
            api.post('/users', {
                name,
                email,
                phone
            }).then(response => alert(response.data.message));
            clearInputs();
        }
        
    }

    return (
        <div>
            <main className="container main smaller">
                <h2>{props.title}</h2>
                <form>

                    {props.children}

                    <label htmlFor="name">Name</label>
                    <input 
                        name="name" 
                        id="name" 
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        name="email" 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />

                    <label htmlFor="phone">Phone</label>
                    <input 
                        name="phone" 
                        id="phone" 
                        type="text"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />

                    <button type="submit" onClick={handleFormSubmit}>{props.textButton}</button>
                </form>
            </main>
        </div>
    );
};

export default Form;
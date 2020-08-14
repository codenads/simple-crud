import React, { useState } from 'react';
import api from '../../services/api';

const Delete = () => {
    const [id, setId] = useState('');

    function handleSubmit(event: any) {
        event.preventDefault();
        
        api.delete(`/users/${id}`).then(response => alert(response.data.message));
        setId('');
    }

    return (
        <div>
            <main className="container main smaller">
                <h2>Delete a user</h2>
                <form>
                    <label htmlFor="id">Insert the ID</label>
                    <input 
                        name="id"
                        id="id"
                        type="text"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>Delete</button>
                </form>
            </main>
        </div>
    );
}

export default Delete;
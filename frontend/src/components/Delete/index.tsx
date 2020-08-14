import React from 'react';

const Delete = () => {
    return (
        <div>
            <main className="container main smaller">
                <h2>Delete a user</h2>
                <form>
                    <label htmlFor="id">Insert the ID</label>
                    <input type="text"/>
                    <button type="submit">Delete</button>
                </form>
            </main>
        </div>
    );
}

export default Delete;
import React from 'react'

interface IIDField {
    handleIdChange: Function;
}

const IDField: React.FC<IIDField> = (props) => {
    return (
        <div>
            <label htmlFor="id">Enter your ID</label>
            <input type="string" onChange={event => props.handleIdChange(event.target.value)}/>
        </div>
    );
}

export default IDField;
import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <div>
                <h1>TODO App</h1>
            </div>
            <div>
                <h3>Task List</h3>
            </div>
            <InputWrapper {...props}/>
        </header>
    );
}

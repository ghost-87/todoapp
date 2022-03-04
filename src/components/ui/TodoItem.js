import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className='taskbox1'>
                <label1 className="d-flex justify-content-around ">
                    {data.text}
                </label1>
            </div>
            <div className='taskbox2'>
                <label2 className="d-flex justify-content-around ">
                    <CheckBox checked={data.completed} onChange={handleChange}/> 
                </label2>
            </div>
        </li>
    );
}

import { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './Form.css';

const Form = ({ addTodo }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const changeHandler = (e) => {
        if (e.key === 'Enter') {
            return;
        }
        setError(false);
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!input.trim()) {
            setError(true);
            return;
        }

        const todo = {
            id: uuid(),
            text: input,
            completed: false
        };

        addTodo(todo);
        setInput('');
    };
    return (
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    value={input}
                    type="text"
                    placeholder="Add a new todo"
                    onChange={(e) => changeHandler(e)}
                />
                <button type="submit">add</button>
            </form>
            {error && <div className="error">input can not be empty</div>}
        </>
    );
};

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Form;
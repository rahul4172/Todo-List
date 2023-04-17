import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};
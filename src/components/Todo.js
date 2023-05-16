import React from "react";

const Todo = ({text ,todo, todos, setTodos}) => {
    // Events  
    const deleteHandler = () => {
        
        console.log(todo)
    }
    return (
        <div className="todo ml-32">
             <li className="todo-item">{text}</li>
             <button className="complete-btn m-4">
                <i className="fas fa-check"></i>
             </button>
             <button className="trash-btn m-4">
                <i className="fas fa-trash"></i>
             </button>
        </div>
    );
}

export default Todo;
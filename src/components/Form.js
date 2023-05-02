import React from 'react';

const Form = ({setInputtext}) => {
 
    // Here i can write javascript and function 
    const inputTextHandler = (e) => {
            console.log(e.target.value)
            setInputtext(e.target.value);
        }

    return (
        <form className='flex justify-center my-24 mb-12'>
            <input onChange={inputTextHandler} type="text" className="todo-input rounded"/>
            <button className="todo-button rounded" type="submit">
                <i className="fas fa-plus-square bg-orange-600"></i>
            </button>
            <div className="select mx-4">
                <select name="todos"  className="filter-todo align-middle rounded">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
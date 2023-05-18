import React from 'react';

const Form = ({setInputtext , todos , setTodos , inputText }) => {
 
    // Here i can write javascript and function 
    const inputTextHandler = (e) => {
            console.log(e.target.value)
            setInputtext(e.target.value);
        }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos , {text:inputText , completed : false , id : Math.random() * 100}]);
        setInputtext("");
        console.log(todos);
    }
    
    const statusHandler = (e) => {

    }

    return (
        <form className='flex justify-center my-24 mb-12'>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input rounded"/>
            <button onClick={submitTodoHandler} className="todo-button rounded" type="submit">
                <i className="fas fa-plus-square bg-orange-600"></i>
            </button>
            <div className="select mx-4">
                <select name="todos"  className="filter-todo align-middle rounded" >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
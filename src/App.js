import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React , {useState} from 'react'

function App() {

  const [inputText , setInputtext] = useState(""); 
  const[todos,setTodos] = useState([]);
  const[status , setStatus] = useState("all");

  return (
    <div className="App bg-gradient-to-r from-yellow-300 to-orange-500 " >
     <header className="text-center">
      <h1 className='text-center font-semibold text-3xl my-4 '>James's Todo List </h1>
     </header>
     <Form 
       setTodos={setTodos} 
       setInputtext = {setInputtext}
       inputText = {inputText}
       todos={todos}
       setStatus={setStatus}
     />
     <TodoList 
       setTodos = {setTodos}
       todos={todos}
     />
    </div>
  );
}

export default App;

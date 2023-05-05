import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React , {useState} from 'react'

function App() {

  const [inputText , setInputtext] = useState(""); 
  const[todos,setTodos] = useState([]);


  return (
    <div className="App bg-gradient-to-r from-yellow-300 to-orange-500 " >
     <header className="text-center">
      <h1 className='text-center font-semibold text-3xl my-4 '>James's Todo List </h1>
     </header>
     <Form setInputtext = {setInputtext}/>
     <TodoList />
    </div>
  );
}

export default App;

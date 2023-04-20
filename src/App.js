import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-300 to-orange-500" >
     <header className="text-center">
      <h1>James's Todo List </h1>
     </header>
     <Form/>
     <TodoList />
    </div>
  );
}

export default App;

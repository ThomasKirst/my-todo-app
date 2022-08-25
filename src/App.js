import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  const todos = [
    { id: 1, title: 'React Doku lesen' },
    { id: 2, title: 'Wäsche machen' },
    { id: 3, title: 'Zahnarzt' },
    { id: 4, title: 'Rasen mähen' },
    { id: 5, title: 'Vertrag kündigen' },
    { id: 6, title: 'Katze füttern' },
  ];

  return (
    <div>
      <h1>My Todo App</h1>

      <form>
        <input type="text" name="title" id="title" />
        <button htmlFor="title">Add Todo</button>
      </form>

      <ul className="App__list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;

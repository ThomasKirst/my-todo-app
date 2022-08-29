import { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

import './App.css';

function App() {
  const todos = [
    { id: 1, title: 'React Doku lesen' },
    { id: 2, title: 'Wäsche machen' },
    { id: 3, title: 'Zahnarzt' },
    { id: 4, title: 'Rasen mähen' },
    { id: 5, title: 'Vertrag kündigen' },
    { id: 6, title: 'Katze füttern' },
  ];

  const [todoList, setTodoList] = useState(todos);

  // 6. addTodo wird mit dem neuen Todo aufgerufen
  function addTodo(newTodo) {
    // 7. Neuer State: Füge das neue Todo an den Anfang der Liste
    // und übernehme alle bestehenden Todos
    setTodoList([newTodo, ...todoList]); // asynchrone Operation

    // 8. Es wird von React ein Re-render der Komponente(n) angestossen
  }

  function removeTodo(id) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  }

  return (
    <div className="App">
      <h1>My Todo App</h1>

      <TodoForm countTodos={todoList.length} onAddTodo={addTodo} />

      <ul className="App__list">
        {todoList.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            onRemoveItem={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

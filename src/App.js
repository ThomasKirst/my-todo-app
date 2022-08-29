import { useEffect, useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

import './App.css';

function App() {
  const todos = [
    { id: 1, title: 'React Doku lesen', isDone: false },
    { id: 2, title: 'Wäsche machen', isDone: false },
    { id: 3, title: 'Zahnarzt', isDone: false },
    { id: 4, title: 'Rasen mähen', isDone: true },
    { id: 5, title: 'Vertrag kündigen', isDone: false },
    { id: 6, title: 'Katze füttern', isDone: false },
  ];

  const [todoList, setTodoList] = useState(loadFromLocal() || todos);

  useEffect(() => {
    localStorage.setItem('_TODOOOOOS', JSON.stringify(todoList));
  }, [todoList]);

  function loadFromLocal() {
    return JSON.parse(localStorage.getItem('_TODOOOOOS'));
  }

  function toggleItem(todoId) {
    const updatedTodos = todoList.map((item) => {
      if (item.id === todoId) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodoList(updatedTodos);
  }

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

      <TodoForm onAddTodo={addTodo} />

      <ul className="App__list">
        {todoList.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            onRemoveItem={removeTodo}
            onToggleItem={toggleItem}
            isChecked={todo.isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

import { nanoid } from 'nanoid';

import './TodoForm.css';

// 1. Step: TodoForm als Komponente erstellen
export default function TodoForm({ onAddTodo }) {
  // 3. Nimmt den Value aus dem Input Field
  function handleSubmit(event) {
    // Formular nicht ins Nirvana schicken
    event.preventDefault();

    const form = event.target;
    const inputValue = form.title.value;
    // "New Todo" => { id: 1234, title: "New Todo"}

    // 4. Objekt erstellen mit allen Informationen, die ein Todo benötigt
    const newTodo = { id: nanoid(), title: inputValue };

    // 5. Rufe die Funktion aus, die uns als Prop mitgegeben wurde
    //    und übergebe das newTodo
    onAddTodo(newTodo); // => addTodo() Funktion in der App.js

    form.reset();
    form.title.focus();
  }

  // 2. onSubmit Handler => handleSubmit(event)
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <strong>Add a new todo</strong>
      </label>
      <br />
      <input className="Form__input" type="text" name="title" id="title" />
      <button>Add Todo</button>
    </form>
  );
}

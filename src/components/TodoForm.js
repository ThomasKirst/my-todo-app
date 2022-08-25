// 1. Step: TodoForm als Komponente erstellen
export default function TodoForm({ countTodos, onAddTodo }) {
  // 3. Nimmt den Value aus dem Input Field
  function handleSubmit(event) {
    // Formular nicht ins Nirvana schicken
    event.preventDefault();

    const form = event.target;
    const inputValue = form.title.value;
    // "New Todo" => { id: 1234, title: "New Todo"}

    // Objekt erstellen mit allen Informationen, die ein Todo benötigt
    const newTodo = { id: countTodos + 1, title: inputValue };

    // Rufe die Funktion aus, die uns als Prop mitgegeben wurde
    // und übergebe das newTodo
    onAddTodo(newTodo); // => addTodo() Funktion in der App.js

    form.reset();
    form.title.focus();
  }

  // 2. onSubmit Handler => handleSubmit(event)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <strong>Add a new todo</strong>
      </label>
      <br />
      <input type="text" name="title" id="title" />
      <button>Add Todo</button>
    </form>
  );
}

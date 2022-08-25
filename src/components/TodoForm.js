export default function TodoForm({ countTodos, onAddTodo }) {
  function handleSubmit(event) {
    // Formular nicht ins Nirvana schicken
    event.preventDefault();

    const form = event.target;
    const inputValue = form.title.value;
    // "New Todo" => { id: 1234, title: "New Todo"}

    const newTodo = { id: countTodos + 1, title: inputValue };

    onAddTodo(newTodo);

    form.reset();
    form.title.focus();
  }

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

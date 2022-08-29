export default function TodoItem({ id, title, onRemoveItem }) {
  return (
    <li>
      <label>
        <input className="Todo__input" type="checkbox" /> {title}
      </label>
      <button onClick={() => onRemoveItem(id)}>Remove item</button>
    </li>
  );
}

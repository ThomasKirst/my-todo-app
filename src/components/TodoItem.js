export default function TodoItem({ title }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {title}
      </label>
    </li>
  );
}

import { useState } from 'react';

import './TodoItem.css';

export default function TodoItem({
  id,
  title,
  isChecked,
  onRemoveItem,
  onToggleItem,
}) {
  return (
    <li>
      <label className={isChecked ? 'strike-through' : ''}>
        <input
          className="Todo__input"
          onChange={() => onToggleItem(id)}
          type="checkbox"
          checked={isChecked}
        />{' '}
        {title}
      </label>
      <button onClick={() => onRemoveItem(id)}>Remove item</button>
    </li>
  );
}

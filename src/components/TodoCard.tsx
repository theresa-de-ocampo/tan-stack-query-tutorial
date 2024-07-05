import { useState } from "react";
import { Todo } from "../entities/Todo";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  return (
    <div>
      <input
        id={todo.title}
        type="checkbox"
        name={todo.title}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor={todo.title}>{todo.title}</label>
    </div>
  );
}

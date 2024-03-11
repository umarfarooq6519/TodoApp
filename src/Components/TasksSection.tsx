import { useState } from "react";
import { Todo } from "../App";

interface Props {
  tasks_div: string;
  subheading: string;
  ul_styling: string;
  li_styling: string;
  task_styling: string;
  todos: Todo[]; // Pass down todos state
  handleSubmit: (text: string) => void; // Pass down handleSubmit function
  ToggleCompleted: (id: number) => void; // Pass down ToggleCompleted function
  deleteTodo: (id: number) => void; // Pass down deleteTodo function
  ToggleImportant: (id: number) => void; // Pass down deleteTodo function
}

export default function TasksSection(props: Props) {
  const [showTasks, setTasks] = useState(true);
  const caretIcon = showTasks ? (
    <i className="fa-solid fa-caret-down fa-sm"></i>
  ) : (
    <i className="fa-solid fa-caret-right fa-sm"></i>
  );

  const TodosList = props.todos.filter(
    (todo) => !todo.completed && !todo.important
  );

  return (
    <div className={props.tasks_div}>
      <span className="flex items-center justify-between px-0.5">
        <h2 className={props.subheading}>Tasks</h2>
        <button
          type="button"
          className={`flex items-center gap-1`}
          onClick={() => setTasks(!showTasks)}
        >
          {caretIcon}
          <p className="text-sm">{showTasks ? `hide` : `show`}</p>
        </button>
      </span>

      <ul className={`${props.ul_styling} ${showTasks ? `block` : `hidden`}`}>
        {TodosList.map((todo) => (
          <li key={todo.id} className={`${props.li_styling}`}>
            <span
              onClick={() => props.ToggleCompleted(todo.id)}
              className={props.task_styling}
            >
              {todo.text}
            </span>
            <span className="flex items-center gap-4 pl-1">
              <i
                className="fa-regular fa-bookmark"
                onClick={() => props.ToggleImportant(todo.id)}
              ></i>
              <i
                className="fa-regular fa-trash-alt"
                onClick={() => props.deleteTodo(todo.id)}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

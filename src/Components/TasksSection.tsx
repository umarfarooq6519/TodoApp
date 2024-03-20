/* eslint-disable prefer-const */
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

  const checkIcon = (todo: Todo) =>
    todo.completed ? (
      <i
        className="fa-solid fa-circle-check"
        onClick={() => {
          props.ToggleCompleted(todo.id);
        }}
      ></i>
    ) : (
      <i
        className="fa-regular fa-circle-check"
        onClick={() => {
          props.ToggleCompleted(todo.id);
        }}
      ></i>
    );

  const bookmarkIcon = (todo: Todo) =>
    !todo.completed ? (
      <i
        className="fa-regular fa-bookmark"
        onClick={() => props.ToggleImportant(todo.id)}
      ></i>
    ) : null;

  const TodosList = props.todos.filter((todo) => !todo.important);

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
          <p className="text-sm">{showTasks ? `Hide` : `Show`}</p>
        </button>
      </span>

      <ul className={`${props.ul_styling} ${showTasks ? `block` : `hidden`}`}>
        {TodosList.map((todo) => (
          <li
            key={todo.id}
            className={`${props.li_styling} border-b-4 border-current`}
          >
            {checkIcon(todo)}
            <span className={`${props.task_styling} flex flex-col`}>
              <span className={`${todo.completed ? `line-through` : null}`}>
                {todo.text}
              </span>
              <span className="text-xs">{todo.time}</span>
            </span>
            <span className="flex items-center gap-4 pl-1">
              {bookmarkIcon(todo)}

              <i
                className="fa-regular fa-trash-alt text-red-600"
                onClick={() => props.deleteTodo(todo.id)}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

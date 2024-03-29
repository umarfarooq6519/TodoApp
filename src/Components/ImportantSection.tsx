import { useState, useEffect } from "react";
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
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

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
        className="fa-regular fa-circle"
        onClick={() => {
          props.ToggleCompleted(todo.id);
        }}
      ></i>
    );

  const importantTodos = props.todos.filter((todo) => todo.important);

  useEffect(() => {
    let toastTimer: ReturnType<typeof setTimeout>;

    if (showToast) {
      // Set a timer to hide the toast after a few seconds (e.g., 3 seconds)
      toastTimer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }

    return () => {
      clearTimeout(toastTimer); // Clear the timer on component unmount or when toast is hidden
    };
  }, [showToast]);

  return (
    <div className={props.tasks_div}>
      <span className="flex items-center justify-between px-0.5">
        <h2 className={props.subheading}>Important</h2>
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
        {importantTodos.map((todo) => (
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
              <i
                className="fa-solid fa-bookmark"
                onClick={() => props.ToggleImportant(todo.id)}
              ></i>
              <i
                className="fa-regular fa-trash-alt text-red-600"
                onClick={() => {
                  props.deleteTodo(todo.id);
                  setShowToast(true); // Show the toast when a task is deleted
                }}
              ></i>
            </span>
          </li>
        ))}
        {showToast && (
          <div className="toast toast-start">
            <div
              className="alert alert-info border-0 
          px-2 py-1 rounded-xl bg-red-500"
            >
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-xmark"></i> Task Removed
              </span>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

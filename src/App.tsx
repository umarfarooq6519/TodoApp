//  importing components
import { useState } from "react";
import CompletedSection from "./Components/CompletedSection";
import ImportantSection from "./Components/ImportantSection";
import NewTaskSection from "./Components/NewTaskSection";
import TasksSection from "./Components/TasksSection";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
}

export default function App(): JSX.Element {
  //  variables
  const heading = "text-5xl font-[anton] drop-shadow-lg";
  const subheading = "text-xl font-[anton] drop-shadow";
  const tasks_div = "tasks flex flex-col gap-2 w-full text-justify";
  const li_styling =
    "flex items-center justify-between shadow gap-2 w-full px-3 py-2 rounded-lg bg-[#fff7]";
  const ul_styling = "list flex flex-col gap-1 font-light whitespace-nowrap";
  const task_styling = "overflow-x-auto no-scrollbar w-full";

  // Managing Todos
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now(),
      text: "This is a sample Todo Task. Swipe this todo to see the rest of it. Pretty Cool Right?",
      completed: false,
      important: false,
    },
  ]); //state for storing todo list

  const handleSubmit = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
      important: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const ToggleCompleted = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const ToggleImportant = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              important: !todo.important,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //  Todo App
  return (
    <section className="App h-screen flex items-center justify-center text-gray-800">
      <div className="container p-4 h-full max-w-xl w-full flex flex-col gap-4 items-center justify-center">
        <div className="header flex flex-col gap-1 text-center">
          <h1 className={heading}>Todo App</h1>
          <p>0/2 Tasks Completed</p>
        </div>

        <ImportantSection
          tasks_div={tasks_div}
          subheading={subheading}
          ul_styling={ul_styling}
          li_styling={li_styling}
          task_styling={task_styling}
          todos={todos} // Pass down todos state
          handleSubmit={handleSubmit} // Pass down handleSubmit function
          ToggleCompleted={ToggleCompleted} // Pass down ToggleCompleted function
          deleteTodo={deleteTodo} // Pass down deleteTodo function
          ToggleImportant={ToggleImportant}

        />

        <TasksSection
          tasks_div={tasks_div}
          subheading={subheading}
          ul_styling={ul_styling}
          li_styling={li_styling}
          task_styling={task_styling}
          todos={todos} // Pass down todos state
          handleSubmit={handleSubmit} // Pass down handleSubmit function
          ToggleCompleted={ToggleCompleted} // Pass down ToggleCompleted function
          deleteTodo={deleteTodo} // Pass down deleteTodo function
          ToggleImportant={ToggleImportant}
        />

        <CompletedSection
          tasks_div={tasks_div}
          subheading={subheading}
          ul_styling={ul_styling}
          li_styling={li_styling}
          task_styling={task_styling}
          todos={todos} // Pass down todos state
          handleSubmit={handleSubmit} // Pass down handleSubmit function
          ToggleCompleted={ToggleCompleted} // Pass down ToggleCompleted function
          deleteTodo={deleteTodo} // Pass down deleteTodo function
        />

        <NewTaskSection
          onSubmit={handleSubmit}
          ul_styling={ul_styling}
          li_styling={li_styling}
        />
      </div>
    </section>
  );
}

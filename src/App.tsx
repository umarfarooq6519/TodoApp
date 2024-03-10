import CompletedSection from "./Components/CompletedSection";
import ImportantSection from "./Components/ImportantSection";
import NewTaskSection from "./Components/NewTaskSection";
import TasksSection from "./Components/TasksSection";

export default function App() {
  const heading = "text-5xl font-[anton] drop-shadow-lg";
  const subheading = "text-xl font-[anton] drop-shadow";
  const tasks_div = "tasks flex flex-col gap-2 w-full text-justify";
  const li_styling =
    "flex items-center justify-between shadow gap-2 w-full px-3 py-2 rounded-lg bg-[#fff7]";
  const ul_styling = "list flex flex-col gap-1 font-light whitespace-nowrap";
  const task_styling = "overflow-x-auto no-scrollbar w-full";

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
        />

        <TasksSection
          tasks_div={tasks_div}
          subheading={subheading}
          ul_styling={ul_styling}
          li_styling={li_styling}
          task_styling={task_styling}
        />

        <CompletedSection
          tasks_div={tasks_div}
          subheading={subheading}
          ul_styling={ul_styling}
        />

        <NewTaskSection ul_styling={ul_styling} li_styling={li_styling} />
      </div>
    </section>
  );
}

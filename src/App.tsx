export default function App() {
  const heading = "text-5xl font-[anton]";
  const subheading = "text-xl font-[anton]";
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

        <div className={tasks_div}>
          <h2 className={subheading}>Important</h2>

          <ul className={ul_styling}>
            <li className={li_styling}>
              <i className="fa-regular fa-circle-check"></i>
              <span className={task_styling}>This is my first task.</span>
              <i className="fa-regular fa-bookmark"></i>
            </li>

            <li className={li_styling}>
              <i className="fa-regular fa-circle-check"></i>
              <span className={task_styling}>
                This is another task. Try scrolling this section to see the rest
                of the sentence.
              </span>
              <i className="fa-regular fa-bookmark"></i>
            </li>
          </ul>
        </div>

        <div className={tasks_div}>
          <h2 className={subheading}>Tasks</h2>

          <ul className={ul_styling}>
            <li className={li_styling}>
              <i className="fa-regular fa-circle-check"></i>
              <span className={task_styling}>This is my second task.</span>
              <i className="fa-regular fa-bookmark"></i>
            </li>

            <li className={li_styling}>
              <i className="fa-regular fa-circle-check"></i>
              <span className={task_styling}>
                This is another task due. Try scrolling this section to see the
                rest of the sentence.
              </span>
              <i className="fa-regular fa-bookmark"></i>
            </li>
          </ul>
        </div>

        <div className={`${ul_styling} w-full pt-4`}>
          <span className={`${li_styling} shadow-lg`}>
            <i className="fa-solid fa-caret-right"></i>
            <input
              type="text"
              className={`bg-transparent focus:outline-none font-normal w-full`}
            />
            <span className="flex items-center gap-1 font-[anton] text-lg">
              <i className="fa-solid fa-plus"></i>
              Add
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

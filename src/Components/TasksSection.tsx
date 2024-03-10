import { useState } from "react";
interface Props {
  tasks_div: string;
  subheading: string;
  ul_styling: string;
  li_styling: string;
  task_styling: string;
}

export default function TasksSection(props: Props) {
  const [showTasks, setTasks] = useState(true);
  const caretIcon = showTasks ? (
    <i className="fa-solid fa-caret-down fa-sm"></i>
  ) : (
    <i className="fa-solid fa-caret-right fa-sm"></i>
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
        <li className={`${props.li_styling}`}>
          <i className="fa-regular fa-circle-check"></i>
          <span className={props.task_styling}>This is my second task.</span>
          <i className="fa-regular fa-bookmark"></i>
        </li>

        <li className={props.li_styling}>
          <i className="fa-regular fa-circle-check"></i>
          <span className={props.task_styling}>
            This is another task due. Try scrolling this section to see the rest
            of the sentence.
          </span>
          <i className="fa-regular fa-bookmark"></i>
        </li>
      </ul>
    </div>
  );
}

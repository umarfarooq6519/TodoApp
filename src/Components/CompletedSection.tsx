import { useState } from "react";

interface Props {
  tasks_div: string;
  subheading: string;
  ul_styling: string;
  li_styling: string;
  task_styling: string;
}

export default function CompletedSection(props: Props) {
  const [showCompleted, setCompleted] = useState(true);
  const caretIcon = showCompleted ? (
    <i className="fa-solid fa-caret-down fa-sm"></i>
  ) : (
    <i className="fa-solid fa-caret-right fa-sm"></i>
  );

  return (
    <div className={`${props.tasks_div}`}>
      <span className="flex items-center justify-between px-0.5">
        <h2 className={props.subheading}>Completed</h2>
        <button
          type="button"
          className={`flex items-center gap-1`}
          onClick={() => setCompleted(!showCompleted)}
        >
          {caretIcon}
          <p className="text-sm">{showCompleted ? `hide` : `show`}</p>
        </button>
      </span>

      <ul
        className={`${props.ul_styling}  ${showCompleted ? `block` : `hidden`}`}
      >
        <li className={`${props.li_styling}`}>
          <span className={`${props.task_styling} line-through`}>
            This is my second task.
          </span>
          <i className="fa-regular fa-bookmark"></i>
        </li>
      </ul>
    </div>
  );
}

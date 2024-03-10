interface Props {
  tasks_div: string;
  subheading: string;
  ul_styling: string;
  li_styling: string;
  task_styling: string;
}

export default function ImportantSection(props: Props) {
  return (
    <div className={props.tasks_div}>
      <span className="flex items-center justify-between px-0.5">
        <h2 className={props.subheading}>Important</h2>
        <span className="flex items-center gap-1">
          <i className="fa-solid fa-caret-down fa-sm"></i>
          <p className="text-sm">Hide</p>
        </span>
      </span>

      <ul className={props.ul_styling}>
        <li className={props.li_styling}>
          <i className="fa-regular fa-circle-check"></i>
          <span className={props.task_styling}>This is my first task.</span>
          <i className="fa-regular fa-bookmark"></i>
        </li>

        <li className={props.li_styling}>
          <i className="fa-regular fa-circle-check"></i>
          <span className={props.task_styling}>
            This is another task. Try scrolling this section to see the rest of
            the sentence.
          </span>
          <i className="fa-regular fa-bookmark"></i>
        </li>
      </ul>
    </div>
  );
}

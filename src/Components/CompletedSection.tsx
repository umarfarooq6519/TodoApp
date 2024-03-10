interface Props {
  tasks_div: string;
  subheading: string;
  ul_styling: string;
}

export default function CompletedSection(props: Props) {
  return (
    <div className={props.tasks_div}>
      <span className="flex items-center justify-between px-0.5">
        <h2 className={props.subheading}>Completed</h2>
        <span className="flex items-center gap-1">
          <i className="fa-solid fa-caret-down fa-sm"></i>
          <p className="text-sm">Show</p>
        </span>
      </span>

      <ul className={props.ul_styling}></ul>
    </div>
  );
}

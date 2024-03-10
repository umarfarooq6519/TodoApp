interface Props {
  ul_styling: string;
  li_styling: string;
}

export default function NewTaskSection(props: Props) {
  return (
    <div className={`${props.ul_styling} w-full pt-2`}>
      <span className={`${props.li_styling} shadow-lg`}>
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
  );
}

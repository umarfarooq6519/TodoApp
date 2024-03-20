import { useState } from "react";

interface Props {
  ul_styling: string;
  li_styling: string;
  onSubmit: (text: string) => void;
}

export default function NewTaskSection(props: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    props.onSubmit(inputValue);
    setInputValue("");
    console.log("New Task Added");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${props.ul_styling} w-full pt-4 items-center`}>
      <span className="bg-current w-full rounded-lg pb-1">
        <form onSubmit={handleSubmit} className={props.li_styling}>
          <i className="fa-solid fa-caret-right"></i>
          <input
            type="text"
            value={inputValue} // Add value attribute
            onChange={handleChange} // Add onChange attribute
            className={`border-0 p-0 w-full py-1.5 bg-transparent font-normal focus:ring-0`}
            placeholder="Write a new task"
          />
          <button type="submit">
            <i className="fa-solid fa-plus fa-lg"></i>
          </button>
        </form>
      </span>
    </div>
  );
}

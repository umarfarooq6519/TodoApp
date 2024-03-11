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

  return (
    <div className={`${props.ul_styling} w-full pt-2`}>
      <form onSubmit={handleSubmit} className={`${props.li_styling} shadow-lg`}>
        <i className="fa-solid fa-caret-right"></i>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`bg-transparent focus:outline-none font-normal w-full`}
        />
        <button type="submit">
          <span className="flex items-center gap-1 font-[anton] text-lg">
            <i className="fa-solid fa-plus"></i>
            Add
          </span>
        </button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";

interface Props {
  ul_styling: string;
  li_styling: string;
  onSubmit: (text: string) => void;
}

export default function NewTaskSection(props: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    props.onSubmit(inputValue);
    setInputValue("");
    setShowToast(true); // Show the toast when a new task is added
    console.log("New Task Added");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    let toastTimer: ReturnType<typeof setTimeout>;

    if (showToast) {
      // Set a timer to hide the toast after a few seconds (e.g., 3 seconds)
      toastTimer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }

    return () => {
      clearTimeout(toastTimer); // Clear the timer on component unmount or when toast is hidden
    };
  }, [showToast]);

  return (
    <div className={`${props.ul_styling} w-full pt-4 items-center `}>
      <form
        onSubmit={handleSubmit}
        className={`${props.li_styling} !border-none !bg-gray-700 text-gray-100 shadow-lg`}
      >
        <i className="fa-solid fa-caret-right"></i>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`border-0 p-0 w-full placeholder-gray-300 py-1.5 bg-transparent font-medium focus:ring-0`}
          placeholder="Write a new task"
        />
        <button type="submit">
          <i className="fa-solid fa-plus fa-lg"></i>
        </button>
        {showToast && (
          <div className="toast">
            <div
              className="alert alert-info border-0
          px-2 py-1 rounded-xl bg-lime-500"
            >
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i> Task Added
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

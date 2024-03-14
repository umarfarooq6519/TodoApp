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
    <div className={`${props.ul_styling} w-full items-center`}>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        type="button"
        className="rounded-xl px-7 py-1 bg-gray-700"
      >
        <i className="fa-solid fa-plus text-[#F6E8F2]"></i>
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#F5E8F3] rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {/* Static modal */}
              </h3>
              <button type="button" data-modal-hide="static-modal">
                <i className="fa-solid fa-xmark fa-lg"></i>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="" className="flex flex-col items-start px-10">
              <input
                type="text"
                id="task"
                placeholder="Add new task"
                className="px-2 py-1 border-0 bg-transparent border-b border-b-gray-400 focus:ring-0 focus:border-b-gray-400"
              />
            </form>
            {/* <!-- Modal footer --> */}
            <div className="flex font-[anton] text-lg items-center justify-center p-4">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="border"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

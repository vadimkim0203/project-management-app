import Input from "./Input";
import { useState, useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      descripttion: enteredDescription,
      dueDate: enteredDueDate,
    });

    ///here should be the validation logic
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 border-none bg-none rounded-lg">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50 rounded-lg"
          >
            Save
          </button>
        </li>
      </menu>
      <div className="">
        <Input type="text" label="Title" ref={title} />
        {/* below it is also possible to use textarea prop as textarea=true, but it is a redundant way */}
        <Input label="Description" textarea ref={description} />
        <Input label="Due date" type="date" ref={dueDate} />
      </div>
    </div>
  );
}

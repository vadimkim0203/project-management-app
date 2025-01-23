import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      descripttion: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... Looks like you you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure to fill all the input fields properly</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950 border-none bg-none rounded-lg" onClick={onCancel}>
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
    </>
  );
}

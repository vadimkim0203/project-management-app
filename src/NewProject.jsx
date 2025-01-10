import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 border-none bg-none rounded-lg">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50 rounded-lg">Save</button>
        </li>
      </menu>
      <Input label="Title"/>
      {/* below it is also possible to use textarea prop as textarea=true, but it is a redundant way */}
      <Input label="Description" textarea/>
      <Input label="Due date"/>
    </div>
  );
}

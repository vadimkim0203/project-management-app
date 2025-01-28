export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    month: short,
    day: numeric,
    year: numeric,
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onDelete={handleDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          Project description
        </p>
      </header>
      TASKS
    </div>
  );
}

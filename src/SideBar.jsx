import React, { useState, useRef } from "react";
import Button from "./Button.jsx";
import { list } from "postcss";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  // const [projects, setProjects] = useState([]);

  // function handleAddProject
  return (
    <aside className="w-1/3 px-8 py-16 flex flex-col items-center gap-8 rounded-r-xl border-gray-800 bg-stone-900 mt-10 ml-[-2] text-stone-50 md:w-[18rem]">
      <h2 className="mt-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject} buttonText="+ Add Project" />
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"

          if (project.id === selectedProjectId){
            cssClasses = ""
          }
          return (
            <li key={project.id}>
              <button
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                onClick={onSelectProject}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

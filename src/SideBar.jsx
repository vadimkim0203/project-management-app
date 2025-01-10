import React, { useState, useRef } from "react";

export default function SideBar({ addedProject }) {
  const addProjectPageRef = useRef();

  function handleAddProject() {
    addProjectPageRef.current.open();
  }
  return (
    <aside className="w-1/3 px-8 py-16 flex flex-col items-center gap-8 rounded-r-xl border-gray-800 bg-stone-900 mt-10 ml-[-2] text-stone-50 md:w-[18rem]">
      <h1 className="mt-8 font-semibold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <button
          className="text-xs md:text-base text-stone-400 rounded-md bg-stone-700 px-4 py-2 hover:bg-stone-600 hover:text-stone-100"
          onClick={handleAddProject}
        >
          + Add Project
        </button>
      </div>
      <ul>
        <h2>{addedProject}</h2>
      </ul>
    </aside>
  );
}

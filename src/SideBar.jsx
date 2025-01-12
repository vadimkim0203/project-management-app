import React, { useState, useRef } from "react";
import Button from "./Button.jsx";

export default function SideBar({ addedProject, onStartAddProject }) {
  
  return (
    <aside className="w-1/3 px-8 py-16 flex flex-col items-center gap-8 rounded-r-xl border-gray-800 bg-stone-900 mt-10 ml-[-2] text-stone-50 md:w-[18rem]">
      <h1 className="mt-8 font-semibold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject} buttonText="+ Add Project"/>
      </div>
      <ul>
        <h2>{addedProject}</h2>
      </ul>
    </aside>
  );
}

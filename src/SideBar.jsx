export default function SideBar({addedProject}) {
  return (
    <div className="w-1/5 h-screen flex flex-col items-center gap-8 border-5 rounded-xl border-gray-800 bg-black mt-10 ml-[-2]">
      <h1 className='text-white text-2xl mt-8 font-semibold'>YOUR PROJECTS</h1>
      <button className="text-gray-400 rounded-lg bg-gray-700 px-4 py-2">+ Add Project</button>
      <div>
        <h2>{addedProject}</h2>
      </div>
    </div>
  );
}
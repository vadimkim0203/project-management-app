import React from 'react';
import SideBar from './SideBar';
import NewProject from './NewProject';



function App() {
  return (
    <main className="gap-8 px-2 py-4 text-xs md: text-s h-screen my-8 flex flex-row">
      <SideBar />
      <NewProject />
      
    </main>
  );
}

export default App;

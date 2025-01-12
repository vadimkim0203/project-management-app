import React, { useState } from "react";
import SideBar from "./SideBar.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // function below is updating the rendered component based on the previous state. Initially selectedProjectId is undefined because we havent' clicked the button, but once the button is clicked the state is converting to null, which is the newly made project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="gap-8 px-2 py-4 text-xs md: text-s h-screen my-8 flex flex-row">
      {/* once the onStartAddProject prop is passed to the components below, we have to destructure this prop inside components */}
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

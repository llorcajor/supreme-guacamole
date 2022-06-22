import { useState } from "react";
import { Tab } from "@headlessui/react";
import ProjectCampaign from "./ProjectCampaign";
import ProjectComments from "./ProjectComments";
import ProjectQuestions from "./ProjectQuestions";
import ProjectTeam from "./ProjectTeam";
import ProjectUpdates from "./ProjectUpdates";

const ProjectNavbar = () => {
  const [state, setState] = useState(0);
  const handleState = (id: number) => {
    setState(id);
  };

  return (
    <>
      <div className="w-full px-2 py-16 sm:px-0 ">
        <Tab.Group>
          <Tab.List className="flex space-x-1 p-1 border-2 ">
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full py-2.5 text-sm font-medium focus:underline"
                  : "hover:bg-white/[0.12] w-full py-2.5 text-sm font-medium"
              }
            >
              Inicio
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full py-2.5 text-sm font-medium focus:underline"
                  : "hover:bg-white/[0.12] w-full py-2.5 text-sm font-medium"
              }
            >
              Preguntas frecuentes
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full py-2.5 text-sm font-medium focus:underline"
                  : "hover:bg-white/[0.12] w-full py-2.5 text-sm font-medium"
              }
            >
              Actualizaciones
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full py-2.5 text-sm font-medium focus:underline"
                  : "hover:bg-white/[0.12] w-full py-2.5 text-sm font-medium"
              }
            >
              Comentarios
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full py-2.5 text-sm font-medium focus:underline"
                  : "hover:bg-white/[0.12] w-full py-2.5 text-sm font-medium"
              }
            >
              Equipo
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <ProjectCampaign />
            </Tab.Panel>
            <Tab.Panel
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <ProjectQuestions />
            </Tab.Panel>
            <Tab.Panel
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <ProjectUpdates />
            </Tab.Panel>
            <Tab.Panel
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <ProjectQuestions />
            </Tab.Panel>
            <Tab.Panel
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              <ProjectTeam />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default ProjectNavbar;

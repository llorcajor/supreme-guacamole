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
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900 p-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-white shadow w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              Inicio
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-white shadow w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              Preguntas frecuentes
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-white shadow w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              Actualizaciones
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-white shadow w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              }
            >
              Comentarios
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-white shadow w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
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

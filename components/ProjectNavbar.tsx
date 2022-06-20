import { useState } from "react";
import ProjectFeed from "./ProjectFeed";

const ProjectNavbar = () => {
  const [state, setState] = useState(0);
  const handleState = (id: number) => {
    setState(id);
  };
  return (
    <>
      <nav className="w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                onClick={() => setState(0)}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => setState(1)}
              >
                Preguntas frecuentes
              </button>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => setState(2)}
              >
                Actualizaciones
              </button>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => setState(3)}
              >
                Comentarios
              </button>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setState(4)}
              >
                Equipo
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <ProjectFeed state={state} />
    </>
  );
};

export default ProjectNavbar;

import Image from "next/image";
import ProjectRatings from "./ProjectRatings";

const ProjectBanner = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-lg">Name of the Project</h1>
      <p className="mt-3 font-medium text-sm">Excerpt</p>
      <div className="flex mt-4 max-w-3xl items-center justify-center">
        <img src="https://rb.gy/ulxxee" />
        <div className="flex flex-col p-6 bg-slate-600">
          <h3 className="text-sm">Long description of the project</h3>
          <ProjectRatings />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Unirme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;

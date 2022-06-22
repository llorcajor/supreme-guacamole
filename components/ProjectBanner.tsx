import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { Project } from "../typings";
import ProjectRatings from "./ProjectRatings";
interface Props {
  project: Project | DocumentData;
}

const ProjectBanner = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-lg">{project.title || project.name}</h1>
      <p className="mt-3 font-medium text-sm">Excerpt</p>
      <div className="flex mt-4 max-w-3xl items-center justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            project.backdrop_path || project.poster_path
          }`}
        />
        <div className="flex flex-col p-6 bg-slate-600">
          <h3 className="text-sm">{project.overview}</h3>
          <ProjectRatings rating={project.vote_average} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Unirme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;

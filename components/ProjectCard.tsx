import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../typings";

interface Props {
  project: Project | DocumentData;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className=" flex flex-col items-start min-w-[200px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105 mt-5">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            project.backdrop_path || project.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          width={1000}
          height={600}
        />
        <h1 className="text-xl font-semibold pt-2">{project.name}</h1>
        <p className="text-sm pt-4 truncate w-full">{project.overview}</p>
        <p className="text-xs pt-4">Por Jordi</p>
      </div>
    </Link>
  );
};

export default ProjectCard;

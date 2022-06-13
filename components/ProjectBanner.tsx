import Image from "next/image";
import ProjectRatings from "./ProjectRatings";

const ProjectBanner = () => {
  return (
    <div>
      <h1>Name of the Project</h1>
      <p>Excerpt</p>
      <div className="flex">
        <img src="https://commons.wikimedia.org/wiki/Commons:Quality_images#/media/File:Gull_portrait_ca_usa.jpg" />
        <div className="flex flex-col">
          <h3>Long description of the project</h3>
          <ProjectRatings />
          <button>Unirme</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;

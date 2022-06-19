import ProjectNavbar from "./ProjectNavbar";

const ProjectFeed = () => {
  return (
    <div className="bg-slate-700 mt-10 flex flex-col max-w-6xl items-center justify-center mx-auto">
      <ProjectNavbar />
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Title
      </h1>
    </div>
  );
};

export default ProjectFeed;

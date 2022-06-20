import ProjectCampaign from "./ProjectCampaign";
import ProjectQuestions from "./ProjectQuestions";

interface Props {
  state: number;
}
const ProjectFeed = ({ state }: Props) => {
  return (
    <div className="bg-slate-700 mt-10 flex flex-col max-w-6xl items-center justify-center mx-auto">
      {state == 0 && <ProjectCampaign />}

      {state == 1 && <ProjectQuestions />}

      {state == 2 && (
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Actualizaciones
          </h1>
          <p>Some history goes here</p>
        </div>
      )}

      {state == 3 && (
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Comentarios
          </h1>
          <p>Some history goes here</p>
        </div>
      )}

      {state == 4 && (
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Equipo
          </h1>
          <p>Some history goes here</p>
        </div>
      )}
    </div>
  );
};

export default ProjectFeed;

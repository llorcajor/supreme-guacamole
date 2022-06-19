import Head from "next/head";
import Header from "../../components/Header";
import ProjectBanner from "../../components/ProjectBanner";
import ProjectFeed from "../../components/ProjectFeed";

const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>MBIP - Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProjectBanner />
      <ProjectFeed />
    </div>
  );
};

export default ProjectPage;

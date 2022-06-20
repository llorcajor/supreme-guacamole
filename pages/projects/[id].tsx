import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectBanner from "../../components/ProjectBanner";

import ProjectNavbar from "../../components/ProjectNavbar";

const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>MBIP - Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProjectBanner />
      <ProjectNavbar />
      <Footer />
    </div>
  );
};

export default ProjectPage;

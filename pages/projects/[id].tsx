import { DocumentData } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectBanner from "../../components/ProjectBanner";

import ProjectNavbar from "../../components/ProjectNavbar";
import { Project } from "../../typings";
interface Props {
  project: Project | DocumentData;
}
const ProjectPage = ({ project }: Props) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>MBIP - Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProjectBanner project={project} />
      <ProjectNavbar />
      <Footer />
    </div>
  );
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchProject = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const project = await fetchProject.json();
  return {
    props: { project },
  };
};

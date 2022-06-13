import type { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MBIP - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-around bg-[gray] p-10 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
    </div>
  );
};

export default Home;

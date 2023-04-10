import React from "react";
import Header from "../layout/UniversalHeader/header";
import Heading from "../components/ProjectComponents/ProjectHeading/Heading";
import LiveProjects from "../components/ProjectComponents/LiveProjects/LiveProjects";
import UpComingProjects from "../components/ProjectComponents/UpcomingProjects/Upcoming";
import CompletedProjects from "../components/ProjectComponents/CompletedProjects/CompletedProjects";
import GetReady from "../components/HomeComponents/GetReadySection/GetReady";
import Footer from "../layout/Footer/Footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-page page">
        <Heading />
        {/* <LiveProjects /> */}
        <UpComingProjects />
        <CompletedProjects />
        <GetReady />
      </div>
      <Footer />
    </div>
    <></>
  );
};

export default Projects;

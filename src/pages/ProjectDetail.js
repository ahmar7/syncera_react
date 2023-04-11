import React from "react";
import Header from "../layout/UniversalHeader/header";
import Footer from "../layout/Footer/Footer";
import PageNavigation from "../components/ProjectDetails/PageNavigation/PageNavigation";
import Banner from "../components/ProjectDetails/ProjectBanner/Banner";
import Title from "../components/ProjectDetails/ProjectTitle/Title";
import Description from "../components/ProjectDetails/ProjectDescription/Description";
import ProjectSidebar from "../components/ProjectDetails/ProjectSidebar/Sidebar";
import "../components/ProjectDetails/Details.scss"; 
const ProjectDetail = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="mb-16 md:mb-36 top-margin">
        <PageNavigation projectTitle={"Reign of Terror"} />
        <div className="animate-showUp">
          <div className="flex flex-col gap-14">
            <Banner />
            <div className="flex flex-col-reverse gap-14 lg:grid lg:grid-cols-3 w-full max-w-[1200px] mx-auto">
              <div className="w-full lg:col-span-2 px-5 lg:pl-5 lg:pr-0 xl:px-0">
                <div className="desktp">
                  <Title />
                </div>
                <Description />
              </div>
              <ProjectSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;

import React from "react";
import Nok from "../../../assets/img/nok.svg";
import "./Projects.css";
import UpComingProjects from "./UpcomingProjects/Upcoming";
import CompletedProjects from "./CompletedProjects/CompletedProjects";
const Projects = () => {
  return (
    <div className="main-projects">
      <div className="dark-bg pb-5">
        <div className="max-width">
          <div className="relative w-64 md:w-64 lg:w-1/3 xl:w-96 mx-auto text-center font-bold md:text-lg lg:text-xl">
            <div className="inline-block top-0 left-0 right-0 uppercase bg-gamefiDark w-full mx-auto text-center clipped-b p-3 font-bold md:text-lg lg:text-xl xl:text-3xl">
              All Projects
            </div>
            <div className="absolute -bottom-5 left-0 right-0">
              <span className="firstspan">
                <span className="secondspan">
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27118%27%20height=%2718%27/%3e"
                    className="thirdImg"
                  />
                </span>
                <img
                  alt=""
                  src={Nok}
                  decoding="async"
                  data-nimg="intrinsic"
                  className="o-img"
                />
              </span>
            </div>
          </div>
          <UpComingProjects />
          <CompletedProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;

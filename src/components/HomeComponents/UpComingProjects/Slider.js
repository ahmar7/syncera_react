import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import zkSyncIcon from "../../../assets/img/zkSync-icon.png";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="coming-projects">
        <div className="projects-slider">
          <div className="projects-slider__info">
            <h2 className="title secondary-glow">Syncera Projects</h2>

            <a className="round-button light large btn btn-main nop" href="#">
              All Projects
            </a>
          </div>

          <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events projects-slider-slides">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ marginRight: "32px" }}
                  >
                    <a className="project-slide" href="#">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-completed project-tag--status">
                            <span>Completed</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={zkSyncIcon}
                              className="project-tag__image"
                            />&nbsp;
                            <span>zkSync</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>ETH</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">
                          Syncera Seed
                        </h3>
                      </header>
                      <div
                        className="project-slide__image"
                        style={{ backgroundColor: "rgb(255, 248, 25)" }}
                      >
                        <img
                          src="https://storage.googleapis.com/firestarter-web-assets/projects/kNclf0AsrUW7vCXYvsCt/logo/CitizemConflict_logo.png"
                          width={140}
                          height={140}
                          className="project-slide__logo rounded-circle"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={2}
                    style={{ marginRight: "32px" }}
                  >
                    <a className="project-slide" href="#">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-tag--status">
                            <span>Coming Soon</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={zkSyncIcon}
                              className="project-tag__image"
                            />&nbsp;
                            <span>zkSync</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>ETH</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">Syncera Private</h3>
                      </header>
                      <div
                        className="project-slide__image"
                        style={{ backgroundColor: "rgb(58, 181, 253)" }}
                      >
                        <img
                          src="https://storage.googleapis.com/firestarter-web-assets/projects/I1sKPnWlG7vbwJ8fvr7t/logo/witly_logo.png"
                          width={140}
                          height={140}
                          className="project-slide__logo rounded-circle"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={3}
                    style={{ marginRight: "32px" }}
                  >
                    <a className="project-slide" href="#">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-tag--status">
                            <span>Coming Soon</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={zkSyncIcon}
                              className="project-tag__image"
                            />
                            <span>zkSync</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>ETH</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">To Be Revealed..</h3>
                      </header>
                      <div
                        className="project-slide__image"
                        style={{ backgroundColor: "rgb(0, 4, 19)" }}
                      >
                        <img
                          src={zkSyncIcon}
                          width={140}
                          height={140}
                          className="project-slide__logo rounded-circle"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;

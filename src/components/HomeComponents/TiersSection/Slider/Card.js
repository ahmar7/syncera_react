import React ,{useState}from "react";
import { Carousel } from "3d-react-carousal";
import Card1 from "../../../../assets/img/card.svg"; 
import "./Card.css";
const Card = () => {
     
  let slides = [
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 1
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          MINNOW
        </div>
        <div data-v-18811a9f className="sub">
          The Petite Predator
        </div>
        <div data-v-18811a9f className="amount">
          <span data-v-18811a9f className="num">
            100
          </span>
          <span data-v-18811a9f className="ticker ml-1">
            xSERA
          </span>
        </div>
        <div data-v-18811a9f className="extra">
          1 Lottery Ticket
        </div>
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 2
        </div>
        <img data-v-18811a9f src={ Card1 } />
        <div data-v-18811a9f className="name">
          GOLDFISH
        </div>
        <div data-v-18811a9f className="sub">
          The Gilded Puppy
        </div>
        <div data-v-18811a9f className="amount">
          <span data-v-18811a9f className="num">
            1000
          </span>
          <span data-v-18811a9f className="ticker ml-1">
            xSERA
          </span>
        </div>
        <div data-v-18811a9f className="extra">
          12 Lottery Tickets
        </div>
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 3
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          BARRACUDA
        </div>
        <div data-v-18811a9f className="sub">
          The Jaws of Death
        </div>
        <div data-v-18811a9f className="amount">
          <span data-v-18811a9f className="num">
            5000
          </span>
          <span data-v-18811a9f className="ticker ml-1">
            xSLIM
          </span>
        </div>
        <div data-v-18811a9f className="extra">
          100 Lottery Tickets
        </div>
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 4
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          SWORDFISH
        </div>
        <div data-v-18811a9f className="sub">
          The Finned Fury
        </div>
        <div data-v-18811a9f className="amount">
          <span data-v-18811a9f className="num">
            10000
          </span>
          <span data-v-18811a9f className="ticker ml-1">
            xSERA
          </span>
        </div>
        <div data-v-18811a9f className="extra">
          Guaranteed Allocation
        </div>
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 5
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          BLUE WHALE
        </div>
        <div data-v-18811a9f className="sub">
          The Ocean Titan
        </div>
        <div data-v-18811a9f className="amount">
          <span data-v-18811a9f className="num">
            50000
          </span>
          <span data-v-18811a9f className="ticker ml-1">
            xSERA
          </span>
        </div>
        <div data-v-18811a9f className="extra">
          Guaranteed Allocation
        </div>
      </div>
    </div>
  ];
 
  let callback = (index)=> {
    console.log("callback", index);
  };
  let callback2 = (index)=> {
    console.log("callback", index);
  };
  return (
    <div>
      <Carousel
        slides={slides}
        autoplay={false}
        slideToShow={callback2}
        onSlideChange={callback} 
      />
    </div>
  );
};

export default Card;

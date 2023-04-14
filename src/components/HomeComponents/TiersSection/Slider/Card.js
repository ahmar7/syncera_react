import React ,{useState}from "react";
import { Carousel } from "3d-react-carousal";
import Card1 from "../../../../assets/img/card.png"; 
import "./Card.css";
const Card = () => {
    
    const [slideChange, setslideChange] = useState(1);
  let slides = [
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 1
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          RA
        </div>
        <div data-v-18811a9f className="sub">
          God of the Sun
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
          TIER 2
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          RA
        </div>
        <div data-v-18811a9f className="sub">
          God of the Sun
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
          TIER 3
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          RA
        </div>
        <div data-v-18811a9f className="sub">
          God of the Sun
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
          RA
        </div>
        <div data-v-18811a9f className="sub">
          God of the Sun
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
          TIER 5
        </div>
        <img data-v-18811a9f src={Card1} />
        <div data-v-18811a9f className="name">
          RA
        </div>
        <div data-v-18811a9f className="sub">
          God of the Sun
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
        goToSlide={3}
      />
    </div>
  );
};

export default Card;

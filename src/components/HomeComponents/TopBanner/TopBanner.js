import React, { useState } from "react";
import "./TopBanner.css";
const TopBanner = () => {
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <section className="top-banner">
      <div className="background">

        <div className="top-banner__shadow-top" />
        <div className="top-banner__space" />
        {/*s
        <img
          src="https://firestarter.fi/static/media/spaceman.9782e999.png"
          className="top-banner__spaceman"
          style={{ transform: "translate3d(1e-5px, -25px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-left.6452247d.png"
          className="top-banner__cards-left"
          style={{ transform: "translate3d(1e-5px, 47px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-right.37f515ba.png"
          className="top-banner__cards-right"
          style={{ transform: "translate3d(1e-5px, -37px, 1e-5px)" }}
        />
        */}
        <div className="top-banner__shadow-bottom" />
      </div>
      <div className="container">
        <div className="hero-row row">
          <div className="hero-row__main text-center">
            <h1 className="title">
              Unlock the Full Potential of <span className="secondary-glow">zkSync Era</span>
            </h1>
            <p className="subtitle"><span className="secondary-glow">Syncera</span> is the first community-driven IDO platform with all-in-one solutions for <i>a growing ecosystem.</i></p>
            <p className="sub-subtitle">IDO LAUNCHPAD | DECENTRALIZED EXCHANGE | TOKEN SWAP | FARM | AND MORE !</p>
            <div className="hero-buttons">
              <a href="#"
                type="button"
                className="btn-one"
              >
                Buy $SERA
              </a>
              <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/" target="_blank"
                className="btn-two"
              >
                WHITEPAPER
              </a>
            </div>
            <br />
            <div className="">
        <span className="below-banner__powered-by__title powered-by-size">Powered by</span>
        <div className="icons mt-3 below-banner__powered-by__icons justify-center">
          <svg width="216" height="81" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6539 13.4915L29.8378 1.71674V10.34L18.1055 18.9739L29.8378 18.982V25.2662L41.6539 13.4915Z" fill="#4E529A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00158644 13.4872L11.8145 25.2619L11.8145 16.708L23.5469 8.0047L11.8145 7.99664L11.8145 1.71246L-0.00158644 13.4872Z" fill="#8C8DFC"></path><path d="M59.2586 19.3717H50.2148V16.7746L55.3922 11.0034H50.3482V8.45069H59.1697V10.9146L53.8368 16.7968H59.2586V19.3717Z" fill="#4E529A" fill-opacity="0.9"></path><path d="M71.6009 8.45069L67.2235 13.0455L71.6898 19.3717H68.0678L65.1792 15.1986L63.957 16.486V19.3717H61.0017V3.30096H63.957V12.5128L67.7345 8.45069H71.6009Z" fill="#4E529A" fill-opacity="0.9"></path><path d="M84.4547 7.38523L81.6994 8.22872C81.5957 7.66639 81.3142 7.15586 80.855 6.69712C80.3958 6.23838 79.7217 6.00901 78.8329 6.00901C78.1071 6.00901 77.5145 6.20878 77.0553 6.60833C76.5961 6.99308 76.3664 7.45922 76.3664 8.00675C76.3664 8.96862 76.9368 9.56054 78.0774 9.78251L80.2773 10.2043C81.6697 10.4706 82.7512 11.0255 83.5215 11.869C84.2918 12.7125 84.6769 13.704 84.6769 14.8434C84.6769 16.1457 84.1584 17.2851 83.1215 18.2618C82.0993 19.2237 80.7217 19.7046 78.9885 19.7046C77.996 19.7046 77.0997 19.5566 76.2998 19.2607C75.4998 18.9647 74.8554 18.5726 74.3666 18.0842C73.8777 17.5811 73.4926 17.0558 73.2111 16.5082C72.9445 15.9459 72.7815 15.3688 72.7223 14.7769L75.5665 14.0222C75.6406 14.8656 75.9665 15.5686 76.5442 16.1309C77.1368 16.6932 77.9589 16.9744 79.0107 16.9744C79.8106 16.9744 80.4328 16.7968 80.8772 16.4416C81.3364 16.0865 81.5661 15.6203 81.5661 15.0432C81.5661 14.5845 81.3957 14.1923 81.055 13.8668C80.7291 13.5264 80.2624 13.2971 79.6551 13.1787L77.4553 12.7347C76.1813 12.4684 75.1739 11.943 74.4333 11.1587C73.6926 10.3744 73.3222 9.39776 73.3222 8.22872C73.3222 6.8377 73.8555 5.66865 74.9221 4.72158C76.0035 3.7745 77.2997 3.30096 78.8107 3.30096C79.7143 3.30096 80.5217 3.42675 81.2327 3.67832C81.9438 3.92988 82.5141 4.27024 82.9437 4.69938C83.3733 5.11373 83.7066 5.54287 83.9437 5.98681C84.1807 6.43075 84.351 6.89689 84.4547 7.38523Z" fill="#4E529A" fill-opacity="0.9"></path><path d="M89.6555 23.6779H86.5224L89.1 17.9954L84.4559 8.45069H87.7668L90.6777 14.8434L93.3664 8.45069H96.5217L89.6555 23.6779Z" fill="#4E529A" fill-opacity="0.9"></path><path d="M100.601 13.0899V19.3717H97.6454V8.45069H100.512V9.80471C100.823 9.27198 101.267 8.86503 101.845 8.58387C102.423 8.30271 103.03 8.16213 103.667 8.16213C104.956 8.16213 105.934 8.56907 106.6 9.38297C107.282 10.1821 107.622 11.2179 107.622 12.4906V19.3717H104.667V13.0011C104.667 12.35 104.497 11.8246 104.156 11.4251C103.83 11.0255 103.326 10.8258 102.645 10.8258C102.023 10.8258 101.527 11.0403 101.156 11.4695C100.786 11.8986 100.601 12.4388 100.601 13.0899Z" fill="#4E529A" fill-opacity="0.9"></path><path d="M114.866 10.848C114.081 10.848 113.422 11.1217 112.888 11.6693C112.355 12.2168 112.088 12.9641 112.088 13.9112C112.088 14.8582 112.355 15.6129 112.888 16.1753C113.436 16.7228 114.103 16.9966 114.888 16.9966C115.584 16.9966 116.14 16.819 116.555 16.4638C116.97 16.0939 117.251 15.6573 117.399 15.1542L119.999 16.0199C119.732 17.0262 119.155 17.8918 118.266 18.617C117.377 19.3421 116.251 19.7046 114.888 19.7046C113.259 19.7046 111.888 19.1571 110.777 18.062C109.681 16.9522 109.133 15.5686 109.133 13.9112C109.133 12.239 109.674 10.8554 110.755 9.76032C111.851 8.66526 113.199 8.11773 114.799 8.11773C116.192 8.11773 117.332 8.48028 118.221 9.20539C119.11 9.9157 119.68 10.7814 119.932 11.8024L117.288 12.6903C116.932 11.4621 116.125 10.848 114.866 10.848Z" fill="#4E529A" fill-opacity="0.9"></path></svg>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
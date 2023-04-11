import React from "react";
import "./BelowBanner.css";
import zkSyncIcon from "../../../assets/img/zkSync-icon.png";
import TrushIcon from "../../../assets/img/trush-icon.png";

const BelowBanner = () => {
  return (
    <section className="below-banner text-center">
      <div className="below-banner__powered-by">
        <span className="below-banner__powered-by__title">Backed by</span>
        <div className="icons mt-3 below-banner__powered-by__icons justify-centere backed-by-section">
          <img src={TrushIcon} className="partner-icon"></img>
        </div>
      </div>
      <div className="below-banner__contract">
        <span className="below-banner__contract__title">Contract</span>
        <div className="footer__token-address token-address mt-3">
          <img
            width={32}
            height={32}
            src={zkSyncIcon}
            className="token-address__network"
          />
          <span className="copiable">
            <span className="token-address__address">TBA</span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="token-address__copy"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0568 1.33203H3.89034L3.88818 1.33203C3.21118 1.33404 2.56249 1.60386 2.08378 2.08256C1.60508 2.56127 1.33525 3.20996 1.33325 3.88695V10.0535L1.33325 10.0556C1.33501 10.6721 1.58071 11.2629 2.01666 11.6988C2.44263 12.1248 3.0164 12.3691 3.61758 12.3817C3.65645 13.6496 4.69647 14.6655 5.97376 14.6655H12.3094C13.6113 14.6655 14.6667 13.6101 14.6667 12.3082V5.97254C14.6667 4.69527 13.6508 3.65527 12.383 3.61637C12.3704 3.01518 12.1261 2.44141 11.7001 2.01544C11.2641 1.57948 10.6734 1.33379 10.0568 1.33203ZM10.9209 3.61523C10.9086 3.40217 10.8186 3.20034 10.6669 3.04866C10.5041 2.88591 10.2837 2.7941 10.0535 2.79322H3.89156C3.60094 2.79432 3.32252 2.91026 3.117 3.11577C2.91148 3.32129 2.79555 3.59971 2.79444 3.89032V10.0523C2.79533 10.2824 2.88714 10.5029 3.04988 10.6656C3.20157 10.8173 3.4034 10.9074 3.61646 10.9196V5.97254C3.61646 4.67064 4.67186 3.61523 5.97376 3.61523H10.9209ZM5.07764 5.97254C5.07764 5.47763 5.47885 5.07642 5.97376 5.07642H12.3094C12.8043 5.07642 13.2055 5.47763 13.2055 5.97254V12.3082C13.2055 12.8031 12.8043 13.2043 12.3094 13.2043H5.97376C5.47885 13.2043 5.07764 12.8031 5.07764 12.3082V5.97254Z"
                fill="white"
              />
            </svg>
          </span>
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="token-address__metamask"
          >
            <path
              d="M27.5303 3.56641L17.5366 10.9889L19.3847 6.60972L27.5303 3.56641Z"
              fill="#E2761B"
              stroke="#E2761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.45935 3.56641L14.3727 11.0592L12.615 6.60972L4.45935 3.56641Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.9346 20.7715L21.2729 24.8493L26.9679 26.4162L28.605 20.8619L23.9346 20.7715Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.40479 20.8619L5.0319 26.4162L10.7268 24.8493L8.06517 20.7715L3.40479 20.8619Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4053 13.882L8.81836 16.2825L14.4731 16.5336L14.2722 10.457L10.4053 13.882Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.5843 13.882L17.6672 10.3867L17.5366 16.5336L23.1813 16.2825L21.5843 13.882Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.7271 24.8496L14.1219 23.1924L11.1891 20.9023L10.7271 24.8496Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8682 23.1924L21.2731 24.8496L20.801 20.9023L17.8682 23.1924Z"
              fill="#E4761B"
              stroke="#E4761B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.2731 24.8487L17.8682 23.1914L18.1394 25.4111L18.1092 26.3452L21.2731 24.8487Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.7271 24.8487L13.8909 26.3452L13.8708 25.4111L14.1219 23.1914L10.7271 24.8487Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9408 19.4351L11.1084 18.6015L13.1071 17.6875L13.9408 19.4351Z"
              fill="#233447"
              stroke="#233447"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.0488 19.4351L18.8825 17.6875L20.8913 18.6015L18.0488 19.4351Z"
              fill="#233447"
              stroke="#233447"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.7271 24.8474L11.2092 20.7695L8.06543 20.8599L10.7271 24.8474Z"
              fill="#CD6116"
              stroke="#CD6116"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.791 20.7695L21.2731 24.8474L23.9348 20.8599L20.791 20.7695Z"
              fill="#CD6116"
              stroke="#CD6116"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.1818 16.2812L17.5371 16.5323L18.0594 19.435L18.893 17.6874L20.9018 18.6014L23.1818 16.2812Z"
              fill="#CD6116"
              stroke="#CD6116"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1089 18.6014L13.1177 17.6874L13.9413 19.435L14.4736 16.5323L8.81885 16.2812L11.1089 18.6014Z"
              fill="#CD6116"
              stroke="#CD6116"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.81836 16.2812L11.1887 20.9015L11.1084 18.6014L8.81836 16.2812Z"
              fill="#E4751F"
              stroke="#E4751F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9012 18.6014L20.8008 20.9015L23.1812 16.2812L20.9012 18.6014Z"
              fill="#E4751F"
              stroke="#E4751F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4732 16.5312L13.9409 19.4339L14.6038 22.8589L14.7545 18.3492L14.4732 16.5312Z"
              fill="#E4751F"
              stroke="#E4751F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5363 16.5312L17.2651 18.3392L17.3857 22.8589L18.0586 19.4339L17.5363 16.5312Z"
              fill="#E4751F"
              stroke="#E4751F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.0592 19.4352L17.3862 22.8602L17.8683 23.1917L20.8012 20.9016L20.9016 18.6016L18.0592 19.4352Z"
              fill="#F6851B"
              stroke="#F6851B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1084 18.6016L11.1888 20.9016L14.1216 23.1917L14.6037 22.8602L13.9408 19.4352L11.1084 18.6016Z"
              fill="#F6851B"
              stroke="#F6851B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.1093 26.3442L18.1395 25.4101L17.8884 25.1892H14.1018L13.8708 25.4101L13.8909 26.3442L10.7271 24.8477L11.8319 25.7516L14.0717 27.3084H17.9185L20.1684 25.7516L21.2732 24.8477L18.1093 26.3442Z"
              fill="#C0AD9E"
              stroke="#C0AD9E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8681 23.1908L17.386 22.8594H14.6038L14.1217 23.1908L13.8706 25.4105L14.1016 25.1896H17.8882L18.1393 25.4105L17.8681 23.1908Z"
              fill="#161616"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.9523 11.471L28.806 7.37306L27.5304 3.56641L17.8682 10.7378L21.5844 13.8815L26.8374 15.4183L28.0025 14.0623L27.5003 13.7007L28.3038 12.9675L27.6811 12.4854L28.4846 11.8727L27.9523 11.471Z"
              fill="#763D16"
              stroke="#763D16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.19385 7.37306L4.04758 11.471L3.50521 11.8727L4.30873 12.4854L3.69605 12.9675L4.49956 13.7007L3.99736 14.0623L5.15242 15.4183L10.4054 13.8815L14.1217 10.7378L4.45939 3.56641L3.19385 7.37306Z"
              fill="#763D16"
              stroke="#763D16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.8372 15.4176L21.5842 13.8809L23.1812 16.2814L20.8008 20.9016L23.9345 20.8614H28.6049L26.8372 15.4176Z"
              fill="#F6851B"
              stroke="#F6851B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4054 13.8809L5.15243 15.4176L3.40479 20.8614H8.06517L11.1888 20.9016L8.81847 16.2814L10.4054 13.8809Z"
              fill="#F6851B"
              stroke="#F6851B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5368 16.5328L17.8682 10.7374L19.3949 6.60938H12.6152L14.1218 10.7374L14.4734 16.5328L14.5939 18.3608L14.6039 22.8605H17.3861L17.4062 18.3608L17.5368 16.5328Z"
              fill="#F6851B"
              stroke="#F6851B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BelowBanner;

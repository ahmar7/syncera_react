import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  let toggleFaq1 = () => {
    if (faq1 === false) {
      setFaq1(true);
    } else {
      setFaq1(false);
    }
  };
  let toggleFaq2 = () => {
    if (faq2 === false) {
      setFaq2(true);
    } else {
      setFaq2(false);
    }
  };
  let toggleFaq3 = () => {
    if (faq3 === false) {
      setFaq3(true);
    } else {
      setFaq3(false);
    }
  };
  let toggleFaq4 = () => {
    if (faq4 === false) {
      setFaq4(true);
    } else {
      setFaq4(false);
    }
  };
  let toggleFaq5 = () => {
    if (faq5 === false) {
      setFaq5(true);
    } else {
      setFaq5(false);
    }
  };
  return (
    <section className="faq-section">
      <div className="containerer">
        <div className="faq-column justify-content-center row">
          <div className="text-center col-xxl-10 col-xl-11 col-md-12">
            <h2 className="title faqs-title">FAQs</h2>
            <br />
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq1}
                    className={faq1 ? "active btn btn-main" : " btn btn-main"}
                  >
                    What benefits do SERA token holders get?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq1 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Syncera ($SERA) is the utility and governance token for Syncera. We are taking significant measures to increase its importance and function in our ecosystem by incorporating new products and exclusive features.
                    </p>
                    <p>
                      The main benefit of holding the SERA token is that investors can gain early access to other developing projects within the growing ecosystem of zkSync. To guarantee your participation in an IDO, you can go through our <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-ecosystem-v1/launchpad/tiers" target="_blank" className="emphasize-link">tier system</a> to know the exact number of tokens required. Usually, these emerging cryptocurrency projects offer SERA investors a token valuation significantly lower than the listing price, and considering the excitement and potential surrounding zkSync, it may be worthwhile to invest in these new ventures.
                    </p>
                    
                    <p>
                      <b>Others ways holders of our token may benefit:</b>

                      <ul>
                        <li>IDO Participation</li>
                        <li>Guaranteed Allocation</li>
                        <li>Fee distribution</li>
                        <li>Governance</li>
                        <li>Ecosystem discounts</li>
                        <li>Airdrops</li>
                        <li>Private Deals</li>
                      </ul>
                    </p>  
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq2}
                    className={faq2 ? "active btn btn-main" : " btn btn-main"}
                  >
                    When is the public sale?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq2 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Once our private sale campaign is over, we will also conduct the public sale on our own platform. In due time, we will provide you with all the necessary information about the IDO. It is recommended that you familiarise yourself with our <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/be-an-ambassador-crew3" className="emphasize-link" target="_blank">ambassador program</a> to increase your chances of being eligible for an allocation at the earliest stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq3}
                    className={faq3 ? "active btn btn-main" : " btn btn-main"}
                  >
                    How do I participate in the private sale?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq3 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      We will verify the <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale" target="_blank" className="emphasize-link">private sale</a> date by issuing an announcement on our social media. Right now, you can already acquire knowledge about the sale's structure <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale" target="_blank" className="emphasize-link">here</a>. <b>Hint: Only users with OG roles (whitelist) in our Discord community will have the opportunity to take part in the exclusive phase.</b> The deadline to claim your OG role will be announced in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq4}
                    className={faq4 ? "active btn btn-main" : " btn btn-main"}
                  >
                    What is the Syncera Ambassador Program?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq4 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      People who enrol in our <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/be-an-ambassador-crew3" className="emphasize-link" target="_blank">ambassador program</a> can track their progress and receive specific Discord roles for their participation in Syncera's community. For example, if you hold a respected position and gain sufficient recognition within our community, you will be given access to a private channel on Syncera's Discord server. This channel provides privileged benefits within the Syncera network, such as partner seed rounds, private rounds, airdrops, and several other perks. Additionally, your allocation of SERA tokens from the public SERA IDO is based on your role within the program, and those with more significant positions will receive a larger allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq5}
                    className={faq5 ? "active btn btn-main" : " btn btn-main"}
                  >
                    I have a (formal) question for the team?!
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq5 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Please send an email to <a href="mailto:support@syncera.io" className="emphasize-link">support@syncera.io</a> for your general questions. As for partnership, marketing, or other business-related inquiries, please correspond with <a href="mailto:business@syncera.io" className="emphasize-link">business@syncera.io</a> instead. Finally, for private sale matters, you can reach us through <a href="mailto:private@syncera.io" className="emphasize-link">private@syncera.io</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="round-button light large  btn btn-main nop" href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/faqs" target="_href">
              View all Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

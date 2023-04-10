import React from "react";
import "./Description.css";
const Description = () => {
  return (
    <section className="description-section">
      <div className="containerer">
        <div className="justify-content-between align-items-center row">
          <div className="col-lg-6">
            <h2 className="title secondary-glow">
              Syncera Shield
            </h2>
            <div className="description-section__text">
              <p>
                Our insurance feature is another step to give the ecosystem a greater chance of adoption while we attract high-quality, long-term-thinking projects.
              </p>
              <p>
                Syncera has launched a community-first initiative to ensure safe launches on its platform. The goal is to create a positive environment for community members to participate in. Syncera will allow the community to vote for projects that they want to be launched on the platform. Funds are then distributed based on the performance of the project's token.
              </p>
            </div>

            <div className="advantages-section__buttons">
              <a className="ight large btn btn-main btn-two" href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-ecosystem-v1/launchpad/syncera-shield" target="_blank">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

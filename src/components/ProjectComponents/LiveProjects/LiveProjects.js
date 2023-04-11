import React from 'react';

const LiveProjects = () => {
    return (
      <section className="projects-live">
        <div className="containerer">
          <h2 className="title mbd-5">Live Projects</h2>
          <div className="g-4 row">
            <div className="col-md-6">
              <div className="tile--with-shadow no-projects-tile">
                <div className="dots">
                  <div />
                  <div />
                  <div />
                </div>
                <p className="tile__description">
                  There are no live projects yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default LiveProjects;

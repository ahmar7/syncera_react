import React from 'react';

const Heading = () => {
    return (
      <section className="project-top">
        <div className="py-5 containerer">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="title mb-0">Projects</h1>
            <nav className="navbar navbar-expand navbar-light">
              <div className="project-filter d-flex align-items-center">
                <span className="project-filter__name">Network </span>
                <div className="project-filter__dropdown dropdown">
                  <button
                    id="project-filter-toggle"
                    type="button"
                    className="round-button dark project-filter__toggle dropdown-toggle btn btn-main"
                  >
                    All Networks
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
}

export default Heading;

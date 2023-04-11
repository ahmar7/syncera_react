import React from 'react';

const Roadmap = () => {
    return (
        <> 
      <div className="w-full bg-[#F7F7F7] rounded-solaniumDefault mb-4 p-5 mr-5">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden no-margin-ex">
            <li className="pb-5 relative">
              <div
                className="-ml-px absolute mt-0.5 top-4 left-[10px] w-px h-full bg-solanium-bright-blue"
                aria-hidden="true"
              />
              <span className="relative flex items-start group">
                <span className="h-9 flex items-center">
                  <span className="relative z-10 w-5 h-5 flex items-center justify-center bg-blue-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="ml-5 min-w-0 flex flex-col">
                  <span className="text-md font-poppins-bold tracking-wide">
                    Preperation
                  </span>
                  <span className="text-xs text-solanium-bright-blue opacity-80">
                    Project is preparing for whitelist.
                  </span>
                </span>
              </span>
            </li>
            <li className="pb-5 relative">
              <div
                className="-ml-px absolute mt-0.5 top-4 left-[10px] w-px h-full bg-solanium-bright-blue"
                aria-hidden="true"
              />
              <span className="relative flex items-start group">
                <span className="h-9 flex items-center">
                  <span className="relative z-10 w-5 h-5 flex items-center justify-center bg-blue-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="ml-5 min-w-0 flex flex-col">
                  <span className="text-md font-poppins-bold tracking-wide">
                    Whitelist
                  </span>
                  <span className="text-xs text-solanium-bright-blue opacity-80">
                    You can whitelist for this project.
                  </span>
                </span>
              </span>
            </li>
            <li className="pb-5 relative">
              <div
                className="-ml-px absolute mt-0.5 top-4 left-[10px] w-px h-full bg-solanium-bright-blue"
                aria-hidden="true"
              />
              <span className="relative flex items-start group">
                <span className="h-9 flex items-center">
                  <span className="relative z-10 w-5 h-5 flex items-center justify-center bg-blue-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="ml-5 min-w-0 flex flex-col">
                  <span className="text-md font-poppins-bold tracking-wide">
                    Sale
                  </span>
                  <span className="text-xs text-solanium-bright-blue opacity-80">
                    You can fill your allocation.
                  </span>
                </span>
              </span>
            </li>
            <li className="relative">
              <span className="relative flex items-start group">
                <span className="h-9 flex items-center" aria-hidden="true">
                  <span className="relative z-10 w-5 h-5 flex items-center justify-center bg-gray-200 border-[1px] border-solanium-bright-blue rounded-full">
                    <span className="h-3 w-3 bg-transparent rounded-full" />
                  </span>
                </span>
                <span className="ml-5 min-w-0 flex flex-col opacity-50">
                  <span className="text-md font-poppins-bold tracking-wide">
                    Distribution
                  </span>
                  <span className="text-xs text-solanium-bright-blue">
                    Distribution handled externally
                  </span>
                </span>
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-full rounded-solaniumDefault mb-4 mr-5 bg-gradient-to-tr from-green-gradient-from to-solanium-bright-blue p-0.5">
                <div className="p-4 bg-[#F7F7F7] rounded-[1.1rem] z-50 relative border-transparent">
                  <div
                    className="flex gap-5 items-center"
                    currprojectphase={3}
                    project="[object Object]"
                  >
                    <div className>
                      <div className="rounded-lg bg-[#2047F4] h-10 w-10">
                        <img
                          src="https://www.solanium.io/socials/shield.svg"
                          className="h-10 w-10"
                        />
                      </div>
                    </div>
                    <div>
                      This launch is protected by Solanium Shield. Click
                      <a
                        href="/shield"
                        className="underline font-inter-bold hover:text-blue-400"
                      >
                        here
                      </a>
                      to learn more.
                    </div>
                  </div>
                </div>
              </div></>
    );
}

export default Roadmap;

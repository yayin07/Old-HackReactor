import React from "react";
//import background from "./public/back.jpg";
import back from "../img/back.jpg";

const Navbar = () => {
  return (
    <>
      <div className="py-8 px-4 flex justify-around z-20  fixed w-full bg-white">
        <div className=" ">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjQ3IiB2aWV3Qm94PSIwIDAgMTc1IDQ3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDx0aXRsZT5Mb2dvOiBIYWNrIFJlYWN0b3I8L3RpdGxlPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aCBkPSJNMTkuODMgNS45NEExOC4wNyAxOC4wNyAwIDAwNS40IDIzLjU0YTE4LjEgMTguMSAwIDAwMTYuOSAxNy45NFYzMy41YTEwLjEgMTAuMSAwIDAxLTguODYtOS45NmMwLTUuMSAzLjg3LTkuMzMgOC44NS05Ljk3di0yLjQ2YTEyLjU3IDEyLjU3IDAgMDAtMTEuMzIgMTIuNDNjMCA1LjU4IDMuNzIgMTAuMzIgOC44NSAxMS45MnYzLjE3YTE1LjYxIDE1LjYxIDAgMDEtMTEuOTQtMTUuMWMwLTguMTMgNi4zNS0xNC44MiAxNC40MS0xNS40OVYuMjJDOS45LjkgMCAxMS4xIDAgMjMuNTRjMCAxMi40MyA5Ljg5IDIyLjYzIDIyLjMgMjMuMzFWNDQuNGMtMTEuMDUtLjY4LTE5LjgzLTkuNzctMTkuODMtMjAuODZBMjEgMjEgMCAwMTE5LjgzIDIuOTgiIGZpbGw9IiMzNjM0MkUiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZD0iTTI0LjkyIDB2Mi40N0EyMS4xOSAyMS4xOSAwIDAxNDQuODggMjMuNWEyMS4xNiAyMS4xNiAwIDAxLTE3LjQ3IDIwLjcydi0yLjk4QTE4LjIxIDE4LjIxIDAgMDA0MS45MyAyMy41YzAtOS41Ni03LjUyLTE3LjQxLTE3LTE4LjF2OC4wNWM1LjAxLjY1IDguOSA0LjkgOC45IDEwLjA1IDAgNS4xNC0zLjg5IDkuNC04LjkgMTAuMDV2Mi40OGM2LjM5LS42NiAxMS40LTYuMDMgMTEuNC0xMi41MyAwLTUuNjMtMy43Ni0xMC40LTguOTItMTIuMDJWOC4zQTE1LjczIDE1LjczIDAgMDEzOS40MyAyMy41YzAgOC4yLTYuNCAxNC45NS0xNC41IDE1LjYyVjQ3YzEyLjQ5LS42OCAyMi40NC0xMC45NiAyMi40NC0yMy41UzM3LjQyLjY5IDI0LjkyIDAiIGZpbGw9IiMyRDgyQjgiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZmlsbD0iIzNEMzkzNSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNjguMzUgMTkuMzh2LTcuOTZoLTkuNDd2Ny45NmgtMy4yVjEuMmgzLjJWOC42aDkuNDdWMS4yaDMuMnYxOC4xOGgtMy4yTTgyLjYyIDQuMzlsLTMuMjcgOC42N2g2LjU0bC0zLjI3LTguNjd6bTUuNTEgMTVsLTEuMzQtMy41MmgtOC4zNGwtMS4zMyAzLjUxaC0zLjYzTDgwLjYzIDEuMmgzLjk4bDcuMTQgMTguMThoLTMuNjJ6TTkyLjA1IDEwLjNjMC01LjYyIDQuMTctOS40IDkuNTQtOS40YTguMTUgOC4xNSAwIDAxNy4yOCA0LjA1bC0yLjcgMS40MmE1LjM3IDUuMzcgMCAwMC00LjU4LTIuNjRjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc5IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45NCAwIDMuNy0xLjE0IDQuNTgtMi42NGwyLjcyIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgtOS41NC05LjM5TTEyMi4zIDE5LjM4bC02LjA3LTcuNjktMS42IDEuODl2NS44aC0zLjJWMS4yaDMuMnY4LjY0bDcuMS04LjY0aDMuOTVsLTcuMzggOC41NiA3Ljk2IDkuNjJoLTMuOTVNNjYuMzUgMzMuMzZjMC0xLjc0LTEuMy0yLjg2LTMuMS0yLjg2aC00LjM4djUuNzhoNC4zOGMxLjggMCAzLjEtMS4xNSAzLjEtMi45MnptLS4zIDEyLjUybC00LTYuOGgtMy4xOHY2LjhoLTMuMTlWMjcuNjloNy45OGMzLjU5IDAgNS45NiAyLjMyIDUuOTYgNS43YTUuMTIgNS4xMiAwIDAxLTQuMzMgNS4zNGw0LjQ2IDcuMTVoLTMuN3pNNzIuNzUgNDUuODhWMjcuNjloMTIuNXYyLjgxaC05LjN2NC42OWg5LjF2Mi44aC05LjF2NS4wOGg5LjN2Mi44aC0xMi41TTk2LjAyIDMwLjg4bC0zLjI3IDguNjdoNi41NGwtMy4yNy04LjY3em01LjUgMTVsLTEuMzMtMy41MmgtOC4zNGwtMS4zMyAzLjUyaC0zLjYzbDcuMTQtMTguMTloMy45OGw3LjE0IDE4LjE5aC0zLjYyek0xMDUuNDUgMzYuODZjMC01LjYgNC4xNy05LjQgOS41NC05LjRhOC4xNSA4LjE1IDAgMDE3LjI3IDQuMDZsLTIuNyAxLjQyQTUuMzcgNS4zNyAwIDAwMTE1IDMwLjNjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc4IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45MyAwIDMuNy0xLjE0IDQuNTctMi42NGwyLjczIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgxLTkuNTQtOS40TTEyOS4zIDQ1Ljg4VjMwLjVoLTUuNTF2LTIuOEgxMzh2Mi44aC01LjUydjE1LjM4aC0zLjE5TTE1NC4yNyAzNi44NmMwLTMuNzYtMi4zNi02LjU2LTYuMDEtNi41Ni0zLjY3IDAtNi4wMiAyLjgtNi4wMiA2LjU2IDAgMy43MyAyLjM1IDYuNTYgNi4wMiA2LjU2IDMuNjUgMCA2LjAxLTIuODMgNi4wMS02LjU2em0tMTUuMyAwYzAtNS40MiAzLjg1LTkuNCA5LjI5LTkuNCA1LjQyIDAgOS4yOCAzLjk4IDkuMjggOS40cy0zLjg2IDkuNC05LjI4IDkuNGMtNS40NCAwLTkuMjgtMy45OC05LjI4LTkuNHpNMTcxLjI4IDMzLjM2YzAtMS43NC0xLjMxLTIuODYtMy4xLTIuODZoLTQuMzl2NS43OGg0LjM4YzEuOCAwIDMuMS0xLjE1IDMuMS0yLjkyem0tLjMgMTIuNTJsLTQtNi44aC0zLjE5djYuOGgtMy4xOFYyNy42OWg3Ljk3YzMuNiAwIDUuOTYgMi4zMiA1Ljk2IDUuN2E1LjEyIDUuMTIgMCAwMS00LjMyIDUuMzRsNC40NiA3LjE1aC0zLjd6Ii8+CiAgPC9nPgo8L3N2Zz4K"
            alt="Logo"
          />
        </div>

        <div className="hidden space-x-6 md:flex justify-center items-center ">
          <a href="#" className="hover:text-blue-400 ">
            Bootcamps
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Prepare
          </a>
          <a href="#" className="hover:text-blue-400">
            Outcomes
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Events
          </a>

          <a
            href="#"
            className=" p-3 px-4 pt-2 text-white bg-blue-500 border-x-16 rounded-sm baseline hover:bg-blue-400 md:block"
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className="bg-red-50 ">
        <div
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "85vh",
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-white font-serif text-4xl  md:text-5xl">
              <h1 className="text-white-500">
                The Industry's Best Coding Bootcamps For <br /> Aspiring
                Software Engineers
              </h1>

              <p className="pt-8 text-2xl md:text-3xl block text-gray-400">
                Since 2012, Hack Reactor has developed over 8,000+ job-ready
                software engineers.
              </p>

              <p className="text-xl md:text-3xl font-light block text-gray-400">
                Reinvent your career with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Navbar;

{
  /* <div className="flex flex-col lg:f;ex-row">
<div>
  
</div>
</div> */
}

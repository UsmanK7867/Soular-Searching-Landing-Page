import { Input } from "postcss";
import React, { useRef } from "react";

function Main() {
  return (
    <div className="main  w-[100%] text-[#9FEAA4]">
      <div className="md:flex justify-between w-[100%]">
        {/* <div className="absolute top-[80%] w-screen h-screen z-[0]">
          <img src="./assets/main_absolute.svg" alt="" />
        </div> */}
        <div className="md:flex-[60%] p-8 sm:p-4">
          <div className=" sm:ml-12 mt-28">
            {/* <div className="relative main_heading text-center text-3xl md:text-[125px] md:leading-[.99] font-bold tracking-wider border-l-2  border-r-2 border-[#59C361]">
              WE ARE READING
            </div> */}
            <div className="hero-heading-container">
              <h1 className="h1 text-center">We are Reading</h1>
              <div className="hero-heading-lines-container">
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="horizontal-dotted-line"></div>
                <div className="container-edge">
                  <div className="container-edge-ends"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-ends"></div>
                </div>
                <div className="container-edge is-right-container-edge">
                  <div className="container-edge-ends"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-middles"></div>
                  <div className="container-edge-ends"></div>
                </div>
              </div>
            </div>
            <div className="tldr-container top-28 lg:top-2 ">
              <div className="tldr-container-edge">
                <div className="container-edge-ends"></div>
                <div className="container-edge-ends"></div>
              </div>
              <div className="tldr-container-edge is-right-tldr-container-edge">
                <div className="container-edge-ends"></div>
                <div className="container-edge-ends"></div>
              </div>
              {/* <img
                src="./assets/main_folder_icon.svg"
                alt=""
                className=" hidden sm:inline-block"
              /> */}

              <div className="mx-auto sm:ml-8 leading-wide  w-[100%] ">
                <span className="font-bold">
                  Soular Searching is a poetry book series.
                </span>
                This series is an exploration of the human experience. When
                reading, challenge yourself to examine your personal life and
                those around you. May these poems inspire you to do some
                searching of your own.
              </div>
            </div>
            <div className=" sm:w-[80%] mx-auto">
              <div className="mt-20 text-center md:text-left md:ml-4">
                Sign up for Dronies Newsletter
              </div>
              {/* <div className=""></div> */}
              <div className=" mt-4 mx-auto  flex justify-center border-[#ea9f9f] border-1 w-[100%] sm:w-[50%] h-[40px] rounded">
                <input
                  type="text"
                  className="sm:sw-[60%] h-[100%] p-2 rounded-tl-xl rounded-bl-xl"
                  placeholder="Type your email..."
                />
                <div className=" text-white bg-[#ff4127] text-sm p-2 rounded-tr-xl rounded-br-xl ">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-[40%]">
          <img
            className=" w-[100%] md:w-[100%] md:rounded-2xl mx-auto  h-[60%] sm:h-screen sm:mt-28"
            src="./assets/main.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

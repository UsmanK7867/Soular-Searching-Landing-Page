import React, { useEffect, useState } from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Nav({ toHomee, toCMM, toKDD, toFaqq }) {
  // nav Hide/show
  const [show, setShow] = useState(true);
  // const controlNavbar = () => {
  //   if (window.scrollY > 700) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <div
      className={`mb-8 nav transition duration-300 ease-in-out mx-auto bg-black  py-3 fixed w-full ${
        !show && "hidden"
      } `}
    >
      <div className=" hidden lg:flex sm:pl-16 lg:pl-0  lg:w-[90%] mx-auto  text-[#ff4127] items-center tracking-wide text-[0.7rem] md:text-base ">
        <div className="  pt-2 uppercase text-white text-xl sm:text-3xl font-bold tracking-widest mx-auto  text-center sm:mx-0 sm:text-left">
          {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
          {/* <img
            src="./imgs/main_logo.png"
            className="h-[50px] pt-2 w-[80%] sm:w-[70%] md:w-[80%] mx-auto"
            alt=""
          /> */}
          Soular Searching
        </div>
        {/* <div className=" hidden sm:inline-block hover:text-white ml-auto mr-6 underline">
          ABOUT US
        </div> */}
        <div className="mx-auto"></div>
        <div
          onClick={toKDD}
          className=" text-[#ff4127] navigation-link w-inline-block active:text-xl md:text-xs lg:text-lg active:text-rose-200 font-light cursor-pointer hidden ml-auto md:inline-block hover:text-rose-200 mr-16"
        >
          Who is King David ?
        </div>
        {/* <div
          onClick={toRoadd}
          className="navigation-link w-inline-block file:active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  md:inline-block hover:text-white  mr-16"
        >
          ROADMAP
        </div> */}
        <div
          onClick={toCMM}
          className="navigation-link w-inline-block active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-white  mr-16"
        >
          COMMUNITY
        </div>
        {/* <div
          onClick={toFaqq}
          className="navigation-link w-inline-block  active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-white  mr-16"
        >
          FAQ
        </div> */}

        <div className="ml-auto"></div>
        <div className="flex w-[10%] justify-between items-center min-w-[150px] mx-auto mt-5 lg:mt-0 lg:mr-0  ">
          <a href="https://discord.gg/PG6wPHuX7t" target={"_blank"}>
            <div className="  icon text-2xl   rounded-full w-10 h-10 flex justify-center">
              {" "}
              {/* <FaDiscord color="white" size={"70%"} />{" "} */}
              //
            </div>
          </a>
          <a
            href="https://youtube.com/channel/UCYtahGVK/_DgKHM8I8-KVhQQ"
            target={"_blank"}
          >
            <div className=" w-10 h-10 flex justify-center   ">
              {" "}
              <FaYoutube
                className="shadow rounded-xl"
                color="white"
                size={"70%"}
              />{" "}
            </div>
          </a>
          <a href="https://www.instagram.com/davidmtorrence/" target={"_blank"}>
            <div className="   w-10 h-10 flex justify-center ">
              {" "}
              <FaInstagram
                className="shadow rounded-xl"
                color="white"
                size={"70%"}
              />
            </div>
          </a>
        </div>
      </div>
      {/* mbl */}
      <div className=" lg:hidden  flex sm:pl-16 lg:pl-0  lg:w-[90%] mx-auto   items-center tracking-wide text-[0.7rem]  md:text-xl ">
        <div className="   uppercase text-white text-base sm:text-2xl lg:text-3xl font-bold tracking-widest mx-auto  text-center sm:mx-0 sm:text-left">
          {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
          {/* <img
            src="./imgs/main_logo.png"
            className="h-[50px] pt-2 w-[80%] sm:w-[70%] md:w-[80%] mx-auto"
            alt=""
          /> */}{" "}
          Soular Searching
        </div>
        {/* <div className=" hidden sm:inline-block hover:text-white ml-auto mr-6 underline">
          ABOUT US
        </div> */}
        <div className="mx-auto"></div>
        <div
          onClick={toKDD}
          className=" active:text-xl md:text-sm lg:text-lg active:text-rose-200 font-light cursor-pointer hidden ml-auto md:inline-block hover:text-white  mr-4 lg:mr-16"
        >
          Who is King David ?
        </div>
        {/* <div
          onClick={toRoadd}
          className=" file:active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  md:inline-block hover:text-white  mr-16"
        >
          ROADMAP
        </div> */}
        <div
          onClick={toCMM}
          className=" active:text-xl min-w-[120px] md:text-sm lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-white  mr-16"
        >
          COMMUNITY
        </div>
        {/* <div
          onClick={toFaqq}
          className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden md:inline-block hover:text-white  mr-16"
        >
          FAQ
        </div> */}

        <div className="ml-auto"></div>
        <div className="flex w-[10%] justify-between items-center min-w-[150px] mx-auto mt-5 lg:mt-0 lg:mr-0  ">
          <a href="https://discord.gg/PG6wPHuX7t" target={"_blank"}>
            <div className="  icon  text-xl sm:text-2xl   rounded-full w-10 h-10 flex justify-center">
              {" "}
              {/* <FaDiscord color="white" size={"70%"} />{" "} */}
              //
            </div>
          </a>
          <a
            href="https://youtube.com/channel/UCYtahGVK/_DgKHM8I8-KVhQQ"
            target={"_blank"}
          >
            <div className=" w-10 h-10 flex justify-center   ">
              {" "}
              <FaYoutube
                className="shadow rounded-xl"
                color="white"
                size={"70%"}
              />{" "}
            </div>
          </a>
          <a href="https://www.instagram.com/davidmtorrence/" target={"_blank"}>
            <div className="   w-10 h-10 flex justify-center ">
              {" "}
              <FaInstagram
                className="shadow rounded-xl"
                color="white"
                size={"70%"}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

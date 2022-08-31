import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

function Community({ toCM }) {
  return (
    <div ref={toCM} className="md:flex md:smt-12">
      {/* <div className="h-[100px]"></div> */}

      <div className="flex-[50%] p-4 sm:p-20 flex flex-col justify-center">
        {/* <div className="text-center font-bold text-2xl">JOIN THE COMMUNITY</div>
        <h1 className="mt-4 main_heading text-center text-4xl md:text-6xl font-extrabold">
          UNRAVEL THE CONSIPRIACY
        </h1>
        <p className=" bg-[#281c1c] border-[#ff4127]  p-4 text-center mt-8  tracking-wide text-white">
          Using your sleuthing skills, join the community on Youtube and
          Instagram to find out why the Soular Searching is a great book.
        </p> */}

        <div className="justify-center  ">
          <a
            href="https://youtube.com/channel/UCYtahGVK/_DgKHM8I8-KVhQQ"
            target="_blank"
            className="shadow flex justify-center h-[70px]  uppercase w-[80%] mx-auto  sm:w-[60%] md:w-[70%]  border-[#ff4127] text-[#5BC463]  hover:text-white border-4 px-10 py-4 mt-12 "
          >
            <FaYoutube className="w-[30px] mr-4" color="white" size={"100%"} />
            <div>Youtube</div>
          </a>
          <a
            href="https://www.instagram.com/davidmtorrence/"
            target="_blank"
            className="shadow flex justify-center h-[70px] uppercase w-[80%]  mx-auto  sm:w-[60%] md:w-[70%] border-[#ff4127] text-[#5BC463]   hover:text-white border-4 px-10 py-4 mt-12 "
          >
            <FaInstagram
              className="w-[30px] mr-4"
              color="white"
              size={"100%"}
            />
            <div className="">Instagram</div>
          </a>
        </div>
      </div>
      <div className="flex-[50%] p-4 sm:p-20 flex flex-col justify-center">
        <img src="./assets/community_section.png" alt="" />
      </div>
    </div>
  );
}

export default Community;

import React from "react";

function Footer() {
  return (
    <div className="w-full px-20 py-8 border-t-2 border-[#ff4127] h-[250px] pb-4 bg-[#2a1a1a]">
      <div className="flex text-[#ff4127] items-center">
        {/* <div className="text-1xl">Logo </div> */}
        <div className="  md:pl-4 pt-2 uppercase text-xl sm:text-3xl font-bold tracking-widest text-center sm:mx-0 sm:text-left">
          Soular
        </div>
      </div>
      <div className="w-[90%] border-t-2 border-[#ff4127] mx-auto mt-12 sm:mt-20 border-dotted "></div>
      <div className=" hidden footer_nav lg:flex  items-center text-[#ff4127] mt-8">
        <div className="text-[#d5a5a5] text-2xl">&copy; 2022 Soular</div>
        <div className=" ml-4">Terms of Use</div>
        <div className=" ml-4">Terms of Same</div>
        <div className=" ml-4"> Privacy Policy</div>

        <div className="ml-auto"></div>
        <div className=" text-[#d5a5a5]">
          Created in partership with{" "}
          <span className="text-[#ff4127]">Solana labs</span>{" "}
        </div>
      </div>
      {/* for mbl */}
      <div className=" footer_nav text-[0.6rem] lg:text-base md:text-base lg:hidden text-[#51B45A] mt-8">
        <div className="flex justify-center min-w-[270px] ">
          <div className="text-[#d5a5a5]">&copy; 2022 Soular</div>
          <div className=" ml-4">Terms of Use</div>
          <div className=" ml-4"> Privacy Policy</div>
        </div>
        <div className="ml-auto"></div>
        <div className=" text-[#d5a5a5] text-center mt-2">
          Created in partership with{" "}
          <span
            style={{ color: "#ff4127 !important" }}
            className="text-[#ff4127]"
          >
            Solana labs
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;

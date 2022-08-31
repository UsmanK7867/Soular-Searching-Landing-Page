import React from "react";
import { Disclosure } from "@headlessui/react";

function Faq({ toFaq }) {
  return (
    <div
      ref={toFaq}
      className="md:flex w-full relative py-20  uppercase tracking-wider "
    >
      <div className="h-[100px]"></div>
      <div className="lines-container">
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="vertical-dotted-line is-faq-horizontal-dotted-line"></div>
        <div className="lines-container-edge">
          <div className="lines-container-edge-ends"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-ends"></div>
        </div>
        <div className="lines-container-edge is-bottom-lines-container-edge">
          <div className="lines-container-edge-ends"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-middles"></div>
          <div className="lines-container-edge-ends"></div>
        </div>
      </div>
      <div className="md:flex-[50%] pl-4 md:pl-8 lg:px-20">
        <div className="text-[#57C15F]">Frequently asked questions</div>
        <div className="text-3xl  lg:text-6xl mt-4 font-bold text-[#9FEAA4]">
          looking for answers?
        </div>
        <p className="text-white mt-8 italic text-sm md:text-base mb-8">
          It's hard to believe that Dronies have replaced birds. Have you got
          any questions? We got answers.
        </p>
      </div>
      <div className="zIndexxx  md:flex-[50%] text-[#7EBA83] tracking-wide text-sm px-4 sm:px-8 md:px-20">
        <div className=" mb-4 faq-container">
          <Disclosure>
            <Disclosure.Button className="  py-4 px-6 w-full bg-[#1A2A21] text-left  md:text-sm">
              Q // &#160;&#160; Lorem, ipsum consectetur adipisicing.
            </Disclosure.Button>
            <Disclosure.Panel className="px-6  text-white bg-[#1a2a21] md:text-sm font-[400] italic">
              A // &#160;&#160; Lorem ipsum,consectetur adipisicing elit.
            </Disclosure.Panel>
          </Disclosure>
        </div>

        {/* <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div> */}
        <div className="mb-4 faq-container">
          <Disclosure>
            <Disclosure.Button className="  py-4 px-6 w-full bg-[#1A2A21] text-left  md:text-sm">
              Q // &#160;&#160; Lorem, ipsum consectetur adipisicing.
            </Disclosure.Button>
            <Disclosure.Panel className="px-6  text-white bg-[#1a2a21] md:text-sm font-[400] italic">
              A // &#160;&#160; Lorem ipsum,consectetur adipisicing elit.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        {/* <div className="line my-2 w-full h-[1px] bg-[#1A2A21] bg-gray-300 rounded-lg"></div> */}
        <div className=" mb-4 faq-container">
          <Disclosure>
            <Disclosure.Button className="  py-4 px-6 w-full bg-[#1A2A21] text-left  md:text-sm">
              Q // &#160;&#160; Lorem, ipsum consectetur adipisicing.
            </Disclosure.Button>
            <Disclosure.Panel className="px-6  text-white bg-[#1a2a21] md:text-sm font-[400] italic">
              A // &#160;&#160; Lorem ipsum,consectetur adipisicing elit.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        {/* <div className="line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div> */}
      </div>
    </div>
  );
}

export default Faq;

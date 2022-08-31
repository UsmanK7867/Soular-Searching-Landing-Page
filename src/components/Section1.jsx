import React from "react";

function Section1({ toKD }) {
  return (
    <div ref={toKD} className="">
      <div className="hidden md:h-[100px]"></div>

      <div className="relative py-20 section mt-12">
        <div className=" lines-container">
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
        <div className="section-label text-center">
          Soular Searching Delux Edition
        </div>
        <h1
          style={{ color: "white" }}
          className="h2 hero-heading-container text-center text-3xl tracking-wider font-bold"
        >
          Who is King David ?
        </h1>
        <div className="section1_button shadow uppercase w-[80%] font-bold  md:w-[30%] border-[#ff4127] text-[#ff4127 hover:border-white hover:text-white border-4 px-10 py-4 mt-12 mx-auto text-center">
          View Collection
        </div>
        <div
          id="community"
          className="   tracking-wide text-left  w-[80%] sm:w-[60%] md:w-[50%] bg-[#281c1c] border-[#ff4127]  border-2 px-10 py-4 mt-12 mx-auto "
        >
          David is a former college Spoken Word Champion. He was born, raised
          and still resides in Florida. At the age of 14, David feel in-love
          with writing and journaling which over time evolved into poetry. As an
          artist, King David is a student of love, mistakes, honesty and
          transparency. He uses past relationships and personal narratives to
          discuss masculinity, intimacy, communication and family while
          simultaneously pinpointing and reinforcing the interconnected nature
          of the soul and human existence.
        </div>
      </div>
      {/* <img
        src="./assets/section1_book.png"
        alt=""
        className=" mt-12 w-[100%] md:w-[80%] h-[500px] md:h-[700px] md:rounded-2xl mx-auto"
      /> */}
    </div>
  );
}

export default Section1;

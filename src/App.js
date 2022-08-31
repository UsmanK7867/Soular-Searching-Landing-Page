import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Section1 from "./components/Section1";
import Community from "./components/Community";
// import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const toCM = useRef(null);
  const toFaq = useRef(null);
  const toKD = useRef(null);
  const toHome = useRef(null);

  const toCMM = () => toCM.current.scrollIntoView();
  // const toFaqq = () => toFaq.current.scrollIntoView();
  const toKDD = () => toKD.current.scrollIntoView();
  const toHomee = () => toHome.current.scrollIntoView();
  return (
    <div className="app bg-[#151A19]  ">
      {/* <div className="bg-black w-screen h-[] absolute z-[-2]"></div> */}

      <Nav toCMM={toCMM} toKDD={toKDD} />
      {/* Main */}
      <Main />
      {/* section */}

      <Section1 toKD={toKD} />
      {/* Community */}
      <Community toCM={toCM} />
      {/* Faq */}
      {/* <Faq toFaq={toFaq} /> */}
      {/* <img
        src="./assets/section1_book.png"
        alt=""
        className=" mt-4 w-[100%] md:w-[45%] h-[500px] md:h-[600px] md:rounded-2xl mx-auto md:ml-2"
      /> */}
      {/* Footer */}
      <Footer />
      {/* <div className=" mt-40 sm:mt-12 md:mt-8">
        <img
          className=" w-[100%] md:w-[100%] md:rounded-2xl mx-auto  h-[60%] sm:h-screen "
          src="./assets/section1_book.png"
          alt=""
        />
      </div> */}
    </div>
  );
}

export default App;

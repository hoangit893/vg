import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../../components/NavBar";
import Challenges from "../../components/Challenges";
import "./style.css";
import Ranking from "../../components/Ranking";
import Achievements from "../../components/Achievements";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home__container grid grid-flow-rows grid-rows-[5fr_4fr] justify-normal gap-7 place-content-center bg-light-brown p-9 mx-9 mt-8 rounded-3xl h-5/6">
        <div className="home__container_top grid md:grid-cols-[2fr_1fr] gap-7 sm:grid-flow-column ">
          <div className="challenge__container w-full mx-auto">
            <Challenges></Challenges>
          </div>
          <div className="rank__container bg-light-yellow w-full mx-auto rounded-3xl">
            <Ranking />
          </div>
        </div>
        <div className="achievement__container bg-light-yellow rounded-3xl w-full">
          <Achievements />
        </div>
      </div>
    </>
  );
};

export default Home;

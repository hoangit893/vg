import React, { useState } from "react";

function Ranking() {
  const [rankList, setRankList] = useState([
    {
      name: "John Doe",
      score: 100,
    },
    {
      name: "Jane Doe",
      score: 90,
    },
    {
      name: "John Smith",
      score: 80,
    },
  ]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="rank__container w-full h-full bg-light-yellow rounded-3xl px-9">
      <h1
        className="home__title"
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        #Rank
      </h1>

      <div className="rank_title flex justify-between ">
        <p>Rank</p>
        <p>Name</p>
        <p>Score</p>
      </div>

      <div className="rank__list">
        {rankList.map((rank, index) => (
          <div
            key={index}
            className="rank__item"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
              margin: "10px 0",
            }}
          >
            <p>{index + 1}</p>
            <p>{rank.name}</p>
            <p>{rank.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;

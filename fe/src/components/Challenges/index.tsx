import React, { useEffect, useState } from "react";

const Challenges = () => {
  const [challenges, setChallenges] = useState([
    { id: 1, name: "Challenge 1", topic: "React", difficulty: "Easy" },
    { id: 2, name: "Challenge 2", topic: "React", difficulty: "Medium" },
    { id: 3, name: "Challenge 3", topic: "React", difficulty: "Hard" },
    { id: 4, name: "Challenge 4", topic: "React", difficulty: "Easy" },
    { id: 5, name: "Challenge 5", topic: "React", difficulty: "Easy" },
    { id: 6, name: "Challenge 6", topic: "React", difficulty: "Medium" },
    { id: 7, name: "Challenge 7", topic: "React", difficulty: "Hard" },
    { id: 8, name: "Challenge 8", topic: "React", difficulty: "Easy" },
    { id: 9, name: "Challenge 9", topic: "React", difficulty: "Easy" },
    { id: 10, name: "Challenge 10", topic: "React", difficulty: "Medium" },
    { id: 11, name: "Challenge 11", topic: "React", difficulty: "Hard" },
    { id: 12, name: "Challenge 12", topic: "React", difficulty: "Easy" },
    { id: 13, name: "Challenge 13", topic: "React", difficulty: "Easy" },
    { id: 14, name: "Challenge 14", topic: "React", difficulty: "Medium" },
    { id: 15, name: "Challenge 15", topic: "React", difficulty: "Hard" },
    { id: 16, name: "Challenge 16", topic: "React", difficulty: "Easy" },
    { id: 17, name: "Challenge 17", topic: "React", difficulty: "Easy" },
    { id: 18, name: "Challenge 18", topic: "React", difficulty: "Medium" },
    { id: 19, name: "Challenge 19", topic: "React", difficulty: "Hard" },
    { id: 20, name: "Challenge 20", topic: "React", difficulty: "Easy" },
    { id: 21, name: "Challenge 21", topic: "React", difficulty: "Easy" },
    { id: 22, name: "Challenge 22", topic: "React", difficulty: "Medium" },

    // { id: 1, name: "Challenge 1", topic: "React", difficulty: "Easy" }
    // { id: 3, name: "Challenge 3", topic: "React", difficulty: "Hard" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (n) => {
    if (
      currentPage + n > 0 &&
      currentPage + n <= Math.ceil(challenges.length / challengesPerPage)
    ) {
      setCurrentPage(currentPage + n);
      console.log(currentPage);
    }
  };

  const challengesPerPage = 8;

  const indexOfLastChallenge = currentPage * challengesPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
  const currentChallenges = challenges.slice(
    indexOfFirstChallenge,
    indexOfLastChallenge
  );
  return (
    <div className="bg-light-yellow rounded-3xl w-full h-full relative ">
      <h1 className="home__title">#Challenges</h1>
      <div className="grid grid-cols-[1fr_10fr_1fr] items-center justify-around mx-4">
        <button
          className="hover:bg-brown rounded-xl p-2 w-20 h-10 text-light-yellow bg-light-brown cursor-pointer"
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="challenges__list flex flex-flow-col justify-around h-full flex-wrap gap-6 p-5 mx-3">
          {currentChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="challenge text-center text-light-yellow absolute bg-brown rounded-xl p-5 relative cursor-pointer"
            >
              <p>{challenge.name}</p>
              <p>{challenge.topic}</p>
              <p>{challenge.difficulty}</p>
            </div>
          ))}
        </div>
        <button
          className="hover:bg-brown rounded-xl p-2 w-20 h-10 text-light-yellow bg-light-brown cursor-pointer"
          onClick={() => handlePageChange(1)}
          disabled={
            currentPage === Math.ceil(challenges.length / challengesPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Challenges;

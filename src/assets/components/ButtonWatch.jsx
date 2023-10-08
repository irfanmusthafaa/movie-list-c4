import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ButtonWatch = ({ kunci }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/3/movie/${kunci}/videos?api_key=${process.env.REACT_APP_KEY}`)
      .then((response) => {
        const movieResults = response.data.results;
        setData(movieResults);
      })
      .catch((error) => {
        console.error("Error fetching now playing movies:", error);
      });
  }, [kunci]);

  const idKey = data?.map((value) => value.key);
  const datakey = idKey?.shift();

  return (
    <>
      <Link
        to={`https://www.youtube.com/watch?v=${datakey}`}
        target="_blank"
        className="text-white text-sm font-bold pt-3 pb-2 px-7 bg-red-500 rounded-xl hover:opacity-75"
      >
        <FontAwesomeIcon icon={faClock} /> WATCH TRAILER
      </Link>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { Nav } from "../assets/components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { useDataMoviesSearchQuery } from "../services/get-movies-search";
import { Typography } from "@material-tailwind/react";

export const Search = () => {
  const location = useLocation();
  const { query } = location.state;
  console.log(location, "use location");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const { data: dataSearch } = useDataMoviesSearchQuery({
    query: query,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setMovies(dataSearch);
    setSearch(query);
    console.log(dataSearch, "hasil search");
    console.log(query, "data id");
  }, [dataSearch]);

  const InputValue = () => {
    if (search !== "") {
      return (
        // <h3 style={{ marginTop: "6rem", color: "#DADADA" }}>
        //   <b>Search Result "{search}"</b>
        // </h3>
        <Typography color="black" variant="h3" className="container mx-auto px-4 mt-[7rem] ">
          Search Result "{search}"
        </Typography>
      );
    } else {
      return (
        <Typography color="black" variant="h3" className="container mx-auto px-4 mt-[7rem] ">
          No result found !!
        </Typography>
      );
    }
    return search;
  };

  return (
    <>
      <Nav />
      {<InputValue />}
      <div className=" flex flex-wrap mx-2 ">
        {movies?.map((popular) => (
          <div
            onClick={() => {
              navigate("/detail", {
                state: {
                  idMovie: popular.id,
                },
              });
            }}
            key={popular.id}
            className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8 rounded-xl scale-90 cursor-pointer hover:scale-100"
          >
            <div className="relative group rounded-xl overflow-hidden border-2">
              <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} className="w-full h-auto " />

              {/* <div className="absolute inset-0 flex items-center justify-center cursor-pointe bg-blue-gray-700 bg-opacity-75 text-white opacity-0 group-hover:opacity-[200] transition-opacity">
                  <p className="text-3xl">{popular.title}</p>
                </div> */}
            </div>
            <p className=" font-bold text-black mt-2 mb-1">{popular.title}</p>
            <p className=" text-xs font-bold text-gray-700">{popular.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";

import { Nav } from "../assets/components/Nav";
import { useDataMoviesNowPlayingQuery } from "../services/get-movies-nowplaying";
import { PopularMovie } from "../assets/components/PopularMovie";
import { Header } from "../assets/components/Header";

export const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [PageNow, setPageNow] = useState(1);

  const { data: movies } = useDataMoviesNowPlayingQuery({
    language: "en-US",
    page: PageNow,
  });

  useEffect(() => {
    setNowPlayingMovies(movies);
  }, [movies]);

  return (
    <div>
      <Nav color="transparent" />
      <Header nowPlayingMovies={nowPlayingMovies} />
      <PopularMovie />
    </div>
  );
};

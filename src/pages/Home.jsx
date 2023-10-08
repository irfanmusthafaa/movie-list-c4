import React, { useEffect, useState } from "react";
import { Nav } from "../assets/components/Nav";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useDataMoviesNowPlayingQuery } from "../services/get-movies-nowplaying";
import { PopularMovie } from "../assets/components/PopularMovie";
import { Footer } from "../assets/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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
    <div className=" ">
      <Nav color="transparent" />
      <Carousel
        prevArrow={() => false}
        nextArrow={() => false}
        autoplay={true}
        autoplayDelay={3000}
        className="relative h-screen"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {nowPlayingMovies?.slice(8, 12).map((movie) => (
          <div key={movie.id}>
            <div className="relative h-[full] w-full">
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="h-screen w-full object-cover" />
              <div className="absolute inset-0 grid h-full w-full justify-items-start place-items-center px-10 bg-black/75">
                <div className="w-3/4  md:w-2/4  ">
                  <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                    {movie.title}
                  </Typography>
                  <p className="mb-4 text-white opacity-80 line-clamp-3">{movie.overview}</p>
                  <div className="flex justify-start gap-2">
                    <Button size="lg" color="red">
                      <FontAwesomeIcon icon={faClock} /> Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <PopularMovie />
      {/* <Footer /> */}
    </div>
  );
};

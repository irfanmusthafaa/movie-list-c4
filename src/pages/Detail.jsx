import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataMoviesDetailQuery } from "../services/get-movies-detail";
import { Carousel, Typography } from "@material-tailwind/react";
import { Nav } from "../assets/components/Nav";
import { RatingStar } from "../assets/components/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Detail = () => {
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [key, setKey] = useState([]);

  const { data: dataDetail } = useDataMoviesDetailQuery({
    api_key: `${process.env.REACT_APP_KEY}`,
    append_to_response: "videos",
  });

  useEffect(() => {
    setDetails(dataDetail);
    setGenres(dataDetail?.genres);
    setKey(dataDetail?.videos?.results);
  }, [dataDetail]);

  const idKey = key?.map((value) => value.key);
  const kunci = idKey?.shift();

  const dataGenre = genres?.map((genre) => genre.name).join(", ");
  const rating = Math.floor(details?.vote_average / 2);

  return (
    <>
      <Nav color="transparent" />
      <Carousel
        prevArrow={() => false}
        nextArrow={() => false}
        navigation={() => false}
        autoplay={true}
        autoplayDelay={3000}
        className="relative h-screen"
      >
        <div key={details?.id}>
          <div className="relative h-[full] w-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
              alt={details?.title}
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full justify-items-start place-items-center px-10 bg-black/75">
              <div className="w-3/4  md:w-2/4 sm:scale-50 md:scale-100 ">
                <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  {details?.title}
                </Typography>
                <div>
                  <p className="mb-6 italic text-white opacity-80 ">{dataGenre}</p>
                </div>

                <p className="mb-4 text-white opacity-80 ">{details?.overview}</p>
                <div className="flex items-center gap-2 mb-4">
                  <RatingStar rating={details?.vote_average} />
                  <Typography color="white" className="font-medium opacity-80">
                    {rating}.0 Rated
                  </Typography>
                </div>
                <div className="flex justify-start gap-2">
                  <Link
                    to={`https://www.youtube.com/watch?v=${kunci}`}
                    target="_blank"
                    className="text-white text-sm font-bold pt-3 pb-2 px-7 bg-red-500 rounded-xl hover:opacity-75"
                  >
                    <FontAwesomeIcon icon={faClock} /> WATCH TRAILER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

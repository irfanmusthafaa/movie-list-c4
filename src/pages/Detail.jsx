import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDataMoviesDetailQuery } from "../services/get-movies-detail";
import { Carousel, Typography, Button, Rating } from "@material-tailwind/react";
import { Nav } from "../assets/components/Nav";
import { RatingStar } from "../assets/components/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Detail = () => {
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  //   const data = useLocation();

  //   const [ID, setID] = useState(data.state ? data.state.idMovie : "");

  // const { data: dataDetail, isSuccess } = useDataMoviesDetailQuery({ api_key: `${process.env.REACT_APP_KEY}` });
  const { data: dataDetail } = useDataMoviesDetailQuery();

  useEffect(() => {
    setDetails(dataDetail);
    setGenres(dataDetail?.genres);
  }, [dataDetail]);

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
                    {rating}.0 / 5 Rated
                  </Typography>
                </div>
                <div className="flex justify-start gap-2">
                  <Button size="lg" color="red">
                    <FontAwesomeIcon icon={faClock} /> Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

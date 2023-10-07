import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDataMoviesDetailQuery } from "../services/get-movies-detail";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Nav } from "../assets/components/Nav";

export const Detail = () => {
  const [details, setDetails] = useState({});
  //   const data = useLocation();

  //   const [ID, setID] = useState(data.state ? data.state.idMovie : "");

  // const { data: dataDetail, isSuccess } = useDataMoviesDetailQuery({ api_key: `${process.env.REACT_APP_KEY}` });
  const { data: dataDetail, isSuccess } = useDataMoviesDetailQuery();

  // if (isSuccess) {
  //   setDetails(dataDetail);
  //   console.log(details, "ini data details");
  // }

  useEffect(() => {
    setDetails(dataDetail);
  }, [dataDetail]);

  console.log(details, "hasil detail state");
  console.log(dataDetail, "hasil detail");

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
                {details?.genres?.map((genre) => (
                  <div className="flex">
                    <p className="mb-4 italic text-white opacity-80 ">{genre?.name}</p>
                  </div>
                ))}

                <p className="mb-4 text-white opacity-80 ">{details?.overview}</p>
                <div className="flex justify-start gap-2">
                  <Button size="lg" color="red">
                    Watch Trailer
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

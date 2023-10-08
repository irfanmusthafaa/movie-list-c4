import React, { useEffect, useState } from "react";
import { Navbar, Typography, Button, IconButton, Input, Collapse } from "@material-tailwind/react";
import IconSearch from "../icons/icon-search.svg";
import { useNavigate } from "react-router-dom";

export const Nav = ({ color, variant }) => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    navigate("/search", { state: { query } });
  };

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar
      color={color}
      variant={variant}
      fullWidth={true}
      className="absolute z-10 top-0 left-0 right-0 py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none"
    >
      {/* <Navbar fullWidth="true" className=" bg-transparent absolute top-0 left-0 py-2 px-4 lg:px-8 lg:py-4 border-none"> */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="font-bold text-3xl text-red-500 cursor-pointer">
          Movielist
        </a>
        <div className="hidden lg:block">
          {/* <Input className="w-[25rem]" color="white" label="Search movies ..." icon={<img src={IconSearch} alt="icon search" />} /> */}
          <form className="relative flex h-10 w-[full] min-w-[200px] max-w-[24rem]" onSubmit={onSearch}>
            <input
              type="search"
              className=" peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              name="search"
            />
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-red-500 py-2 px-2.5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-red-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Search
            </button>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search Movie....
            </label>
          </form>
        </div>
        <div className="flex gap-4">
          <Button className="px-7 bg-transparent text-red-500 border-red-500 border-2 hidden lg:inline-block hover:opacity-75">
            <span>Login</span>
          </Button>
          <Button variant="gradient" color="red" className="px-7 hidden lg:inline-block hover:opacity-75">
            <span>Register</span>
          </Button>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000000" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto ">
          <div className="mt-3 w-full">
            <form className="relative flex h-10 w-[full] " onSubmit={onSearch}>
              <input
                type="search"
                className=" peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="search"
              />
              <button
                className="!absolute right-1 top-1 z-10 select-none rounded bg-red-500 py-2 px-2.5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-red-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Search
              </button>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search Movie....
              </label>
            </form>
          </div>

          <Button size="sm" fullWidth={true} className="bg-white text-red-500 border-red-500 border-2 my-4 hover:opacity-75">
            <span>Login</span>
          </Button>
          <Button variant="gradient" color="red" size="sm" fullWidth={true} className=" hover:opacity-75">
            <span>Register</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

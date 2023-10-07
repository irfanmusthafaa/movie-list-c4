import { useState } from "react";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const fetchDataMoviesDetail = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataMoviesDetailQuery = (options) => {
  const data = useLocation();
  const [ID, setID] = useState(data.state ? data.state.idMovie : "");
  console.log(ID, "IDD");

  return useQuery([`${API_ENDPOINT.DETAIL}/${ID}`, options], fetchDataMoviesDetail);
};

export { fetchDataMoviesDetail, useDataMoviesDetailQuery };

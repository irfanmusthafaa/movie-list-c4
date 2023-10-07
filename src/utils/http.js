import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

export default http;

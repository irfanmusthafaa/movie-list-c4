import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import "font-awesome/css/font-awesome.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterList } from "./routes/RouterList";

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterList />
    </QueryClientProvider>
  </React.StrictMode>
);

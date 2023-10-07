import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterList } from "./routes/RouterList";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterList />
    </QueryClientProvider>
  </React.StrictMode>
);

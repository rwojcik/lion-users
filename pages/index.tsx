import React from "react";
import { Home } from "../components/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

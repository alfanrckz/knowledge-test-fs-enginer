import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./stores/rootReducer.ts";
import { Provider } from "react-redux";

const queryClient = new QueryClient()

const store = configureStore({
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
       <QueryClientProvider client={queryClient} >
        <Provider store={store}>
          <App />
        </Provider>
       </QueryClientProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

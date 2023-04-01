import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateTransaction from "./pages/create-transaction";
import Home from "./pages/Home";
import TransactionHistory from "./pages/TransactionHistory";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/create-transaction"
          element={<CreateTransaction />}
        ></Route>
        <Route
          path="/transaction-history"
          element={<TransactionHistory />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

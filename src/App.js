import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/HomePage";
import Header from "./components/Header";
import Alert from "./components/Alert";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#14161a",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
};

export default App;

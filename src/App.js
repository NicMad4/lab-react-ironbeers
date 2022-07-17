// src/App.js
import "./App.css";
import React from 'react';
import BeerList from "./pages/Beers";
import Home from "./pages/Home";
import NewBeer from "./pages/New-beer";
import RandomBeer from "./pages/Random-beer";
import ThatBeer from "./pages/ThatBeer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/beers" element={<BeerList/>} />
          <Route path="/newBeer" element={<NewBeer/>} />
          <Route path="/randomBeer" element={<RandomBeer />} />
          <Route path="/beers/:beerId" element={<ThatBeer />} />
        </Routes>
      </BrowserRouter>
  </div>;
}
export default App;


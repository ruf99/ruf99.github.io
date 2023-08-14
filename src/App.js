import { NavBar } from "./NavBar";
import { BannerMain } from "./BannerMain";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerMain />
    </div>
  );
}

export default App;
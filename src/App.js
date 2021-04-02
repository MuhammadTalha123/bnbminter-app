import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import TotalBNB from "./TotalBNB";
import AnytimeBNB from "./AnytimeBNB";
import LockedBNB from "./LockedBNB";
import TotalRoi from "./TotalRoi";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TotalBNB />
      <AnytimeBNB />
      <LockedBNB />
      <TotalRoi />
      <Footer />
    </div>
  );
}

export default App;

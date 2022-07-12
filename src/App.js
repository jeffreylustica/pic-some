import React from "react";
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Photos from "./pages/Photos"
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App;

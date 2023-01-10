import './index.css'

import { React, useContext, createContext, useState, useEffect } from "react";

// React-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import Homepage from "./components/Homepage";

function App() {
  return (
      <BrowserRouter classname="relative">
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route
                path="/home"
                element={<Homepage />}
              />
            </Routes>
          </div>
          <div className="bg-gray-800">
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
import './index.css'

import { React, useContext, createContext, useState, useEffect } from "react";

// React-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import NewsList from "./components/NewsList";
import Homepage from "./components/Homepage";
import Mqtt from './components/Mqtt';

function App() {
  return (
      <BrowserRouter classname="relative">
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route 
                path='/'
                element={<Homepage/>}
              />
              <Route
                path="/home"
                element={<NewsList />}
              />
              <Route
                path='/mqtt'
                element={<Mqtt/>}
              >
              </Route>
            </Routes>
          </div>
          <div className="bg-gray-800">
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;

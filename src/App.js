import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home.js';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import TipsandTricks from './Pages/TipsandTricks.js';
import Mappage from './Pages/MapPage.js';
export default function App(){
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/tips" element={<TipsandTricks/>}/>
          <Route  path="/map" element={<Mappage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import {Link,Route,Routes} from "react-router-dom"
export default function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

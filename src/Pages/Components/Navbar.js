import React from "react"
import {Link} from "react-router-dom"
import {MdList} from "react-icons/md"
import "./Navbar.css"
export default function Nav(){
    const [navshow,setScreen]=React.useState(true);
    function changenav(){
        navshow? setScreen(false):setScreen(true)
    }
    return(
        <div className="Navbar">
            <div className="Navigation">
                <button onClick={changenav}><MdList/></button>
                <h1>HEALTHY GYMING!</h1>
            </div>
            <div className={navshow?"nav-hide":"nav-show"}>
                <a href=""><h4>Search Places</h4></a>
                <a href=""><h4>StopWatch</h4></a>
                <a href=""><h4>Add to Calendar</h4></a>
                <a href=""><h4>Tips and Tricks</h4></a>
            </div>
        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import "./footer.css"
import AddToCalendar from "./AddtoCalendar.js"
export default function Footer(){
    return(
        <div className="Footer">
            <div className="links">
                <ul>
                <li><a href="">Github</a></li>
                <li><a href="">LeetCode</a></li>
                <li><a href="">Twitter</a></li>
                </ul>
                <AddToCalendar/>
            </div>
            <hr></hr>
            <h3>Made By Mridul Tiwari</h3>
        </div>
    )
}
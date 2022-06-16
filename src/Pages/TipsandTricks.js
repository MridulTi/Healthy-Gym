import React from "react"
import {Link} from "react-router-dom"
import Footer from "./Components/Footer"
import Nav from "./Components/Navbar"
import Tips from "./Components/Tipscard"
export default function TipsandTricks(){
    return(
        <div>
            <Nav/>
            <Tips/>
            <Footer/>
        </div>
    )
}
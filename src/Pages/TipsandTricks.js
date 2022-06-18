import React from "react"
import {Link} from "react-router-dom"
import Footer from "./Components/Footer"
import Nav from "./Components/Navbar"
import Excercise from "./Components/Data/Excercise.js"
import Tips from "./Components/Tipscard"
import ExcerciseTime from "./Components/ExcerciseTime.js"
export default function TipsandTricks(){
    return(
        <div>
            <Nav/>
            <div>
                <Tips
                    carddata={Excercise}
                />
                <div><ExcerciseTime/></div>
            </div>
            <Footer/>
        </div>
    )
}
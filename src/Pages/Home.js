import React from "react"
import Nav from "./Components/Navbar.js"
import ReactDOM from "react-dom"
import StopWatch_Sec from "./Components/StopWatch_sec.js"
import Map_Sec from "./Components/Map-section.js"
import TipsCard from "./Components/Tipscard.js"
import Footer from "./Components/Footer.js"
export default function Home(){
    return(
        <div>
            <div>
                <Nav/>
            </div>
            <div className="Homepage">
                <div>
                    <Map_Sec/>
                </div>
                <div>
                    <TipsCard/>
                </div>
                <div>
                    <StopWatch_Sec/>
                </div>
                    <Footer/>
            </div>
            
        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card.js"
import {MdNavigateNext,MdNavigateBefore} from "react-icons/md"
import TipsCardData from "./Data/TipsCardData.js"
import "./SliderCard.css"
export default function Tips(props){
    const CardInfo=props.carddata;
    const CardData=CardInfo.map(Data=>{
        return(
            <div className="sliderData">
                <Card
                key={Data.id}
                {...Data}
                />
            </div>
        )
    })
    function slideleft(){
        let slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft-920;
    }
    function slideright(){
        let slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft+920;
    }
    return(
        <div className="Container">
            <div id="left" className="slider-icon" onClick={slideleft}><MdNavigateBefore/></div>
            <div className="slider" id="slider">
                {CardData}
            </div>
            <div id="right" className="slider-icon" onClick={slideright}><MdNavigateNext/></div>
        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import Card from "./Card.js"
import TipsCardData from "./TipsCardData.js"
import "./SliderCard.css"
export default function Tips(props){
    const CardData=TipsCardData.map(Data=>{
        return(
            <Card
                key={Data.id}
                {...Data}
            />
        )
    })
    return(
        <div className="Container">
            <div className="slidericon left"></div>
            <div className="slider">
                <div className="sliderData">
                    {CardData}
                </div>
            </div>
            <div className="slidericon right"></div>
        </div>
    )
}
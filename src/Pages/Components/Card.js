import React from "react"
import {Link} from "react-router-dom"
export default function Card(props){
    return(
        <div>
            <img src={props.image}></img>
            <h2>{props.Head}</h2>
            <p>{props.para}</p>
        </div>
    )
}
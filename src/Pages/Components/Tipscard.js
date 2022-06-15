import React from "react"
import {Link} from "react-router-dom"
export default function Tips(props){
    const [Card,setCard]=React.useState({
        image:props.image,
        Head:props.Head,
        para:props.para,
    })
    return(
        <div>
            {Card}
        </div>
    )
}
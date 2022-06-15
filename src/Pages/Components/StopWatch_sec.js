import React from "react"
import {} from "react-router-dom"
export default function StopWatch_Sec(){
    const [Hours,setHours]=React.useState("00");
    const [Minute,setMinute]=React.useState("00");
    const [Second,setSecond]=React.useState("00");
    return(
        <div>
            <h1>{Hours}:{Minute}:{Second}s</h1>
            <a>Hours</a>
            <a>Minutes</a>
            <a>seconds</a>
        </div>
    )
}
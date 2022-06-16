import React from "react"
import {} from "react-router-dom"
import "./stopwatch.css"
export default function StopWatch_Sec(){
    const [StartStop,setButton]=React.useState("Start");
    const [Time,setTime]=React.useState({
        Hour:0,
        Minute:0,
        Second:0
    })

    function changebuttontext(){
        if(StartStop=="Start"){
            setButton("Stop");
            count();
        }else if(StartStop=="Stop"){
            stopp();
            setButton("Start");
        }
    }
    function count(){
        setInterval(()=>{
            setTime(prevContent=>{
                return{
                    ...prevContent,
                    Second:Time.Second<60?Time.Second+=1:Time.Second=1,
                    Minute:Time.Second==60?Time.Minute+=1:Time.Minute=1,
                    Hour:Time.Hour==24?Time.Hour+=1:Time.Hour=0
                }
           
            })
        },1000)
        
    }
    function stopp(){
        setTime(prevContent=>{
            return{
                ...prevContent,
                Second:Time.Second,
                Minute:Time.Minute,
                Hour:Time.Hour
            }
        })
    }
    const StopWatch_Page=()=>{
        if(window.pathname=="/stopwatch"){
            return(
                <div>
                    <label>
                        <h1>{Time.Hour}h:{Time.Minute}m:{Time.Second}s</h1>
                    </label>
                </div>
            )
        }else{
            return;
        }
    }

    return(
        <div>
            <div className="stopwatch_widget">
                <h1>{Time.Hour}h:{Time.Minute}m:{Time.Second}s</h1>
                <div className="stopwatch_link">
                    <p value={Time.Hour}>Hours</p>
                    <p value={Time.Minute}>Minutes</p>
                    <p value={Time.Second}>seconds</p>
                </div>
            
                <button onClick={changebuttontext}>{StartStop}</button>
                <button>Reset</button>
                {StopWatch_Page}
            </div>
        </div>
        
    )
}
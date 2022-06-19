import React from "react"
import {} from "react-router-dom"
import "./stopwatch.css"
import Modal from "./modal";
export default function StopWatch_Sec(){
    const [openModal,setOpenModal]=React.useState(false);
    var interval=null;
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
        interval=setInterval(()=>{
            setTime(prevContent=>{
                return{
                    ...prevContent,
                    Second:Time.Second<60?Time.Second+=1:Time.Second=1,
                    Minute:Time.Minute==60?Time.Minute=1:(Time.Second==60?Time.Minute+=1:Time.Minute),
                }
           
            })
        },1000)
    }
    function stopp(){
        clearInterval(interval);
        setTime(prevContent=>{
            return{
                ...prevContent,
                Second:0,
                Minute:0,
                Hour:0
            }
        })
        interval=null; 
    }
    function reset(){
        clearInterval(interval);
        interval=null;
        setTime(prevContent=>{
            return{
                ...prevContent,
                Second:0,
                Minute:0,
                Hour:0
            }
        })
    }

    return(
        <div>
            <div><button className="openModalBtn" onClick={()=>{
                setOpenModal(true);
            }}>Set Time</button></div>
            {openModal && <Modal closeModal={setOpenModal} />}
            <div className="stopwatch_widget">
                <h1>{Time.Minute}m:{Time.Second}s</h1>
                <div className="stopwatch_link">
                    <p value={Time.Minute}>Minutes</p>
                    <p value={Time.Second}>seconds</p>
                </div>
                <button onClick={changebuttontext}>{StartStop}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        
    )
}
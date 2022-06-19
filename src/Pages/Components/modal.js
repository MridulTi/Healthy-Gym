import React from "react"
import "./modal.css"
export default function Modal({closeModal}){
    const [FormData,setFormData]=React.useState({
        Hour:null,
        Minute:null,
        Second:null
    })
    function handleChange(event){
        const {name,value}=event.target
        setFormData(prevContent=>{
            return{
                ...prevContent,
                [name]:value
            }
        })
    }
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={()=>{
                    closeModal(false)
                }}>X</button>
                <div className="Title">
                    <h1>Wanna Set Time?</h1>
                </div>
                <div className="Body">
                    <p>Here, you can set desired time for your excercise</p>
                </div>
                <div>
                    <div className="Time">
                    <input  placeholder="Hour" type="number" onChange={handleChange} name="Hour" value={FormData.Hour}/>
                        <input placeholder="Minute" type="number" onChange={handleChange} name="Minute" value={FormData.Minute}/>
                        <input placeholder="Second" type="number" onChange={handleChange} name="Second" value={FormData.Second}/>
                    </div>
                    <button className="submitbtn">Set</button>
                    
                </div>
            </div>
        </div>
    )
}
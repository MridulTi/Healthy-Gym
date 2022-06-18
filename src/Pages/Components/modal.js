import React from "react"
export default function Modal(){
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button>X</button>
                <div className="Title">
                    <h1>Wanna Set Time?</h1>
                </div>
                <div className="Body">
                    <p>Here, you can set desired time for your excercise</p>
                </div>
                <div className="Time">
                    <input onChange={handleChange} value="Hour"/>
                    <input onChange={handleChange} value="Minute"/>
                    <input onChange={handleChange} valye="Seconds"/>
                </div>
            </div>
        </div>
    )
}
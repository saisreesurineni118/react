import React from 'react'
import { useState } from 'react';
const CBCStateASSIGNMENT = () => {
        const [style, setStyle] = useState("light");
        const [text,setText]=useState("I am attending react class.");
    
        const changeStyle = () => {
            console.log("you just clicked");
            if (style !== "light") {
                setText("I am attending react class.");
                setStyle("light");
                
            }
            else{
                setText("Thanks for listening");
                setStyle("dark");
            } 
        };
        return (
            <div className="App">
                <h1 className="geeks">CBCStateASSIGNMENT</h1>
                <h3 className={style}>
                    {text}
                </h3>
                <button
                    className="button"
                    onClick={changeStyle}
                >
                    Click Here!
                </button>
            </div>
        );
    }


export default CBCStateASSIGNMENT
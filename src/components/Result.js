import React, { useState, useEffect } from 'react'
import { Availability } from './Availability';

export const Result = () => {
    const [score, setScore] = useState([]);
    window.onload = () => {
        const names = ["Availability", "Integrity", "Confidentiality", "Privacy"];
        names.forEach((name) => { if (sessionStorage.getItem(name) === null) sessionStorage.setItem(name, "Skipped"); })

        setScore([sessionStorage.getItem('Availability'),
        sessionStorage.getItem('Confidentiality'),
        sessionStorage.getItem('Integrity'),
        sessionStorage.getItem('Privacy')
        ]);
        setMeter('A',sessionStorage.getItem('Availability'));
        setMeter('C',sessionStorage.getItem('Confidentiality'));
        setMeter('I',sessionStorage.getItem('Integrity'));
        setMeter('P',sessionStorage.getItem('Privacy'));
    }
    function setMeter(meter_name, value){
        const meter= document.querySelector(`.${meter_name}`)
        if(value<0|| value>1 || value==undefined || value=="skipped" ||isNaN(parseFloat(value))){
            console.log("skipped");
            return 0;
        }
        else{
        value=parseFloat(value).toFixed(2);
        console.log(value);
        meter.querySelector(`.${meter_name}-fill`).style.transform= `rotate(${value/2.00}turn)`;
        let text=meter.querySelector(`.${meter_name}-cover`).innerText;
        meter.querySelector(`.${meter_name}-cover`).innerText =text+`: ${(value*100)}%`
        if(value>=0 && value<0.4){meter.querySelector(`.${meter_name}-fill`).style.background="#33b757";}
        else if(value>=0.4 && value<0.7){meter.querySelector(`.${meter_name}-fill`).style.background="#de8108";}
        else if(value>=0.7){meter.querySelector(`.${meter_name}-fill`).style.background="#c31212";}
        }
    }
    useEffect(()=>{
      
    })
  
    return (<>
        <div className="main">
            <h2>Results:</h2>
            <ul>
                <li>Availability: {parseFloat(score[0]).toFixed(2)}</li>
                <li>Confidentiality: {parseFloat(score[1]).toFixed(2)}</li>
                <li>Integrity: {parseFloat(score[2]).toFixed(2)}</li>
                <li>Privacy: {parseFloat(score[3]).toFixed(2)}</li>
            </ul>
        </div>
        <div className="container">
            <div className="A">
                <div className="A-body">
                    <div className="A-fill"></div>
                    <div className="A-cover">Availability</div>
                </div>
            </div>

            <div className="C">
                <div className="C-body">
                    <div className="C-fill"></div>
                    <div className="C-cover">Confidentiality</div>
                </div>
            </div>

            <div className="I">
                <div className="I-body">
                    <div className="I-fill"></div>
                    <div className="I-cover">Integrity</div>
                </div>
            </div>

            <div className="P">
                <div className="P-body">
                    <div className="P-fill"></div>
                    <div className="P-cover">Privacy</div>
                </div>
            </div>
        </div>
    </>
    )
}

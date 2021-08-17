import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom"
export const Availability = () => {

let history=useHistory();
    function setStorage(e,link,submit=true){
        e.preventDefault();
        let score=0;
        for(let i=0; i< Questions.length; i++){
            let name=document.querySelector('input[name="'+`${Questions[i].id}`+'"]:checked');
            if(name ==null && !submit){continue;}
            else if(name==null && submit){
            const message= document.createElement('p');
            message.setAttribute("id","message");
            const node=document.createTextNode("Please answer all the questions");
            message.appendChild(node);
            document.getElementById("root").appendChild(message);

            setTimeout(() => {
                const message=document.getElementById("message");
                message.classList.add("remove-message");
            },1000);
            setTimeout(()=>{
                const message=document.getElementById("message");
                message.remove();
            },3000);
            return 0;}
            else{
                sessionStorage.setItem(`Availability${Questions[i].id}`, name.value);
                if(name.value=="No")score=score+(Questions[i].impact*Questions[i].probability);
            }
        }
        sessionStorage.setItem('Availability',score/Questions.length);
        window.location=link;
    }


    const [Questions,SetQuestions]=useState([
        {question:"Is there a defined way to know who is the person of contact to start a recovery procedure for emergency situations ?",
        impact:0.9,
        probability:0.9,
        id:1},
        {question:"Does the maintenance manual specify how to configure after system restart/unforeseen shutdown?",
        impact:0.9,
        probability:0.9,
        id:2},
        {question:"Are backups frequently performed?",
        impact:0.9,
        probability:0.9,
        id:3},
        {question:"Are long backups are available?",
        impact:0.9,
        probability:0.9,
        id:4},
        {question:"Is there a system restore points, redundant systems, dynamic configuration system change such as isolation of systems, fall back to manual operation, graceful degradation?",
        impact:0.9,
        probability:0.9,
        id:5},
        {question:"Is the antimalware application in place?",
        impact:0.9,
        probability:0.9,
        id:6},
        {question:"Are the network/system equipment regularly scanned for malware?",
        impact:0.9,
        probability:0.9,
        id:7},
        {question:"Are there any contingency plan if the network/ system is contaminated by malware?",
        impact:0.9,
        probability:0.9,
        id:8},
        {question:"Are network equipments regularly scanned for malware?",
        impact:0.9,
        probability:0.9,
        id:9},
        {question:"Is it possible to revert the configuration to a preset time, if it is found that there has been attempts of unauthorized changes?",
        impact:0.9,
        probability:0.9,
        id:10}
    ])
    window.onload=()=>{
        for(let i=0; i< Questions.length; i++){
            if(sessionStorage.getItem(`Availability${Questions[i].id}`)){
                let names=document.getElementsByName(Questions[i].id);
                for(let j=0; j<3;j++){if(names[j].value==sessionStorage.getItem(`Availability${Questions[i].id}`)){
                    names[j].setAttribute("checked","True");
                }}
                
            }
        }
    }
    return (
    
        <div className="main">
            <h1>Availability</h1>
            <button className="skip center"><Link to="/confidentiality">Skip this section</Link></button>
            <form id="Availability">
            {Questions.map((question)=>(<div key={question.id}>
                <div className="questions">{question.question}</div>
                <label><input type="radio" name={question.id} value="Yes" id={question.id+"Yes"} required></input>Yes</label><br/>
                <label><input type="radio" name={question.id} value="No" id={question.id+"No"}></input>No</label><br/>
                <label><input type="radio" name={question.id} value="N/A" id={question.id+"N/A"}></input>N/A</label><br/>
                </div>
    ))
            }
            <div className="form-buttons"><button onClick={(e)=>{setStorage(e,"/confidentiality")}}>Next</button></div>
             
            </form>
        </div>
    )
}

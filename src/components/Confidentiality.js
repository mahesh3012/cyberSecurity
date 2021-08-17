import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom"

export const Confidentiality = () => {
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
                sessionStorage.setItem(`Confidentiality${Questions[i].id}`, name.value);
                if(name.value=="No")score=score+(Questions[i].impact*Questions[i].probability);
            }
        }
        sessionStorage.setItem('Confidentiality',score/Questions.length);
        window.location=link;
    }
    const [Questions,SetQuestions]=useState([
        {question:"Is there a cybersecurity awareness training policy in place?",
        impact:0.75,
        probability:0.75,
        id:1},
        {question:"Is there any policy document that obliges to adhere to the cybersecurity policy, password management and sharing of sensitive data?",
        impact:0.75,
        probability:0.75,
        id:2},
        {question:"Is there a policy for revoking access rights for employees once either the agreement is finished or terminated?",
        impact:0.75,
        probability:0.75,
        id:3},
        {question:"Is infrastructure secured through good door locks from unauthorized access?",
        impact:0.75,
        probability:0.75,
        id:4},
        {question:"Do you have CCTVs in required places?",
        impact:0.75,
        probability:0.75,
        id:5},
        {question:"Is a list of authorized users maintained for each software or application?",
        impact:0.75,
        probability:0.75,
        id:6},
        {question:"Do procedures exist to protect documents, computer media (e.g., tapes, disks, CD-ROMs,etc.), from unauthorized disclosure, modification, removal, and destruction?",
        impact:0.75,
        probability:0.75,
        id:7},
        {question:"Is sensitive data encrypted when stored on laptop, desktop and server hard drives, flash drives, backup tapes, etc.?",
        impact:0.75,
        probability:0.75,
        id:8},
        {question:"Is the communication between network equipment encrypted?",
        impact:0.75,
        probability:0.75,
        id:9},
        {question:"Are necessary steps taken to avoid sensitive information transfer to external recipients?",
        impact:0.75,
        probability:0.75,
        id:10},
        {question:"Are employees required to sign the non-disclosure agreement annually?",
        impact:0.75,
        probability:0.75,
        id:11},
        {question:"Does the maintenance manuals specify how to configure after system restart/unforeseen shutdown?",
        impact:0.75,
        probability:0.75,
        id:12}
    ])
    window.onload=()=>{
        for(let i=0; i< Questions.length; i++){
            if(sessionStorage.getItem(`Confidentiality${Questions[i].id}`)){
                let names=document.getElementsByName(Questions[i].id);
                for(let j=0; j<3;j++){if(names[j].value==sessionStorage.getItem(`Confidentiality${Questions[i].id}`)){
                    names[j].setAttribute("checked","True");
                }}
                
            }
        }
    }

    return (
        <div className="main">
            <h1>Confidentiality</h1>
            <button className="skip center"><Link to="/integrity">Skip this section</Link></button>
            <form id="Confidentiality">
            {Questions.map((question)=>(<div key={question.id}>
                <div className="questions">{question.question}</div>
                <label><input type="radio" name={question.id} value="Yes" id={question.id+"Yes"} required></input>Yes</label><br/>
                <label><input type="radio" name={question.id} value="No" id={question.id+"No"}></input>No</label><br/>
                <label><input type="radio" name={question.id} value="N/A" id={question.id+"N/A"}></input>N/A</label><br/>
                </div>
    ))
            }
            <div className="form-buttons"><button onClick={(e)=>{setStorage(e,"/availability",false)}} className="left">Previous</button>
             <button onClick={(e)=>{setStorage(e,"/integrity")}} className="right">Next</button></div>
            
            </form>
        </div>
    )
}

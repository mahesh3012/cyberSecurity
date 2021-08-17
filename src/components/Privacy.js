import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom"

export const Privacy = () => {
//for setting the values in storage
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
            sessionStorage.setItem(`Privacy${Questions[i].id}`, name.value);
            if(name.value=="No")score=score+(Questions[i].impact*Questions[i].probability);
        }
    }
    sessionStorage.setItem('Privacy',score/Questions.length);
    window.location=link;
}
    const [Questions,SetQuestions]=useState([
        {question:"Is a record maintained of people having access to various data assets?",
        impact:0.5,
        probability:0.5,
        id:1},
        {question:"Does the organization has the processes and resources in place to support data access requests from individuals?",
        impact:0.5,
        probability:0.5,
        id:2},
        {question:"Are the privacy notices and privacy policies updated?",
        impact:0.5,
        probability:0.5,
        id:3},
        {question:"Does the organization incorporate ‘privacy by design’ into IT systems?",
        impact:0.5,
        probability:0.5,
        id:4},
        {question:"Have a Privacy Impact Assessment been conducted?",
        impact:0.5,
        probability:0.5,
        id:5},
        {question:"Has the organization identified and inventoried the data assets and processes used to process and store personal data?",
        impact:0.5,
        probability:0.5,
        id:6},
    ])
    window.onload=()=>{
        for(let i=0; i< Questions.length; i++){
            if(sessionStorage.getItem(`Privacy${Questions[i].id}`)){
                let names=document.getElementsByName(Questions[i].id);
                for(let j=0; j<3;j++){if(names[j].value==sessionStorage.getItem(`Privacy${Questions[i].id}`)){
                    names[j].setAttribute("checked","True");
                }}
                
            }
        }
    }

    return (
        <div className="main">
            <h1>Privacy</h1>
            <button className="skip center" onClick={ ()=> (window.location="/result")}>Skip this section</button>
            <form id="Integrity">
            {Questions.map((question)=>(<div key={question.id}>
                <div className="questions">{question.question}</div>
                <label><input type="radio" name={question.id} value="Yes" id={question.id+"Yes"} required></input>Yes</label><br/>
                <label><input type="radio" name={question.id} value="No" id={question.id+"No"}></input>No</label><br/>
                <label><input type="radio" name={question.id} value="N/A" id={question.id+"N/A"}></input>N/A</label><br/>
                </div>
    ))
            }
            <div className="form-buttons"><button onClick={(e)=>{setStorage(e,"/integrity",false)}}>Previous</button>
            <button onClick={(e)=>{setStorage(e,"/result")}}>Next</button></div>
             
            </form>
        </div>
    )
}

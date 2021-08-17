import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"

export const Integrity = () => {
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
                sessionStorage.setItem(`Integrity${Questions[i].id}`, name.value);
                if(name.value=="No")score=score+(Questions[i].impact*Questions[i].probability);
            }
        }
        sessionStorage.setItem('Integrity',score/Questions.length);
        window.location = link;
    }
    const [Questions,SetQuestions]=useState([
        {question:"Is it possible to trace the user authorization actions?",
        impact:0.9,
        probability:0.9,
        id:1},
        {question:"Is the policy of connecting, carrying and usage of data removable data sticks strictly enforced?",
        impact:0.5,
        probability:0.5,
        id:2},
        {question:"Are the documents pertaining to the configuration changes versioned on who made the changes, what changes have been made and whom it needs to be reported?",
        impact:0.5,
        probability:0.5,
        id:3},
        {question:"Are the sources from which the patches are downloaded verified?",
        impact:0.5,
        probability:0.5,
        id:4},
        {question:"Is there a process to log events?",
        impact:0.5,
        probability:0.5,
        id:5},
    ])
    window.onload=()=>{
        for(let i=0; i< Questions.length; i++){
            if(sessionStorage.getItem(`Integrity${Questions[i].id}`)){
                let names=document.getElementsByName(Questions[i].id);
                for(let j=0; j<3;j++){if(names[j].value==sessionStorage.getItem(`Integrity${Questions[i].id}`)){
                    names[j].setAttribute("checked","True");
                }}
                
            }
        }
    }

    return (
        <div className="main">
            <h1>Integrity</h1>
            <button className="skip center"><Link to="/privacy">Skip this section</Link></button>
            <form id="Integrity">
            {Questions.map((question)=>(<div key={question.id}>
                <div className="questions">{question.question}</div>
                <label><input type="radio" name={question.id} value="Yes" id={question.id+"Yes"} required></input>Yes</label><br/>
                <label><input type="radio" name={question.id} value="No" id={question.id+"No"}></input>No</label><br/>
                <label><input type="radio" name={question.id} value="N/A" id={question.id+"N/A"}></input>N/A</label><br/>
                </div>
    ))
            }
            <div className="form-buttons">
            <button onClick={(e)=>{setStorage(e,"/confidentiality",false)}}>Previous</button>
            <button  onClick={(e)=>{setStorage(e,"/privacy")}}>Next</button>
            </div>
            </form>
        </div>
    )
}

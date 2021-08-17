import React from 'react'
import contact from "../images/contact.svg"
export const Contact = () => {

    window.addEventListener("mousemove", revealLeft);
    function revealLeft(){
        let reveals= document.querySelectorAll('.reveal-left');

        for(let i =0;i<reveals.length;i++){
            var windowHeight=window.innerHeight;
            var revealTop=reveals[i].getBoundingClientRect().top;
            var revealPoint=150;

            if(revealTop< windowHeight-revealPoint){
                reveals[i].classList.add('active-left');
            }
            else{
                reveals[i].classList.remove('active-left');
            }
        }
    }

    window.addEventListener("mousemove", revealRight);
    function revealRight(){
        let reveals= document.querySelectorAll('.reveal-right');

        for(let i =0;i<reveals.length;i++){
            var windowHeight=window.innerHeight;
            var revealTop=reveals[i].getBoundingClientRect().top;
            var revealPoint=150;

            if(revealTop< windowHeight-revealPoint){
                reveals[i].classList.add('active-right');
            }
            else{
                reveals[i].classList.remove('active-right');
            }
        }
    }
    return (
        <div className="main">
            <h2>Contact us</h2>
            <p>Feel free to contact us. Your suggestions, remarks, and queries are of atmost importance to us.<br/> Fill the form below and we shall contact you soon. </p>
            <div className="contact-body">
            <form className="contact reveal-left">
                <h4><u>Contact form</u></h4>
                <input type="text" placeholder="Full Name *" required/>
                <input type="email" placeholder="Email-id *" required/>
                <input type="text" placeholder="Name of the Organization"/>
                <textarea rows="4" cols="50" placeholder="Suggestions/Queries/Remarks *"/>
                <button type="Submit" className="center">Submit</button>
            </form>
            <img src={contact} alt="contact_pic" className="reveal-right"/>
            </div>
        </div>
    )
}

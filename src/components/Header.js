import React from 'react'
import {
    Link
} from "react-router-dom"
export const Header = () => {

function onScroll(){
    const scrollOffset= window.pageYOffset;
    const menu = document.querySelector(".menu");

    if(scrollOffset >20){
        menu.classList.add("move");
    }
    else{
        menu.classList.remove("move");
    }
    shrinkNavbar();
}
function shrinkNavbar(){
    const scrollOffset=window.pageYOffset;
    const navbar=document.querySelector(".navbar");
    const padding=scaledown(scrollOffset, 0,50,20,5);
    navbar.style.paddingTop=`${padding}px`;
    navbar.style.paddingBottom=`${padding}px`;    
}
function scaledown(t,t1,t2,start,end){
    if(t<t1){
        return start;
    }
    else if(t>t2){
        return end;
    }
    else{
        const normalize=(t-t1)/(t2-t1);
        const scale= normalize*(end-start);

        return start+scale;
    }
}
window.addEventListener("scroll",onScroll);
    return (
        <div className="navbar">
            <div className="logo">Logo</div>
            <div className="name">ICAP-test</div>
            <div className="menu">
                <Link to="/"><div>Home</div></Link>
                <Link to="/survey"><div>Survey</div></Link>
                <Link to="/about"><div>About</div></Link>
                <Link to="/contact"><div>Contact us</div></Link>
            </div>
        </div>
    )
}

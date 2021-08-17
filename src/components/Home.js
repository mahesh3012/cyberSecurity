import React from 'react'
import {
Link
  } from "react-router-dom"
import home_image from "../images/security.svg"
export const Home = () => {
    window.addEventListener("scroll", reveal);
    function reveal(){
        let reveals= document.querySelectorAll('.reveal');

        for(let i =0;i<reveals.length;i++){
            var windowHeight=window.innerHeight;
            var revealTop=reveals[i].getBoundingClientRect().top;
            var revealPoint=150;

            if(revealTop< windowHeight-revealPoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }

    return (<>
    <img src={home_image} alt="CyberSecurityImage" id="home_image"/>
        <div className="main">    
            <h2>ICAP Test</h2>
        <p>
            We are performing Gap Analysis for Firms using a questionnaire Survey. This site will
            determine the impact on the firm in terms of Integrity, Confidentiality,
            Availability and Privacy (thus ICAP) based on the Security Requirements Questions which are provided by us.
        </p>
        <Link to ='/survey'><span>Take Gap Analysis Survey</span></Link>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum soluta quae maxime molestias dolorem, autem cum possimus. Voluptates, quibusdam. Quam at, tempora provident unde ipsam sit optio omnis commodi autem?
        Ut aliquam placeat, fugiat eaque esse harum, laboriosam distinctio voluptate quidem nesciunt ad repellendus quasi exercitationem nam. Eveniet magni ad quibusdam corporis laudantium soluta itaque, debitis dolorem iste possimus voluptate.
        Sapiente, rem! Nesciunt, commodi deserunt explicabo eos quas mollitia earum, exercitationem atque fuga, dolor inventore placeat vitae sint amet. Tenetur nostrum debitis optio iste saepe minus eaque accusantium laudantium quas.
        Necessitatibus pariatur nulla est magnam unde id explicabo earum voluptas modi. Soluta quia, at itaque, molestiae sit, accusantium eum consectetur quae tempora animi aspernatur laudantium voluptatibus minima perspiciatis ut quidem.
        Odit quaerat sunt commodi, rem aliquam, expedita dolorum, dicta tempora necessitatibus libero autem nulla vitae enim nobis beatae quia sit. Quisquam numquam nemo alias delectus, amet dolorem? Fugiat, consectetur doloribus.
        Laboriosam magnam aspernatur maiores mollitia fuga unde adipisci vitae nemo deleniti nulla consequuntur optio doloremque quas modi quos eligendi iure, quasi temporibus assumenda error repudiandae. Repudiandae fugit amet tempora recusandae.
        A assumenda beatae eveniet atque adipisci nisi sequi voluptatem numquam illum enim? Perspiciatis, vel nam. Quia, non vero! Ducimus doloribus accusantium delectus iusto vero temporibus quis earum modi illum ab.
        Et impedit repellat libero rem accusantium, esse id, molestiae numquam quis eum minima hic tenetur dolor inventore excepturi accusamus dolorum itaque sint voluptate ut delectus ex cupiditate facere labore. Voluptatibus?
        Nobis modi dolorem dolore sed, possimus consequatur optio numquam amet repellendus perspiciatis facilis et corporis praesentium autem earum a? Animi expedita amet modi ducimus odit cupiditate excepturi saepe explicabo possimus!
        Velit, suscipit? Optio quaerat, asperiores magni ad ea facilis maiores dolor impedit minus ut eveniet alias enim a fugiat! Perferendis adipisci doloremque repudiandae, assumenda commodi tempora. Corrupti consequuntur nisi deleniti.</div>
        </div>
        <div className="container reveal">
            <div className="card"><h3>Integrity</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum excepturi harum, cupiditate dolor blanditiis sit, assumenda nulla doloribus distinctio quod cumque provident architecto cum.</p></div>
            <div className="card"><h3>Confidentiality</h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, recusandae. Voluptatem officiis aut totam iste suscipit assumenda deleniti, minima sed doloremque at. Numquam, neque sint!</div>
            <div className="card"><h3>Availability</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos delectus quas, at molestias, voluptatibus facere repellat maxime ad nesciunt exercitationem, beatae esse accusantium laboriosam?</div>
            <div className="card"><h3>Privacy</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rerum quis iusto, aut quibusdam architecto, libero exercitationem asperiores, est beatae hic eveniet qui omnis tenetur.</div>
        </div>
        <div className="main">
        <Link to="/availability"><button className="center test-button" onClick={()=>{ sessionStorage.clear();}}>Take ICAP-test</button></Link>
            <h2>Aim</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus quaerat, aspernatur officiis quos fuga quia error magnam provident. Odit consequuntur iusto amet in earum error, ab totam iure consequatur!
            Vitae quas accusantium possimus natus labore perferendis nulla modi quidem, illum at itaque, incidunt quae cupiditate aliquid provident deserunt cumque quo ratione aspernatur beatae quaerat sint, ut magni pariatur. Temporibus.
            Placeat fugiat vero architecto ex, quod quam maxime necessitatibus cum porro dolor rerum unde provident dolorem, magni quisquam iure at natus autem perferendis et error quae, eaque fuga. Quo, nobis!
            Esse unde illum odio consequatur est mollitia exercitationem, rem sed ullam incidunt labore deserunt cumque inventore, necessitatibus fuga error, natus perspiciatis voluptate minus ipsum molestiae quasi asperiores? Laboriosam, ad sit.</p>
        </div>
        </>
    )
}

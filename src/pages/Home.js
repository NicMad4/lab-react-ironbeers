import React from "react";
import {Link} from "react-router-dom"
import imgbeers from "../assets/imgbeers.png";
import imgnewbeer from "../assets/imgnewbeer.png";
import imgrandombeer from "../assets/imgrandombeer.png";


  
function Home() {
   return (
    <div id="home">

      <Link to={`/beers`}>
      <img src={imgbeers} alt=""/>
      </Link>
      <h1>All Beers</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
       Dolores, ex temporibus veritatis facere, recusandae,<br></br> 
       id dolore possimus explicabo deleniti fugiat cupiditate odit<br></br> 
       cumque labore vero doloremque officiis odio quos tenetur.</p>
      
      
      <Link to={`/randomBeer`}>
      <img src={imgrandombeer} alt=""/>
      </Link>
      <h1>Random Beer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
       Dolores, ex temporibus veritatis facere, recusandae,<br></br> 
       id dolore possimus explicabo deleniti fugiat cupiditate odit<br></br> 
       cumque labore vero doloremque officiis odio quos tenetur.</p>
       

       <Link to={`/newBeer`}>
       <img src={imgnewbeer} alt=""/>
       </Link>
      <h1> New Beer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
       Dolores, ex temporibus veritatis facere, recusandae,<br></br> 
       id dolore possimus explicabo deleniti fugiat cupiditate odit<br></br> 
       cumque labore vero doloremque officiis odio quos tenetur.</p>
       
    </div>
  );
}

export default Home;
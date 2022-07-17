import {Link,useParams} from "react-router-dom"
import gohome from "../assets/gohome.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react"

function ThatBeer() {
  const [thatBeer, setthatBeer] = useState([]);
  const params = useParams();
  console.log('hola',params);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => {
        if(!response.data){
            console.log('error API not found')
        }
        console.log("detail", response.data);
        setthatBeer(response.data);
      })
  }, []);

    return (

      <div>
      <header>
        <Link to={"/"}>
          <img src={gohome} alt='gohome' />
        </Link>
      </header>
        <div className="thatBeer">
          <img id='onebeer' src={thatBeer.image_url} alt='gohome'></img>
          <h2>{thatBeer.name}</h2>
          <h3>{thatBeer.tagline}</h3>
          <p className="brewed">First brewed: {thatBeer.first_brewed} </p>
          <p className="attenuation">attenuation level: {thatBeer.attenuation_level}</p>
          <p className="description">Description: {thatBeer.description} </p>
          <p>By:{thatBeer.contributed_by}</p>
        </div>
      
    </div>

    //  <div>
    //   <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
    //   <div key={params.beerId} className="card">
          
    //       <p>Price: {thatBeer.name}</p>
    //     </div>
 
    //  </div>
   );
 }
 
 export default ThatBeer;
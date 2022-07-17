
import {Link,useParams} from "react-router-dom"
import gohome from "../assets/gohome.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react"

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  const params = useParams();
  console.log('hola',params);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        
        setRandomBeer(response.data);
      })
  }, []);

    return (

      <div>
      <header>
        <Link to={"/"}>
          <img src={gohome} alt='gohome' />
        </Link>
      </header>
        <div className="cervezaRandom">
          <img id='onebeer' src={randomBeer.image_url} alt='gohome'></img>
          <h2>{randomBeer.name}</h2>
          <h3>{randomBeer.tagline}</h3>
          <p className="brewed">First brewed: {randomBeer.first_brewed} </p>
          <p className="attenuation">attenuation level: {randomBeer.attenuation_level}</p>
          <p className="description">Description: {randomBeer.description} </p>
          <p>By:{randomBeer.contributed_by}</p>
        </div>
      
    </div>
   );
 }
 
 export default RandomBeer;
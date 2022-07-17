import React from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import gohome from "../assets/gohome.jpg";

export default class BeerList extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        const beers = res.data;
        this.setState({ beers: beers });
      })
  }

  render() {
    return (
      
    <ul>
         <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
        { this.state.beers.map(beer => 
     <li>
        <div className="container" key={beer._id}>

        </div>
        <Link to={`/Beers/${beer._id}`}><img id='beers'
         src={beer.image_url} alt={beer.name}/></Link>
        
         <div className="beersInfo">
            <h2>{beer.name}</h2> 
            <h3>{beer.tagline}</h3>
            
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Created by:{beer.contributed_by}</p>
          </div>
                                       
      </li>)}
    <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
    </ul>
      )
    
  }
}
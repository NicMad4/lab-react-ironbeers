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
        { this.state.beers.map(beer => <li><Link to={`/beers/:beerId`}><img id='beers'
         src={beer.image_url} alt=""/></Link> <h3>{beer.name}</h3>
         <p>{beer.tagline}</p><p>Created by:{beer.contributed_by}</p></li>)}
      </ul>
      
      )
    
  }
}
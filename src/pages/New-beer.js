// import {Link} from "react-router-dom"
// import gohome from "../assets/gohome.jpg";
// function NewBeer() {
//     return (
//      <div>
//       <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
//       <p>new Beer</p>
 
//      </div>
//    );
//  }
 
//  export default NewBeer;
import gohome from "../assets/gohome.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline , setTagline ] = useState("");
  const [description , setDescription ] = useState("");
  const [firstBrewed , setFirstBrewed] = useState("");
  const [brewersTips , setBrewersTips] = useState("");
  const [attenuationLevel , setAttenuationLevel] = useState(0);
  const [contributedBy , setContributedBy ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name: name,tagline: tagline,
      description: description,firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel, 
      contributedBy: contributedBy };

    axios.post(apiURL, body).then((response) => {
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel (0);
      setContributedBy("");

      navigate("/");
    });
  };

  return (
    <div className="AddNewBeer">
      <h3>Add New Beer</h3>

      <form onSubmit={handleSubmit}>
        <label>Name <br></br> </label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
      
        <label>Tagline<br></br></label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
      <br></br>
        <label>Description<br></br></label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      <br></br>
        <label>First Brewed<br></br></label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
      <br></br>
        <label>Attenuation Level <br></br></label>
        <input
          type="number"
          name="price"
          onChange={(e) => setAttenuationLevel (e.target.value)}
          value={attenuationLevel }
        />
       <br></br>
        <label>Contributed By<br></br></label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        <br></br>
        <br></br>
        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default NewBeer;

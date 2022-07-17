import {Link} from "react-router-dom"
import gohome from "../assets/gohome.jpg";

function RandomBeer() {
    return (
     <div>
      <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
      <p>Random Beer</p>
 
     </div>
   );
 }
 
 export default RandomBeer;
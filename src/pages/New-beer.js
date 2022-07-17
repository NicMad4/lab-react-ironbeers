import {Link} from "react-router-dom"
import gohome from "../assets/gohome.jpg";
function NewBeer() {
    return (
     <div>
      <Link to={`/`}><img src={gohome} alt="homepage"/></Link>
      <p>new Beer</p>
 
     </div>
   );
 }
 
 export default NewBeer;
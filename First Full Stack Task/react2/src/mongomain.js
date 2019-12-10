import React from 'react';
import Allrecords from "./mongoshowall.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Showall from "./mongoshowall.js"


export default class MongotaskmainComponent extends React.Component{


render(){
  return(
        <div>
          <Router>

                <Link to="/showall"> Show Records</Link>
                <br></br>
                <div>
                    <Route exact path="/showall" component={Showall}/>
                    
                </div>
            </Router>

          </div>

  )
}
}
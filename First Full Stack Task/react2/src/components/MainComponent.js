import React from 'react';
import Allrecords from "../components/ShowRecordsComponent.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateUserComponent from "../components/CreateUserComponent.js"
import ShowRecords from "../components/ShowRecordsComponent.js"
import LoginComponent from "../components/LoginComponent.js"

export default class MainComponent extends React.Component{


render(){
  return(
        <div>
          <Router>
                
                <Link  to="/Homepage"> Homepage </Link>
                <br></br>
                <Link to="/Createuser"> Create New User </Link>
                <br></br>
                <Link to="/Login"> Log In </Link>
                <div>
                    <Route exact path="/Createuser" component={CreateUserComponent}/>
                    <Route exact path="/Login" component={LoginComponent}/>
                    <Route exact path="/Showrecords" component={ShowRecords}/>
                    
                </div>
            </Router>

          </div>

  )
}
}
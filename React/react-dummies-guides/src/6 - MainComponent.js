import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    // These 2 must be imported into the Main Component every time

import CreateUserComponent from "../components/CreateUserComponent.js"
import ShowRecords from "../components/ShowRecordsComponent.js"
import LoginComponent from "../components/LoginComponent.js"
    // These 3 are importing the CLasses from each of the Files that you have made a component in
        // eg ShowRecords is the class wihtin the ShowRecordsComponent.js file

export default class MainComponent extends React.Component{
    // This is needed in every Main Component class to enable it to be referenced in the index.js

render(){

    // Any functions/code would go here, but as this is simply the homepage, there is no code
    // needed, as it is a simple display with links to take you to the other pages
  return(
        // The BrowserRouter Import above allows you to use the Router tag below
        // The Link tag inputs a Hyperlink and allows you to specify where it goes with "/xyz"
        // The Route exact path must be 
        // The component={} - Must match exactly with the Class name within the relevant file
        <div>
          <Router>
                <Link  to="/Homepage"> Homepage </Link>
                <br></br>
                <Link to="/Createuser"> Create New User </Link>
                <br></br>
                <Link to="/Login"> Log In </Link>
                <br></br>
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
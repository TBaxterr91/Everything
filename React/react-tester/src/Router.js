import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends React.Component{
    render(){
        return <h1> This is HOMEPAGEEEE</h1>
    }
}

class Aboutus extends React.Component{
    render(){
        return <h1> This is About Us PAGE</h1>
    }
}



export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1> Routing Application </h1>
            <Router>
                <Link to="/Homepage"> Homepage </Link>
                <Link to="/Aboutus"> About Us </Link>
                <div>
                    <Route exact path="/Homepage" component={Homepage}/>
                    <Route exact path="/Aboutus" component={Aboutus}/>
                </div>
            </Router>
        </div>
        )
    }
}
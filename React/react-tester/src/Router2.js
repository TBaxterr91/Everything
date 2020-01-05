import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Homepage extends React.Component{
    render(){
        return <h1> This is HOMEPAGEEEE</h1>
    }
}
class Aboutus extends React.Component{
    render(){
        return (
        <h1> This is About Us PAGE</h1>
        )
    }
}
export default class App extends React.Component{
    state={
        records:[
            {
                regno:1,
                name:'Tom',
                marks:100
            },
            {
                regno:2,
                name:'Bob',
                marks:50
            },
            {
                regno:3,
                name:'Paul',
                marks:150
            }
        ]
    }
            // When using the fat arrow => do not need to use the keyword 'function' - Fat arrow is used with
            //Anonymous functions
            // eg () => {console.log ("Hello")}   or     var ABC = () => { console.log("Examplee")}
            // When using FAT ARROW syntax, do not need to use Constructor or import super()
            // ALSO do not need to bind anything as not defined within the constructor
    addData = () => {
        let regNo = document.getElementById("regNo").value
        let name = document.getElementById("name").value
        let marks = document.getElementById("marks").value
        this.state.records.push({regno:regNo, name:name, marks:marks})
        this.setState({
            records : this.state.records
        });
    }
    deleteData = (regNo) => {
        this.setState({
            records : this.state.records.filter(record => record.regno != regNo)
        });
    }
    searchData = () => {
        let searchfor = document.getElementById("search").value
        this.setState(
            {
            records: this.state.records.filter(function(rec){
                     if ( rec.name.substring(0,searchfor.length)==searchfor){
                         return true
                    } else{
                        return false
                     }
        })
    })
    }
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
            <div>
                <br></br>
                <div style={{textAlign: 'center'}}>
                <input id='name' type='text' placeholder='Name'></input><br></br>
                <input id='regNo' type='text' placeholder='RegNo'></input><br></br>
                <input id='marks' type='text' placeholder='Marks'></input><br></br>
                <input type='button' onClick={this.addData} value='Add New Student'></input><br></br>
                <br></br>
                <br></br>
                <input id='search' type='text' onChange={this.searchData} placeholder='Search'></input><br></br>
                </div>
            <center>
            <h1>Student Details</h1>
            <table border='2' style={{textAlign: 'center'}}>
                <tr>
                    <td><b>RegNo</b></td><td><b>Name</b></td><td><b>Marks</b></td>
                </tr>
                <tr>
                    <td>Student RegNo</td><td>Student Name</td><td>Student Marks</td>
                </tr>
                {
                    this.state.records.map( data=>
                        <tr>
                        <td> {data.regno} </td>
                        <td> {data.name} </td>
                        <td> {data.marks} </td>
                        <td> <input type='button' onClick={() => this.deleteData(data.regno)} value='Delete Student'></input></td>
                        </tr>
                        )
                }
                </table>
                </center>
            </div>
        </div>
        )
    }
}
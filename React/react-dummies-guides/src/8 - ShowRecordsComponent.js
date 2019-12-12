import React from 'react';

import Allrecords from "../components/ShowRecordsComponent.js"
export default class ShowRecords extends React.Component{

    state={
        employee:[]         // This sets employee as an ARRAY within the state
    }

logOut = () =>{                                 // The logout function is executed by an onClick button on each page
        sessionStorage.removeItem("Role");          // This simply removes the designated Role and ends the current
        console.log(sessionStorage.getItem('Role')) // session, then redirects the page to a fresh Login page again
        this.props.history.push('/Login')
    }
    
render(){
    fetch(`http://localhost:4001/showall`)              //Sending the request to the server to get the data
    .then(response => response.json())             // The return from the DB is in String format, this converts to JSOn format again
    .then(data => {
                this.setState({
                    employee: data              // This puts the Data returned within the Employees Array
                })
        })

if(sessionStorage.getItem('Role')==1){     // This checks if the profile logged in to is an Admin (has a role of 1)  
        return(                             // If true, this then returns the below design/info to the screen
                                            // If false, will then default to the else if below
            <div>                      
                <input type='button' onClick={this.logOut} value='Logout'></input>
                <h2> The list of  {this.state.employee.length} Employees </h2>
                <table>
                    <tr>
                        <th> Emp No</th>
                        <th> Name</th>
                        <th> Address </th>
                        <th> Operations</th>
                    </tr>
                    {
                        this.state.employee.map(rec=>
                            <tr>
                                    <td> {rec.empno} </td>
                                    <td> {rec.Name}</td>
                                    <td> {rec.Address}</td>
                                    <td> <input type='button' onClick={() => this.DeleteEmp()} value='Delete'></input> 
                                    <input type='button' onClick={() => this.EditEmp()} value='Edit'></input> </td>
                            </tr>
                            )
                    }
                </table>
        </div>
)
}

else if (sessionStorage.getItem('Role')==2){    // This checks if the profile logged in to has a User role (2)
                                                // If true, then returns the below info/design to the screen
                                                //The diffference being only Admin roles can see the Address info
    return(
            <div>
                <input type='button' onClick={this.logOut} value='Logout'></input>
                <h2> The list of  {this.state.employee.length} Employees </h2>
                <table>
                    <tr>
                        <th> Employee NO</th>
                        <th> Name</th>
                        <th> Address </th>
                    </tr>
                    {
                        this.state.employee.map(rec=>
                            <tr>
                                    <td> {rec.empno}</td>
                                    <td> {rec.Name}</td>
                                    <td> ADMIN INFO ONLY </td>
                            </tr>
                            )
                    }
                </table>


        </div>
)
    }
    else{
        return(                                 // These lines are the fall back if the profile is neither a 
        this.props.history.push('/Login')       // User or an Admin, and then redirects to a fresh Login page
        )
    }
}
}
import React from 'react';

import Allrecords from "../components/ShowRecordsComponent.js"
export default class ShowRecords extends React.Component{

    state={
        employee:[]
    }
logOut = () =>{
        sessionStorage.removeItem("Role");
        console.log(sessionStorage.getItem('Role'))
        this.props.history.push('/Login')
  
    }

DeleteEmp = () => {
    console.log("USERRRRRRRR DELETEDDDDDDDDDD")
}
    
render(){
    fetch(`http://localhost:4001/showall`)
    .then(response => response.json())
    .then(data => {
    // console.log(data)
                this.setState({
                    employee: data
                })
        })

if(sessionStorage.getItem('Role')==1){        
        return(
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

else if (sessionStorage.getItem('Role')==2){
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
        return(
        this.props.history.push('/Login')
        )
    }
}
}
import React from 'react';

export default class CreateUserComponent extends React.Component{
    
    addUser = () => {
        let Role = document.getElementById("CreateRole").value
        let Username = document.getElementById("CreateUsername").value
        let Password = document.getElementById("CreatePassword").value
        let Name = document.getElementById("CreateName").value
       
        var newuser = JSON.stringify({
            Role:Role,
            Username:Username,
            Password:Password,
            Name:Name
        })
        fetch(`http://localhost:4001/Createuser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: newuser
        })
        this.props.history.push('/Login')
        
    }

    render(){
        
        return (
        <h1 style={{textAlign: 'center'}}> Create User
        <div>
                <br></br>
                <div style={{textAlign: 'center'}}>
                <input id='CreateRole' type='text' placeholder='Role'></input><br></br>
                <input id='CreateUsername' type='text' placeholder='Username'></input><br></br>
                <input id='CreatePassword' type='text' placeholder='Password'></input><br></br>
                <input id='CreateName' type='text' placeholder='Name'></input><br></br>
                <input type='button' onClick={this.addUser} value='Create New User'></input><br></br>
                <br></br>
                <br></br>
                </div>
        </div>
        </h1>
        )
    }
}

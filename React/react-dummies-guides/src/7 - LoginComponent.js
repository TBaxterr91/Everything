import React from 'react';  

export default class LoginComponent extends React.Component{
    
    // The below function is used to check if the Username and Password entered on the webpage
    // exist and match within the Database
    Logincheck = () => {
        var userN = document.getElementById('U').value;     // Gets the value entered in the Username Textfield
        var psW = document.getElementById('P').value;       // Gets the value entered in the Password Textfield
        var check = JSON.stringify({
            Username: userN,                                // This converts the data to JSON format
            Password: psW
        })
       
        fetch('http://localhost:4001/Logincheck', {         //Sending the request to the server to get the data
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: check
        })
            .then(response => response.json(), (error) => console.log(error)) // The return from the DB is in String format, this converts to JSOn format again
            .then(data => {
                sessionStorage.setItem('Role', `${data[0].Role}`);  // This sets the Role value from the DB as 'Role' within the session Storage

                if (sessionStorage.getItem('Role').length>1) {      // This checks whether the 'Role' within the session has a value
                    this.props.history.push('/Showrecords')
                }

                else{
                    this.props.history.push('/Login')}      // If no Role value is returned from the Database, then this redirects
            })                                             // to a fresh Login page again
    }



render() {

    return(     // The below is simply the styling and design of the webpage
            // With a button that onClick will execute the Logincheck function
                <h1 style={{textAlign: 'center'}}> Nationwide Banking Society 
                    <h2 style={{textAlign: 'center'}}> Please Log In </h2>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <input id='U' type='text' placeholder='Username'></input><br></br>
                            <input id='P' type='text' placeholder='Password'></input><br></br>
                            <input type='button' onClick={() => this.Logincheck()} value='Log In'></input><br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </h1>

            )
        }
    }



import React from 'react';  
import Allrecords from "../components/ShowRecordsComponent.js"

export default class LoginComponent extends React.Component{

    Logincheck = () => {
        var userN = document.getElementById('U').value;
        var psW = document.getElementById('P').value;
        var check = JSON.stringify({
            Username: userN,
            Password: psW
        })
        fetch('http://localhost:4001/Logincheck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: check
        })
            .then(response => response.json(), (error) => console.log(error))
            .then(data => {
                sessionStorage.setItem('Role', `${data[0].Role}`);
                console.log(data)
                if (sessionStorage.getItem('Role').length>1) {
                    console.log("hi")
                    this.props.history.push('/Showrecords')
                    // <Allrecords/>
                }
                else{
                    this.props.history.push('/Showrecords')}
            })
    }



render() {

    return(
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



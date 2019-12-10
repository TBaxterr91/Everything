import React from 'react';
import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap'

export default class CreateUser extends React.Component {

    addUser = () => {
        let Username = document.getElementById("CreateUsername").value
        let Password = document.getElementById("CreatePassword").value
       
        var newuser = JSON.stringify({
            Username:Username,
            Password:Password,
        })
        fetch(`http://localhost:4001/Createuser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: newuser
        })
        this.props.history.push('/Login')
        
    }

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" style={{ border: '3px solid', color: 'red' }}>
                    <Navbar.Brand href="/home"><img
                        src="Nationwide.png"
                        width="50"
                        height="50"
                        alt="Nationwide Logo"
                        style={{ borderRadius: '25px' }}
                    /></Navbar.Brand>
                    <Navbar.Text style={{ color: 'white' }}>Nationwide Building Society</Navbar.Text>
                    <Navbar.Text style={{ color: 'white', marginLeft: "150px" }}><h2>Create User</h2></Navbar.Text>
                </Navbar>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <Form style={{ position: 'relative', left: '170px' }} onSubmit={this.newUser}>

                                <Form.Group controlId="UserName">
                                    <Form.Label style={{ color: 'grey' }}>Username:</Form.Label>
                                    <Form.Control name="username" placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId="Password">
                                    <Form.Label style={{ color: 'grey' }}>Password:</Form.Label>
                                    <Form.Control name="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="ConfirmPassword">
                                    <Form.Label style={{ color: 'grey' }}>Confirm Password:</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    Do not share your password with anyone.
                                     </Form.Text>
                                <br />
                                <center>
                                    <Button variant="primary" type="submit">
                                        Submit
                                 </Button>
                                </center>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
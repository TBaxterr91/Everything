import React from 'react';


export default class Button extends React.Component{
    message() {
        alert("Hello Mr Baxter");   //This causes an alert to appear on the top of
        }                           //the screen when the message component is called
        
    render () {
        return (
            <div>
            <button onClick={this.message}> click</button>  
            </div>
                            //{this.message} is called on click of the button, which causes
            );              //the alert to appear on screen
        }
    }
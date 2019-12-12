import React from 'react';


export default class Button extends React.Component{
    message() {
        alert("Hello Mr Baxter");
        }
        
    render () {
        return (
            <div>
            <button onClick={this.message}> click</button>
            </div>
            );
        }
    }

import React from 'react';


export default class State extends React.Component{

    constructor() {
        super();
        this.state={data:15}
        this.Changedata=this.Changedata.bind(this);
    }

Changedata(){
    this.setState({
        data:50
    });
}

    render () {
        return (
            <div>
            {this.state.data}
            <button onClick={this.Changedata}> Change</button>
            </div>
            );
        }
    }
import React from 'react';


export default class State extends React.Component{

    constructor() {
        super();
        this.state={data:15}
        this.Decrement=this.Decrement.bind(this);
        this.Increment=this.Increment.bind(this);
    }

Decrement(){
    this.setState({
        data:this.state.data-1
    });
}

Increment(){
    this.setState({
        data:this.state.data+1
            });
        }
        
            render () {
                return (
                    <div>
                    {this.state.data}
                    <button onClick={this.Increment}> Increment</button>
                    <button onClick={this.Decrement}> Decrement</button>
                    </div>
                    );
                }
    }
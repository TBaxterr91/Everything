import React from 'react';

export default class State extends React.Component{

    constructor() {
        super();                //This is imports the parent constructor information

        this.state={data:15}    //State is set of information within a component

        this.Changedata=this.Changedata.bind(this);
    }                           //Must bind any component being used outside the render()

Changedata(){                   //Cannot change the data within the State directly, must
    this.setState({             //use a component to again setState as another value
        data:50
    });
}

    render () {                 //Within render is everything you want to be shown on screen
        return (                //Within return is what you want returned onto the screen
                        // Everything must be within one overall tag pair
            <div>               
            {this.state.data}
            <button onClick={this.Changedata}> Change</button> 
            </div>
                        // This now calls the Changedata component on click on the button,
                        // Which changes the value of data within the State from 15 to 50
            );
        }
    }

//----------------------------------------------------------------------------------------------------------
//Below is another example of State and Components with extra features of Increment and Decrement the value
//via a button on screen
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
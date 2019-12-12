import React from 'react';


export default class State extends React.Component{

constructor() {
        super();
        this.state={data:""}
        this.Textchange=this.Textchange.bind(this);
    }

Textchange(e){
 let char = e.target.value;
 let length = char.length;

        if((char.substring(length,length-1).charCodeAt(0)>=48) && (char.substring(length,length-1).charCodeAt(0)<=57)){
            this.setState({
                data: this.state.data + parseInt(char.substring(length,length-1))*2
            })
        }
        else if(char.substring(length,length-1)==char.substring(length,length-1).toLowerCase()){
            this.setState({
                data:this.state.data+char.substring(length,length-1).toUpperCase()
            })
        }

        else if (char.substring(length,length-1)==char.substring(length,length-1).toUpperCase()){
            this.setState({
                data:this.state.data+char.substring(length,length-1).toLowerCase()
            })
        }
    }

render () {
        return (
            <div>
            <input onChange = {this.Textchange}/>
            <br></br>
            <input value = {this.state.data}/>
            </div>
            );
        }
    }

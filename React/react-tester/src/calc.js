import React from 'react';

class Math extends React.Component {
    render() {
        let result=""

        if(this.props.operation=="Add"){
            result=this.props.n1+this.props.n2
        } else if (this.props.operation=="Sub"){
            result=this.props.n1-this.props.n2
        } else if (this.props.operation=="Div"){
            result=this.props.n1/this.props.n2
        } else if (this.props.operation=="Mul"){
            result=this.props.n1*this.props.n2
        }
        return (
            <div>
            <table border="2" style={{textAlign: 'center'}}>

  <tr>
    <th>CALCULATION, NO BREATHING</th>
  </tr>
  <tr>
      <td>{this.props.operation}</td>
  </tr>
  <tr>
      <td>First Number : {this.props.no1}</td>
  </tr>
  <tr>
      <td>Second Number : {this.props.no2}</td>
  </tr>
  <tr>
      <td>Result : {result}</td>
  </tr>
</table> 
            </div>
        );
    }
}

export default class Calc extends React.Component {
    render() {
        return (
            <div>
            <Math operation="Add" n1={10} n2={13}/>
            <Math operation="Sub" n1={10} n2={2}/>
            <Math operation="Div" n1={10} n2={0}/>
            <Math operation="Mul" n1={10} n2={10}/>
            </div>
        );
    }
}
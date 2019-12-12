import React from 'react';

class Timestable extends React.Component {
    render() {

        var number=this.props.num
        var start=this.props.start
        var end=this.props.end

        var result=[]

        if(start<end)
        for (var i=start;i<=end;i++){
            result.push( <div> {number} * {i} = {number * i}<br/></div>)
        }
        else if(start>=end)
        for (var i=start;i>=end;i--){
            result.push( <div>{number} * {i} = {number * i}<br/></div>)
        }

        return (
            
            <div>
            <table border="2" style={{textAlign: 'center'}}>

  <tr>
    <th>~~ TimesTables ~~</th>
  </tr>
  <tr>
      <td>{this.props.num} Timestables</td>
  </tr>
  <tr>
      <td>Start : {this.props.start}</td>
  </tr>
  <tr>
      <td>End : {this.props.end}</td>
  </tr>
  <tr>
      <td>{result}</td>
  </tr>
</table> 
            

            </div>
        );
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <Timestable num={5} start={10} end={30}/>
            </div>
        );
    }
}
import React from 'react';

class Timestable extends React.Component {
    render() {

        var number=this.props.num
        var start=this.props.start        //These identify the data sent from the bottom component
        var end=this.props.end            //which has sent through data, which is stored in the props

        var result=[]           //This creates an Array called result

        if(start<end)
        for (var i=start;i<=end;i++){       //This pulls through the Start and End numbers
            result.push( <div> {number} * {i} = {number * i}<br/></div>)
        }                                   //result.push - This sends through to the result
                                            //array the required values(timestables)

        else if(start>=end)                 //This is simply the above, but where you start
        for (var i=start;i>=end;i--){       //with a larger number and end with a smaller one
            result.push( <div>{number} * {i} = {number * i}<br/></div>)
        }

        return (
                        //The below is just how you wish the information to be displayed, in this case
                        //in a table. tr is for each row, then td is for each coloumn in that row
                        //{result} does not need this.props as it was not passed to the props from the
                        //original component, but was created in this component
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
            //This simply passes through the above numbers to the Timestable component
            //to be processed by that component
        );
    }
}
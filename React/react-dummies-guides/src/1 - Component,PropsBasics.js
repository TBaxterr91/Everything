//All react files must have import React from 'react'; at the beginning
import React from 'react';

// All react classes must "extends React.Component"
class Records extends React.Component {
    render() {                          //Everything within the return section of render() 
        let taxpaid = 0                 //will be shown on screen

        let salary = this.props.salary  //this.props.salary identifies the salary that has been
                                        //passed through to the component
                                        //'props' is a built in part of React, it is simply
                                        //an example of where information can be stored

        if(salary<=1000){                           //This area is for the logic/code
            taxpaid = 0                             //You wish to write to determine
        } else if (salary>1000 && salary<=2000){    //What is returned and shown on screen
            taxpaid = (salary/100)*20
        } else if (salary>2000){
            taxpaid = (salary/100)*50
        }

        return (
                            //Everything within return must be in one overall tag pair 
                            //(div, or h1 etc), you CAN nest more tag pairs within the overall
                            //tag
<div>
     <table border="2" style={{textAlign: 'center'}}>

    <tr>
        <th>Employee Name</th>
        <th>Salary</th>
        <th>Tax</th>
        <th>Net Salary</th>
    </tr>
    <tr>
        <td>{this.props.name}</td>
        <td>{this.props.salary}</td>
        <td>{taxpaid}</td>
        <td>{salary-taxpaid}</td>
    </tr>
    </table> 
</div>
        );
    }
}

// At least one class must have 'export default' - This allows it to be imported into 
// the index.js file, which allows the program to be run and app seen on screen

//within the index.js file, must copy and paste 

export default class Details extends React.Component {
    render() {
        return (
            <div>
            <Records name="Tom" salary={1500}/> 
            <Records name="Oli " salary={500}/>
            <Records name="Bobby " salary={2500}/>
            </div>

            //The above lines of code send through the names and salarys to the Records
            //component, which receives them and returns the tax, salary etc to allow the
            //Records component to display the correct info on screen
            //these values will be stored within 'props' in the component
        );
    }
}
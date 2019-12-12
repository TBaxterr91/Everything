import React from 'react';


export default class MapComponent extends React.Component{
    
    constructor() {
        super();
        this.numbers2=[10,20,40,50]             //These are two ways of writing this array, either
        this.state={                        //within the state or not, the state is not REQUIRED with this example
            numbers:[10,20,40,50]
        }

        //The map component must be passed a function with one value eg(data)
    this.newnumbers=this.numbers2.map(function(data){
        let Res = data*3                //This returns the values entered multiplied by 3 to a new array
        return Res                      //This then returns the new array to the screen
    })
}

render () {
    return (
        <div>
            {this.numbers2}
            <br/>
        {this.newnumbers}
        </div>
        );
    }
}

//----------------------------------------------------------------------------------------------
//The filter function will always return a boolean value (true or false)
//In the example below, it will only return records where the Regno DOES NOT match
//thereby effectively deleting the inputted Regno record from the array

import React from 'react';


export default class Statearray extends React.Component{

constructor() {
        super();
        this.state={
            records:[
                {
                    regno:1,
                    name:'Tom',
                    marks:100
                },
                {
                    regno:2,
                    name:'Bob',
                    marks:50
                },
                {
                    regno:3,
                    name:'Paul',
                    marks:150
                }
            ]
        }
        
        this.addData=this.addData.bind(this);
        this.deleteData=this.deleteData.bind(this);
        this.searchData=this.searchData.bind(this);
    }

    addData( ){
        let regNo = document.getElementById("regNo").value          //These lines get the value of the textboxes
        let name = document.getElementById("name").value            //and assign that value to the variables
        let marks = document.getElementById("marks").value          //this the allows us to push those values into
        this.state.records.push({regno:regNo, name:name, marks:marks})  //the array as a new record
        this.setState({
            records : this.state.records
        });
    }

                            //This component will only return true where the Regno DOES NOT match 
      deleteData(regNo){    //=! means is not equal to thereby effectively deleting the 
                            //inputted Regno record from the array (if the regno matches
         this.setState({    //it will return false and therefore not be included within the returned results
            records : this.state.records.filter(record => record.regno != regNo)
        });
    }

    searchData(){           //The below takes the value entered into the search textfield and assigns it to a variable
        let searchfor = document.getElementById("search").value 
        this.setState(
            {
            records: this.state.records.filter(function(rec){         //Filter must receive a function with one value
                     if (rec.name.substring(0,searchfor.length)==searchfor){ 
                         return true        //The above checks via substring, the value entered within the search field
                    } else{                 //and filters the records by whether the same substrings of the name match or not
                        return false        //if the letters match, it returns true, if not, it returns false
                     }
        })
    })

    }
//The below is the render to see on screen, including a table, a search textfield, one add button with
//relevant textfields to complete as well as a delete button next to each record that removes that record
//from the array
render () {
        return (
            
            <div>
                <br></br>
                <div style={{textAlign: 'center'}}>
                <input id='name' type='text' placeholder='Name'></input><br></br>
                <input id='regNo' type='text' placeholder='RegNo'></input><br></br>
                <input id='marks' type='text' placeholder='Marks'></input><br></br>
                <input type='button' onClick={this.addData} value='Add New Student'></input><br></br>
                <br></br>
                <br></br>
                <input id='search' type='text' onChange={this.searchData} placeholder='Search'></input><br></br>
                </div>

            <center>
            <h1>Student Details</h1>
            
            <table border='2' style={{textAlign: 'center'}}>
                <tr>
                    <td><b>RegNo</b></td><td><b>Name</b></td><td><b>Marks</b></td>
                </tr>
                <tr>
                    <td>Student RegNo</td><td>Student Name</td><td>Student Marks</td>
                </tr>
                
                {
                    this.state.records.map( data=>
                        <tr>
                        <td> {data.regno} </td>
                        <td> {data.name} </td>
                        <td> {data.marks} </td>
                        <td> <input type='button' onClick={() => this.deleteData(data.regno)} value='Delete Student'></input></td>
                        </tr>
                        )
                }
                </table>
                </center>
            </div>
            );
        }
    }
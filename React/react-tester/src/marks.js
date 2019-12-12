import React from 'react';

class Results extends React.Component {
    render() {
        let total= this.props.mat + this.props.phy + this.props.che
        let per = (total*100)/450;
        let remarks = ""

        if(per>60){
            remarks = <b><font color ='green'> PASS </font></b>
        } else {
            remarks = <b><font color ='red'> FAILED </font></b>
        }
        return (

            <div>
            {this.props.name}<br></br>
            Physics: {this.props.phy}<br></br>
            Maths: {this.props.mat}<br></br>
            Chemistry: {this.props.che}<br></br>
            Results: {total}<br></br>
            Percentage: {per}<br></br>
            Exam Result: {remarks}<br></br>
            <br></br>
            </div>
        );
    }
}

export default class Marks extends React.Component {
    render() {
        return (
            <div>
            <Results name="Tom" phy={80} che={100} mat={50}/>
            <Results name="Oli " phy={300} che={100} mat={10}/>
            </div>
        );
    }
}
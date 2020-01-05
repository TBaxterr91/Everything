import React from 'react';


export default class ShowRecords extends React.Component{


render(){
            fetch(`http://localhost:2700/getEmployee`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    employee: data
                }, () => { console.log(this.state); })

            })
            }
}




 
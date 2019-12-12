import React from 'react';


export default class Mapfilter extends React.Component{
    
    constructor() {
        super();
        this.numbers2=[10,20,40,50]
        this.state={
            numbers:[10,20,40,50]
        }

    this.newnumbers=this.numbers2.map(function(data){
        let Res = data*3
        return Res
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



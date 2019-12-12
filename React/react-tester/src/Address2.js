import React from 'react';

class Info extends React.Component {
    render() {
        return (
            <div>
            {this.props.name} lives in {this.props.address}
            </div>
        );
    }
}

export default class details extends React.Component {
    render() {
        return (
            <div>
            <Info name="Tom" address="Swindon"/>
            <Info name="Oli" address="Down Town"/>
            </div>
        );
    }
}